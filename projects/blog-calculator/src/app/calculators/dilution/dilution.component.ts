import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-dilution',
  imports: [FormsModule, RouterLink],
  template: `
    <div class="calc-page">
      <a routerLink="/category/chemistry" class="back">← 化学</a>
      <h1>🧪 希釈計算</h1>
      <p class="desc">C₁V₁ = C₂V₂ — 希釈前後の濃度と体積を計算します。</p>
      <div class="calc-body">
        <div class="input-group"><label>C₁ 希釈前濃度 (mol/L)</label><input type="number" step="0.01" [ngModel]="c1()" (ngModelChange)="c1.set($event)" /></div>
        <div class="input-group"><label>V₁ 希釈前体積 (mL)</label><input type="number" [ngModel]="v1()" (ngModelChange)="v1.set($event)" /></div>
        <div class="input-group"><label>C₂ 希釈後濃度 (mol/L)</label><input type="number" step="0.01" [ngModel]="c2()" (ngModelChange)="c2.set($event)" /></div>
        <div class="input-group"><label>V₂ 希釈後体積 (mL)</label><input type="number" [ngModel]="v2()" (ngModelChange)="v2.set($event)" /></div>
        @if (result()) {
          <div class="result-box">
            <div class="result-main"><span class="result-label">{{ result()!.label }}</span><span class="result-value">{{ result()!.value }}</span></div>
          </div>
        }
      </div>
    </div>
  `,
})
export class DilutionCalcComponent {
  c1 = signal<number | null>(null);
  v1 = signal<number | null>(null);
  c2 = signal<number | null>(null);
  v2 = signal<number | null>(null);
  result = computed(() => {
    const c1 = this.c1(), v1 = this.v1(), c2 = this.c2(), v2 = this.v2();
    const filled = [c1, v1, c2, v2].filter((x) => x != null && x > 0).length;
    if (filled < 3) return null;
    if (c1 && v1 && c2 && !v2) return { label: 'V₂ 希釈後体積', value: +((c1 * v1) / c2).toFixed(4) + ' mL' };
    if (c1 && v1 && !c2 && v2) return { label: 'C₂ 希釈後濃度', value: +((c1 * v1) / v2).toFixed(6) + ' mol/L' };
    if (c1 && !v1 && c2 && v2) return { label: 'V₁ 希釈前体積', value: +((c2 * v2) / c1).toFixed(4) + ' mL' };
    if (!c1 && v1 && c2 && v2) return { label: 'C₁ 希釈前濃度', value: +((c2 * v2) / v1).toFixed(6) + ' mol/L' };
    return null;
  });
}
