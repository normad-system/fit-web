import { Component, signal, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-compound-interest',
  imports: [FormsModule, RouterLink, DecimalPipe],
  template: `
    <div class="calc-page">
      <a routerLink="/category/accounting" class="back">← 会計</a>
      <h1>📊 複利計算</h1>
      <p class="desc">元本・年利・期間から複利で増えた金額を計算します。</p>
      <div class="calc-body">
        <div class="input-group"><label>元本 (円)</label><input type="number" [ngModel]="principal()" (ngModelChange)="principal.set($event)" placeholder="1000000" /></div>
        <div class="input-group"><label>年利 (%)</label><input type="number" step="0.1" [ngModel]="rate()" (ngModelChange)="rate.set($event)" placeholder="5" /></div>
        <div class="input-group"><label>期間 (年)</label><input type="number" [ngModel]="years()" (ngModelChange)="years.set($event)" placeholder="10" /></div>
        <div class="input-group"><label>複利の頻度</label>
          <div class="rate-btns">
            <button [class.active]="freq() === 1" (click)="freq.set(1)">年1回</button>
            <button [class.active]="freq() === 2" (click)="freq.set(2)">半年</button>
            <button [class.active]="freq() === 4" (click)="freq.set(4)">四半期</button>
            <button [class.active]="freq() === 12" (click)="freq.set(12)">毎月</button>
          </div>
        </div>
        @if (result()) {
          <div class="result-box">
            <div class="result-main"><span class="result-label">最終金額</span><span class="result-value">¥{{ result()!.total | number }}</span></div>
            <div class="result-row"><span>利息合計</span><span class="result-value" style="color:#10b981">¥{{ result()!.interest | number }}</span></div>
            <div class="result-row"><span>増加率</span><span class="result-value">{{ result()!.growthPct }}%</span></div>
          </div>
        }
      </div>
    </div>
  `,
  styles: `.rate-btns{display:flex;gap:8px;flex-wrap:wrap;}.rate-btns button{padding:8px 18px;border:1.5px solid #d1d5db;border-radius:8px;background:white;cursor:pointer;font-size:.9rem;font-family:inherit;transition:all .2s;}.rate-btns button.active{background:#6366f1;color:white;border-color:#6366f1;}.result-row{display:flex;justify-content:space-between;padding:8px 0;}`,
})
export class CompoundInterestCalcComponent {
  principal = signal<number | null>(null);
  rate = signal<number | null>(null);
  years = signal<number | null>(null);
  freq = signal(1);
  result = computed(() => {
    const p = this.principal(), r = this.rate(), y = this.years(), f = this.freq();
    if (!p || !r || !y || p <= 0 || y <= 0) return null;
    const total = Math.round(p * Math.pow(1 + r / 100 / f, f * y));
    const interest = total - p;
    const growthPct = +((interest / p) * 100).toFixed(1);
    return { total, interest, growthPct };
  });
}
