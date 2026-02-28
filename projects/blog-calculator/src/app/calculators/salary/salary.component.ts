import { Component, signal, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-salary',
  imports: [FormsModule, RouterLink, DecimalPipe],
  template: `
    <div class="calc-page">
      <a routerLink="/category/tax" class="back">← 税金</a>
      <h1>🏛️ 給与手取り計算</h1>
      <p class="desc">額面給与（月額）から社会保険料・税金を差し引いた手取り額を概算します。</p>
      <div class="calc-body">
        <div class="input-group"><label>額面月給 (万円)</label><input type="number" [ngModel]="grossMonthly()" (ngModelChange)="grossMonthly.set($event)" placeholder="30" /></div>
        <div class="input-group"><label>扶養人数</label><input type="number" [ngModel]="dependents()" (ngModelChange)="dependents.set($event)" placeholder="0" min="0" /></div>
        @if (result()) {
          <div class="result-box">
            <div class="result-row"><span>額面月給</span><span class="result-value">¥{{ result()!.gross | number }}</span></div>
            <div class="result-row"><span>健康保険料（約5%）</span><span class="result-value" style="color:#ef4444">-¥{{ result()!.healthIns | number }}</span></div>
            <div class="result-row"><span>厚生年金（約9.15%）</span><span class="result-value" style="color:#ef4444">-¥{{ result()!.pension | number }}</span></div>
            <div class="result-row"><span>雇用保険（約0.6%）</span><span class="result-value" style="color:#ef4444">-¥{{ result()!.employment | number }}</span></div>
            <div class="result-row"><span>所得税（概算）</span><span class="result-value" style="color:#ef4444">-¥{{ result()!.incomeTax | number }}</span></div>
            <div class="result-row"><span>住民税（概算）</span><span class="result-value" style="color:#ef4444">-¥{{ result()!.residentTax | number }}</span></div>
            <div class="result-main"><span class="result-label">手取り月額</span><span class="result-value">¥{{ result()!.net | number }}</span></div>
            <div class="result-row"><span>手取り率</span><span class="result-value">{{ result()!.netRatio }}%</span></div>
            <div class="result-row"><span>年間手取り（概算・賞与なし）</span><span class="result-value">¥{{ result()!.netYearly | number }}</span></div>
          </div>
        }
        <div class="note" style="margin-top:16px;font-size:0.8rem;color:#9ca3af;">※ 概算値です。実際の金額は会社・地域・条件により異なります。</div>
      </div>
    </div>
  `,
  styles: `.result-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f3f4f6;}.result-row:last-child{border-bottom:none;}`,
})
export class SalaryCalcComponent {
  grossMonthly = signal<number | null>(null);
  dependents = signal(0);
  result = computed(() => {
    const gm = this.grossMonthly();
    if (!gm || gm <= 0) return null;
    const gross = gm * 10000;
    const healthIns = Math.round(gross * 0.05);
    const pension = Math.round(gross * 0.0915);
    const employment = Math.round(gross * 0.006);
    const socialTotal = healthIns + pension + employment;
    const taxableMonthly = gross - socialTotal - (this.dependents() * 31667);
    const incomeTax = Math.max(0, Math.round(taxableMonthly * 0.05));
    const residentTax = Math.max(0, Math.round(taxableMonthly * 0.10 / 12 * 8.5));
    const totalDeductions = socialTotal + incomeTax + residentTax;
    const net = gross - totalDeductions;
    const netRatio = +((net / gross) * 100).toFixed(1);
    return { gross, healthIns, pension, employment, incomeTax, residentTax, net, netRatio, netYearly: net * 12 };
  });
}
