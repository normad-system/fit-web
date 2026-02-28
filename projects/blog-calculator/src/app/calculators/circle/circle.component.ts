import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-circle',
  imports: [FormsModule, RouterLink],
  template: `
    <div class="calc-page">
      <a routerLink="/category/math" class="back">← 数学</a>
      <h1>📐 円の計算</h1>
      <p class="desc">半径から円の面積・円周・直径を計算します。</p>
      <div class="calc-body">
        <div class="input-group"><label>半径</label><input type="number" [ngModel]="radius()" (ngModelChange)="radius.set($event)" placeholder="5" /></div>
        @if (result()) {
          <div class="result-box">
            <div class="result-row"><span>直径</span><span class="result-value">{{ result()!.diameter }}</span></div>
            <div class="result-row"><span>円周</span><span class="result-value">{{ result()!.circumference }}</span></div>
            <div class="result-main"><span class="result-label">面積</span><span class="result-value">{{ result()!.area }}</span></div>
          </div>
        }
      </div>
    </div>
  `,
  styles: `.result-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f3f4f6;}.result-row:last-child{border-bottom:none;}`,
})
export class CircleCalcComponent {
  radius = signal<number | null>(null);
  result = computed(() => {
    const r = this.radius();
    if (!r || r <= 0) return null;
    return { diameter: +(2 * r).toFixed(6), circumference: +(2 * Math.PI * r).toFixed(6), area: +(Math.PI * r * r).toFixed(6) };
  });
}
