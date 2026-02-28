import { Component, signal, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-depreciation',
  imports: [FormsModule, RouterLink, DecimalPipe],
  template: `
    <div class="calc-page">
      <a routerLink="/category/accounting" class="back">← 会計</a>
      <h1>📊 減価償却計算</h1>
      <p class="desc">定額法・定率法で年間の減価償却費を計算します。</p>
      <div class="calc-body">
        <div class="input-group"><label>取得価額 (円)</label><input type="number" [ngModel]="cost()" (ngModelChange)="cost.set($event)" placeholder="1000000" /></div>
        <div class="input-group"><label>耐用年数 (年)</label><input type="number" [ngModel]="life()" (ngModelChange)="life.set($event)" placeholder="5" /></div>
        <div class="input-group"><label>残存価額 (円) ※定額法</label><input type="number" [ngModel]="salvage()" (ngModelChange)="salvage.set($event)" placeholder="1" /></div>
        @if (result()) {
          <div class="result-box">
            <h4 style="margin:0 0 12px;">定額法</h4>
            <div class="result-row"><span>年間償却費</span><span class="result-value">¥{{ result()!.straightLine | number }}</span></div>
            <div class="result-row"><span>月間償却費</span><span class="result-value">¥{{ result()!.straightLineMonthly | number }}</span></div>
            <hr style="border:none;border-top:1px solid #f3f4f6;margin:16px 0" />
            <h4 style="margin:0 0 12px;">定率法（200%定率法）</h4>
            <div class="result-row"><span>償却率</span><span class="result-value">{{ result()!.decliningRate }}%</span></div>
            <div class="result-row"><span>初年度償却費</span><span class="result-value">¥{{ result()!.decliningFirst | number }}</span></div>
          </div>
        }
      </div>
    </div>
  `,
  styles: `.result-row{display:flex;justify-content:space-between;padding:8px 0;}`,
})
export class DepreciationCalcComponent {
  cost = signal<number | null>(null);
  life = signal<number | null>(null);
  salvage = signal(1);
  result = computed(() => {
    const c = this.cost(), l = this.life(), s = this.salvage() ?? 1;
    if (!c || !l || c <= 0 || l <= 0) return null;
    const straightLine = Math.round((c - s) / l);
    const straightLineMonthly = Math.round(straightLine / 12);
    const decliningRate = +((2 / l) * 100).toFixed(2);
    const decliningFirst = Math.round(c * (2 / l));
    return { straightLine, straightLineMonthly, decliningRate, decliningFirst };
  });
}
