import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-body-fat',
  imports: [FormsModule, RouterLink],
  template: `
    <div class="calc-page">
      <a routerLink="/category/health" class="back">← 健康</a>
      <h1>💪 体脂肪率推定</h1>
      <p class="desc">BMIベースの推定式で体脂肪率を概算します。</p>
      <div class="calc-body">
        <div class="input-group">
          <label>性別</label>
          <div class="rate-btns">
            <button [class.active]="gender() === 'male'" (click)="gender.set('male')">男性</button>
            <button [class.active]="gender() === 'female'" (click)="gender.set('female')">女性</button>
          </div>
        </div>
        <div class="input-group"><label>年齢</label><input type="number" [ngModel]="age()" (ngModelChange)="age.set($event)" placeholder="30" /></div>
        <div class="input-group"><label>身長 (cm)</label><input type="number" [ngModel]="height()" (ngModelChange)="height.set($event)" placeholder="170" /></div>
        <div class="input-group"><label>体重 (kg)</label><input type="number" [ngModel]="weight()" (ngModelChange)="weight.set($event)" placeholder="70" /></div>
        @if (result()) {
          <div class="result-box">
            <div class="result-row"><span>BMI</span><span class="result-value">{{ result()!.bmi }}</span></div>
            <div class="result-main"><span class="result-label">推定体脂肪率</span><span class="result-value">{{ result()!.bodyFat }}%</span></div>
            <div class="result-sub" style="color:#6b7280;font-size:0.85rem;margin-top:8px;">※ Deurenberg式による概算値です。</div>
          </div>
        }
      </div>
    </div>
  `,
  styles: `.rate-btns{display:flex;gap:8px;}.rate-btns button{padding:10px 24px;border:1.5px solid #d1d5db;border-radius:8px;background:white;cursor:pointer;font-size:.95rem;font-family:inherit;transition:all .2s;}.rate-btns button.active{background:#6366f1;color:white;border-color:#6366f1;}.result-row{display:flex;justify-content:space-between;padding:8px 0;}`,
})
export class BodyFatCalcComponent {
  gender = signal<'male' | 'female'>('male');
  age = signal<number | null>(null);
  height = signal<number | null>(null);
  weight = signal<number | null>(null);
  result = computed(() => {
    const a = this.age(), h = this.height(), w = this.weight();
    if (!a || !h || !w || a <= 0 || h <= 0 || w <= 0) return null;
    const bmi = w / ((h / 100) ** 2);
    const sex = this.gender() === 'male' ? 1 : 0;
    const bodyFat = 1.20 * bmi + 0.23 * a - 10.8 * sex - 5.4;
    return { bmi: +bmi.toFixed(1), bodyFat: +bodyFat.toFixed(1) };
  });
}
