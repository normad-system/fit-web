import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-bmi',
  imports: [FormsModule, RouterLink],
  template: `
    <div class="calc-page">
      <a routerLink="/category/health" class="back">← 健康</a>
      <h1>💪 BMI計算</h1>
      <p class="desc">身長と体重からBMI（体格指数）を計算し、判定を表示します。</p>

      <div class="calc-body">
        <div class="input-group">
          <label>身長 (cm)</label>
          <input type="number" [ngModel]="height()" (ngModelChange)="height.set($event)" placeholder="170" />
        </div>
        <div class="input-group">
          <label>体重 (kg)</label>
          <input type="number" [ngModel]="weight()" (ngModelChange)="weight.set($event)" placeholder="65" />
        </div>

        @if (bmi() !== null) {
          <div class="result-box">
            <div class="result-main">
              <span class="result-label">BMI</span>
              <span class="result-value">{{ bmi() }}</span>
            </div>
            <div class="result-sub" [style.color]="judgmentColor()">
              {{ judgment() }}
            </div>
            <div class="bmi-bar">
              <div class="bmi-marker" [style.left]="markerPos()"></div>
              <div class="bmi-zones">
                <span class="zone zone-under">痩せ</span>
                <span class="zone zone-normal">普通</span>
                <span class="zone zone-over">肥満1</span>
                <span class="zone zone-obese">肥満2+</span>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: `
    .bmi-bar {
      position: relative;
      height: 28px;
      background: linear-gradient(90deg, #60a5fa 0%, #34d399 25%, #fbbf24 55%, #f87171 80%, #dc2626 100%);
      border-radius: 8px;
      margin-top: 20px;
      overflow: visible;
    }
    .bmi-marker {
      position: absolute;
      top: -6px;
      width: 4px;
      height: 40px;
      background: #111827;
      border-radius: 2px;
      transition: left 0.3s;
    }
    .bmi-zones {
      display: flex;
      justify-content: space-around;
      padding-top: 32px;
      font-size: 0.75rem;
      color: #6b7280;
    }
  `,
})
export class BmiCalcComponent {
  height = signal<number | null>(null);
  weight = signal<number | null>(null);

  bmi = computed(() => {
    const h = this.height();
    const w = this.weight();
    if (!h || !w || h <= 0 || w <= 0) return null;
    return (w / ((h / 100) ** 2)).toFixed(1);
  });

  judgment = computed(() => {
    const v = parseFloat(this.bmi() ?? '0');
    if (!v) return '';
    if (v < 18.5) return '低体重（痩せ型）';
    if (v < 25) return '普通体重';
    if (v < 30) return '肥満（1度）';
    if (v < 35) return '肥満（2度）';
    return '肥満（3度以上）';
  });

  judgmentColor = computed(() => {
    const v = parseFloat(this.bmi() ?? '0');
    if (!v) return '#374151';
    if (v < 18.5) return '#3b82f6';
    if (v < 25) return '#10b981';
    if (v < 30) return '#f59e0b';
    return '#ef4444';
  });

  markerPos = computed(() => {
    const v = parseFloat(this.bmi() ?? '0');
    if (!v) return '0%';
    const pct = Math.min(Math.max(((v - 14) / 26) * 100, 0), 100);
    return pct + '%';
  });
}
