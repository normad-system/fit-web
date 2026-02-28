import { Component, signal, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-discount',
  imports: [FormsModule, RouterLink, DecimalPipe],
  template: `
    <div class="calc-page">
      <a routerLink="/category/daily" class="back">← 生活</a>
      <h1>🏠 割引計算</h1>
      <p class="desc">元の価格と割引率から、割引後の価格を計算します。</p>

      <div class="calc-body">
        <div class="input-group">
          <label>元の価格 (円)</label>
          <input type="number" [ngModel]="price()" (ngModelChange)="price.set($event)" placeholder="5000" />
        </div>
        <div class="input-group">
          <label>割引率 (%)</label>
          <div class="rate-btns">
            @for (r of [10, 20, 30, 50]; track r) {
              <button [class.active]="rate() === r" (click)="rate.set(r)">{{ r }}%</button>
            }
            <input type="number" [ngModel]="rate()" (ngModelChange)="rate.set($event)" style="width:80px" />
          </div>
        </div>

        @if (result()) {
          <div class="result-box">
            <div class="result-row">
              <span>割引額</span>
              <span class="result-value" style="color:#ef4444">-¥{{ result()!.saved | number }}</span>
            </div>
            <div class="result-row main">
              <span>割引後の価格</span>
              <span class="result-value big">¥{{ result()!.final | number }}</span>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: `
    .rate-btns { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
    .rate-btns button {
      padding: 8px 18px; border: 1.5px solid #d1d5db; border-radius: 8px;
      background: white; cursor: pointer; font-size: 0.9rem; font-family: inherit; transition: all 0.2s;
    }
    .rate-btns button.active { background: #6366f1; color: white; border-color: #6366f1; }
    .result-row { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; }
    .result-row.main { border-top: 1px solid #e5e7eb; padding-top: 12px; margin-top: 4px; }
    .result-value.big { font-size: 1.5rem; }
  `,
})
export class DiscountCalcComponent {
  price = signal<number | null>(null);
  rate = signal<number | null>(20);

  result = computed(() => {
    const p = this.price();
    const r = this.rate();
    if (!p || !r || p <= 0 || r <= 0) return null;
    const saved = Math.round(p * (r / 100));
    return { saved, final: p - saved };
  });
}
