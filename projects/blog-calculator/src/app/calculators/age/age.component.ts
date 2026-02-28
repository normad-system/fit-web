import { Component, signal, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-age',
  imports: [FormsModule, RouterLink, DecimalPipe],
  template: `
    <div class="calc-page">
      <a routerLink="/category/daily" class="back">← 生活</a>
      <h1>🏠 年齢計算</h1>
      <p class="desc">生年月日から現在の年齢、生きた日数などを計算します。</p>
      <div class="calc-body">
        <div class="input-group">
          <label>生年月日</label>
          <input type="date" [ngModel]="birthday()" (ngModelChange)="birthday.set($event)" />
        </div>
        @if (result()) {
          <div class="result-box">
            <div class="result-main"><span class="result-label">年齢</span><span class="result-value">{{ result()!.years }}歳</span></div>
            <div class="result-row"><span>生きた月数</span><span class="result-value">{{ result()!.months }}ヶ月</span></div>
            <div class="result-row"><span>生きた日数</span><span class="result-value">{{ result()!.days | number }}日</span></div>
            <div class="result-row"><span>次の誕生日まで</span><span class="result-value">{{ result()!.nextBirthday }}日</span></div>
          </div>
        }
      </div>
    </div>
  `,
  styles: `.result-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f3f4f6;}.result-row:last-child{border-bottom:none;}`,
})
export class AgeCalcComponent {
  birthday = signal('');
  result = computed(() => {
    const b = this.birthday();
    if (!b) return null;
    const bd = new Date(b);
    const now = new Date();
    if (isNaN(bd.getTime()) || bd > now) return null;
    let years = now.getFullYear() - bd.getFullYear();
    if (now.getMonth() < bd.getMonth() || (now.getMonth() === bd.getMonth() && now.getDate() < bd.getDate())) years--;
    const diff = now.getTime() - bd.getTime();
    const days = Math.floor(diff / 86400000);
    const months = years * 12 + now.getMonth() - bd.getMonth() + (now.getDate() < bd.getDate() ? -1 : 0);
    let next = new Date(now.getFullYear(), bd.getMonth(), bd.getDate());
    if (next <= now) next = new Date(now.getFullYear() + 1, bd.getMonth(), bd.getDate());
    const nextBirthday = Math.ceil((next.getTime() - now.getTime()) / 86400000);
    return { years, months, days, nextBirthday };
  });
}
