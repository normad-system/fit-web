import { Component, signal, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-consumption-tax',
  imports: [FormsModule, RouterLink, DecimalPipe],
  template: `
    <div class="calc-page">
      <a routerLink="/category/tax" class="back">← 税金</a>
      <h1>🏛️ 消費税計算</h1>
      <p class="desc">税込み・税抜き価格を即座に計算します。</p>

      <div class="calc-body">
        <div class="input-group">
          <label>税率 (%)</label>
          <div class="rate-btns">
            <button [class.active]="taxRate() === 8" (click)="taxRate.set(8)">8%（軽減）</button>
            <button [class.active]="taxRate() === 10" (click)="taxRate.set(10)">10%</button>
            <input type="number" [ngModel]="taxRate()" (ngModelChange)="taxRate.set($event)" style="width:80px" />
          </div>
        </div>

        <div class="input-group">
          <label>税抜き価格 (円)</label>
          <input type="number" [ngModel]="priceExTax()" (ngModelChange)="priceExTax.set($event)" placeholder="1000" />
        </div>

        @if (results()) {
          <div class="result-box">
            <div class="result-row">
              <span>消費税額</span>
              <span class="result-value">¥{{ results()!.tax | number }}</span>
            </div>
            <div class="result-row main">
              <span>税込み価格</span>
              <span class="result-value big">¥{{ results()!.incTax | number }}</span>
            </div>
          </div>
        }

        <hr class="divider" />
        <h3 class="sub-title">税込み → 税抜き逆算</h3>
        <div class="input-group">
          <label>税込み価格 (円)</label>
          <input type="number" [ngModel]="priceIncTax()" (ngModelChange)="priceIncTax.set($event)" placeholder="1100" />
        </div>
        @if (reverseResults()) {
          <div class="result-box">
            <div class="result-row">
              <span>消費税額</span>
              <span class="result-value">¥{{ reverseResults()!.tax | number }}</span>
            </div>
            <div class="result-row main">
              <span>税抜き価格</span>
              <span class="result-value big">¥{{ reverseResults()!.exTax | number }}</span>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: `
    .rate-btns {
      display: flex;
      gap: 8px;
      align-items: center;
      flex-wrap: wrap;
    }
    .rate-btns button {
      padding: 8px 18px;
      border: 1.5px solid #d1d5db;
      border-radius: 8px;
      background: white;
      cursor: pointer;
      font-size: 0.9rem;
      font-family: inherit;
      transition: all 0.2s;
    }
    .rate-btns button.active {
      background: #6366f1;
      color: white;
      border-color: #6366f1;
    }
    .divider {
      border: none;
      border-top: 1px solid #e5e7eb;
      margin: 32px 0;
    }
    .sub-title {
      font-size: 1.1rem;
      font-weight: 700;
      color: #374151;
      margin: 0 0 16px;
    }
    .result-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
    }
    .result-row.main {
      border-top: 1px solid #e5e7eb;
      padding-top: 12px;
      margin-top: 4px;
    }
    .result-value.big {
      font-size: 1.5rem;
    }
  `,
})
export class ConsumptionTaxCalcComponent {
  taxRate = signal(10);
  priceExTax = signal<number | null>(null);
  priceIncTax = signal<number | null>(null);

  results = computed(() => {
    const p = this.priceExTax();
    const r = this.taxRate();
    if (!p || p <= 0) return null;
    const tax = Math.floor(p * (r / 100));
    return { tax, incTax: p + tax };
  });

  reverseResults = computed(() => {
    const p = this.priceIncTax();
    const r = this.taxRate();
    if (!p || p <= 0) return null;
    const exTax = Math.ceil(p / (1 + r / 100));
    const tax = p - exTax;
    return { exTax, tax };
  });
}
