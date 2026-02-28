import { Component, signal, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-tip',
  imports: [FormsModule, RouterLink, DecimalPipe],
  template: `
    <div class="calc-page">
      <a routerLink="/category/daily" class="back">← 生活</a>
      <h1>🏠 チップ計算</h1>
      <p class="desc">チップ金額の計算と割り勘を行います。</p>
      <div class="calc-body">
        <div class="input-group"><label>お会計金額 (円)</label><input type="number" [ngModel]="bill()" (ngModelChange)="bill.set($event)" placeholder="5000" /></div>
        <div class="input-group">
          <label>チップ率 (%)</label>
          <div class="rate-btns">
            @for (r of [10, 15, 18, 20]; track r) { <button [class.active]="tipRate() === r" (click)="tipRate.set(r)">{{ r }}%</button> }
            <input type="number" [ngModel]="tipRate()" (ngModelChange)="tipRate.set($event)" style="width:80px" />
          </div>
        </div>
        <div class="input-group"><label>人数</label><input type="number" [ngModel]="people()" (ngModelChange)="people.set($event)" placeholder="1" min="1" /></div>
        @if (result()) {
          <div class="result-box">
            <div class="result-row"><span>チップ額</span><span class="result-value">¥{{ result()!.tip | number }}</span></div>
            <div class="result-row"><span>合計</span><span class="result-value big">¥{{ result()!.total | number }}</span></div>
            @if (result()!.perPerson) { <div class="result-row"><span>1人あたり</span><span class="result-value">¥{{ result()!.perPerson | number }}</span></div> }
          </div>
        }
      </div>
    </div>
  `,
  styles: `.rate-btns{display:flex;gap:8px;align-items:center;flex-wrap:wrap;}.rate-btns button{padding:8px 18px;border:1.5px solid #d1d5db;border-radius:8px;background:white;cursor:pointer;font-size:.9rem;font-family:inherit;transition:all .2s;}.rate-btns button.active{background:#6366f1;color:white;border-color:#6366f1;}.result-row{display:flex;justify-content:space-between;padding:8px 0;}.result-value.big{font-size:1.5rem;}`,
})
export class TipCalcComponent {
  bill = signal<number | null>(null);
  tipRate = signal(15);
  people = signal(1);
  result = computed(() => {
    const b = this.bill(); const r = this.tipRate(); const p = this.people();
    if (!b || b <= 0 || !r) return null;
    const tip = Math.round(b * r / 100);
    const total = b + tip;
    const perPerson = p > 1 ? Math.ceil(total / p) : null;
    return { tip, total, perPerson };
  });
}
