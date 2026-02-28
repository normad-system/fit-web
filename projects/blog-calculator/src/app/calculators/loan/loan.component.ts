import { Component, signal, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-loan',
  imports: [FormsModule, RouterLink, DecimalPipe],
  template: `
    <div class="calc-page">
      <a routerLink="/category/accounting" class="back">← 会計</a>
      <h1>📊 ローン返済計算</h1>
      <p class="desc">借入額・金利・返済期間から月々の返済額と総返済額を計算します。</p>

      <div class="calc-body">
        <div class="input-group">
          <label>借入額 (万円)</label>
          <input type="number" [ngModel]="principal()" (ngModelChange)="principal.set($event)" placeholder="3000" />
        </div>
        <div class="input-group">
          <label>年利 (%)</label>
          <input type="number" step="0.1" [ngModel]="annualRate()" (ngModelChange)="annualRate.set($event)" placeholder="1.5" />
        </div>
        <div class="input-group">
          <label>返済期間 (年)</label>
          <input type="number" [ngModel]="years()" (ngModelChange)="years.set($event)" placeholder="35" />
        </div>

        @if (result()) {
          <div class="result-box">
            <div class="result-row main">
              <span>毎月の返済額</span>
              <span class="result-value big">¥{{ result()!.monthly | number }}</span>
            </div>
            <div class="result-row">
              <span>総返済額</span>
              <span class="result-value">¥{{ result()!.total | number }}</span>
            </div>
            <div class="result-row">
              <span>利息合計</span>
              <span class="result-value" style="color:#ef4444">¥{{ result()!.interest | number }}</span>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: `
    .result-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
    }
    .result-row.main {
      padding-bottom: 12px;
      margin-bottom: 8px;
      border-bottom: 1px solid #e5e7eb;
    }
    .result-value.big { font-size: 1.5rem; }
  `,
})
export class LoanCalcComponent {
  principal = signal<number | null>(null);
  annualRate = signal<number | null>(null);
  years = signal<number | null>(null);

  result = computed(() => {
    const p = (this.principal() ?? 0) * 10000;
    const r = (this.annualRate() ?? 0) / 100 / 12;
    const n = (this.years() ?? 0) * 12;
    if (p <= 0 || r <= 0 || n <= 0) return null;
    const monthly = Math.round((p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    const total = monthly * n;
    return { monthly, total, interest: total - p };
  });
}
