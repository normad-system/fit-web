import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-mol',
  imports: [FormsModule, RouterLink],
  template: `
    <div class="calc-page">
      <a routerLink="/category/chemistry" class="back">← 化学</a>
      <h1>🧪 モル計算</h1>
      <p class="desc">質量とモル質量（分子量）からモル数を計算します。mol = 質量(g) / モル質量(g/mol)</p>
      <div class="calc-body">
        <div class="input-group"><label>質量 (g)</label><input type="number" [ngModel]="mass()" (ngModelChange)="mass.set($event)" placeholder="18" /></div>
        <div class="input-group"><label>モル質量 (g/mol)</label><input type="number" [ngModel]="molarMass()" (ngModelChange)="molarMass.set($event)" placeholder="18.015" /></div>
        @if (result()) {
          <div class="result-box">
            <div class="result-main"><span class="result-label">モル数</span><span class="result-value">{{ result()!.mol }} mol</span></div>
            <div class="result-row"><span>分子数（×10²³）</span><span class="result-value">{{ result()!.molecules }}</span></div>
          </div>
        }
      </div>
    </div>
  `,
  styles: `.result-row{display:flex;justify-content:space-between;padding:8px 0;}`,
})
export class MolCalcComponent {
  mass = signal<number | null>(null);
  molarMass = signal<number | null>(null);
  result = computed(() => {
    const m = this.mass(), mm = this.molarMass();
    if (!m || !mm || mm <= 0) return null;
    const mol = m / mm;
    const molecules = +(mol * 6.02214076).toFixed(4);
    return { mol: +mol.toFixed(6), molecules: molecules + ' × 10²³' };
  });
}
