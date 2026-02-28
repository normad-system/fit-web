import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-calorie',
  imports: [FormsModule, RouterLink],
  template: `
    <div class="calc-page">
      <a routerLink="/category/health" class="back">← 健康</a>
      <h1>💪 基礎代謝量（BMR）計算</h1>
      <p class="desc">ハリス・ベネディクト方程式を使って基礎代謝量を計算します。</p>

      <div class="calc-body">
        <div class="input-group">
          <label>性別</label>
          <div class="rate-btns">
            <button [class.active]="gender() === 'male'" (click)="gender.set('male')">男性</button>
            <button [class.active]="gender() === 'female'" (click)="gender.set('female')">女性</button>
          </div>
        </div>
        <div class="input-group">
          <label>年齢</label>
          <input type="number" [ngModel]="age()" (ngModelChange)="age.set($event)" placeholder="30" />
        </div>
        <div class="input-group">
          <label>身長 (cm)</label>
          <input type="number" [ngModel]="height()" (ngModelChange)="height.set($event)" placeholder="170" />
        </div>
        <div class="input-group">
          <label>体重 (kg)</label>
          <input type="number" [ngModel]="weight()" (ngModelChange)="weight.set($event)" placeholder="65" />
        </div>

        @if (bmr()) {
          <div class="result-box">
            <div class="result-main">
              <span class="result-label">基礎代謝量 (BMR)</span>
              <span class="result-value">{{ bmr() }} kcal/日</span>
            </div>
            <div class="result-sub-section">
              <h4>活動レベル別 推定消費カロリー</h4>
              @for (level of activityLevels(); track level.label) {
                <div class="result-row">
                  <span>{{ level.label }}</span>
                  <span class="result-value">{{ level.calories }} kcal</span>
                </div>
              }
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: `
    .rate-btns { display: flex; gap: 8px; }
    .rate-btns button {
      padding: 10px 24px; border: 1.5px solid #d1d5db; border-radius: 8px;
      background: white; cursor: pointer; font-size: 0.95rem; font-family: inherit; transition: all 0.2s;
    }
    .rate-btns button.active { background: #6366f1; color: white; border-color: #6366f1; }
    .result-sub-section { margin-top: 20px; }
    .result-sub-section h4 { font-size: 0.95rem; font-weight: 700; color: #374151; margin: 0 0 12px; }
    .result-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f3f4f6; }
    .result-row:last-child { border-bottom: none; }
  `,
})
export class CalorieCalcComponent {
  gender = signal<'male' | 'female'>('male');
  age = signal<number | null>(null);
  height = signal<number | null>(null);
  weight = signal<number | null>(null);

  bmr = computed(() => {
    const a = this.age(), h = this.height(), w = this.weight();
    if (!a || !h || !w || a <= 0 || h <= 0 || w <= 0) return null;
    let val: number;
    if (this.gender() === 'male') {
      val = 88.362 + 13.397 * w + 4.799 * h - 5.677 * a;
    } else {
      val = 447.593 + 9.247 * w + 3.098 * h - 4.330 * a;
    }
    return Math.round(val);
  });

  activityLevels = computed(() => {
    const b = this.bmr();
    if (!b) return [];
    return [
      { label: 'ほぼ運動しない', calories: Math.round(b * 1.2) },
      { label: '軽い運動（週1〜3回）', calories: Math.round(b * 1.375) },
      { label: '中程度の運動（週3〜5回）', calories: Math.round(b * 1.55) },
      { label: '激しい運動（週6〜7回）', calories: Math.round(b * 1.725) },
      { label: 'アスリート級', calories: Math.round(b * 1.9) },
    ];
  });
}
