import { Component, signal, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-income-tax',
  imports: [FormsModule, RouterLink, DecimalPipe],
  template: `
    <div class="calc-page">
      <a routerLink="/category/tax" class="back">← 税金</a>
      <h1>🏛️ 所得税計算</h1>
      <p class="desc">課税所得金額から所得税額を計算します（日本の累進課税）。</p>
      <div class="calc-body">
        <div class="input-group"><label>課税所得 (万円)</label><input type="number" [ngModel]="income()" (ngModelChange)="income.set($event)" placeholder="500" /></div>
        @if (result()) {
          <div class="result-box">
            <div class="result-row"><span>適用税率</span><span class="result-value">{{ result()!.rate }}%</span></div>
            <div class="result-row"><span>控除額</span><span class="result-value">¥{{ result()!.deduction | number }}</span></div>
            <div class="result-main"><span class="result-label">所得税額</span><span class="result-value">¥{{ result()!.tax | number }}</span></div>
            <div class="result-row"><span>復興特別所得税 (2.1%)</span><span class="result-value">¥{{ result()!.reconstruction | number }}</span></div>
            <div class="result-row"><span>合計税額</span><span class="result-value" style="font-weight:700">¥{{ result()!.totalTax | number }}</span></div>
            <div class="result-row"><span>実効税率</span><span class="result-value">{{ result()!.effectiveRate }}%</span></div>
          </div>
        }
      </div>
    </div>
  `,
  styles: `.result-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f3f4f6;}.result-row:last-child{border-bottom:none;}`,
})
export class IncomeTaxCalcComponent {
  income = signal<number | null>(null);
  private brackets = [
    { limit: 195, rate: 5, deduction: 0 },
    { limit: 330, rate: 10, deduction: 97500 },
    { limit: 695, rate: 20, deduction: 427500 },
    { limit: 900, rate: 23, deduction: 636000 },
    { limit: 1800, rate: 33, deduction: 1536000 },
    { limit: 4000, rate: 40, deduction: 2796000 },
    { limit: Infinity, rate: 45, deduction: 4796000 },
  ];
  result = computed(() => {
    const incomeMan = this.income();
    if (!incomeMan || incomeMan <= 0) return null;
    const incomeYen = incomeMan * 10000;
    const bracket = this.brackets.find((b) => incomeMan <= b.limit) ?? this.brackets[this.brackets.length - 1];
    const tax = Math.floor(incomeYen * bracket.rate / 100 - bracket.deduction);
    const reconstruction = Math.floor(tax * 0.021);
    const totalTax = tax + reconstruction;
    const effectiveRate = +((totalTax / incomeYen) * 100).toFixed(2);
    return { rate: bracket.rate, deduction: bracket.deduction, tax, reconstruction, totalTax, effectiveRate };
  });
}
