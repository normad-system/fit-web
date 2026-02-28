import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-date-diff',
  imports: [FormsModule, RouterLink],
  template: `
    <div class="calc-page">
      <a routerLink="/category/daily" class="back">← 生活</a>
      <h1>🏠 日数計算</h1>
      <p class="desc">2つの日付の間の日数を計算します。</p>
      <div class="calc-body">
        <div class="input-group"><label>開始日</label><input type="date" [ngModel]="startDate()" (ngModelChange)="startDate.set($event)" /></div>
        <div class="input-group"><label>終了日</label><input type="date" [ngModel]="endDate()" (ngModelChange)="endDate.set($event)" /></div>
        @if (result()) {
          <div class="result-box">
            <div class="result-main"><span class="result-label">日数</span><span class="result-value">{{ result()!.days }}日</span></div>
            <div class="result-row"><span>週数</span><span class="result-value">{{ result()!.weeks }}週 {{ result()!.remainDays }}日</span></div>
            <div class="result-row"><span>月数（概算）</span><span class="result-value">約{{ result()!.months }}ヶ月</span></div>
            <div class="result-row"><span>年数（概算）</span><span class="result-value">約{{ result()!.years }}年</span></div>
          </div>
        }
      </div>
    </div>
  `,
  styles: `.result-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f3f4f6;}.result-row:last-child{border-bottom:none;}`,
})
export class DateDiffCalcComponent {
  startDate = signal('');
  endDate = signal('');
  result = computed(() => {
    const s = this.startDate(), e = this.endDate();
    if (!s || !e) return null;
    const sd = new Date(s), ed = new Date(e);
    if (isNaN(sd.getTime()) || isNaN(ed.getTime())) return null;
    const diff = Math.abs(ed.getTime() - sd.getTime());
    const days = Math.round(diff / 86400000);
    return { days, weeks: Math.floor(days / 7), remainDays: days % 7, months: +(days / 30.44).toFixed(1), years: +(days / 365.25).toFixed(2) };
  });
}
