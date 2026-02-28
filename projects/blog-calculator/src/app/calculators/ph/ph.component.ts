import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-ph',
  imports: [FormsModule, RouterLink],
  template: `
    <div class="calc-page">
      <a routerLink="/category/chemistry" class="back">← 化学</a>
      <h1>🧪 pH計算</h1>
      <p class="desc">水素イオン濃度 [H⁺] からpHを計算、またはpHから [H⁺] を逆算します。</p>
      <div class="calc-body">
        <h3 class="sub-title">[H⁺] → pH</h3>
        <div class="input-group"><label>[H⁺] 濃度 (mol/L) — 例: 0.001</label><input type="number" step="any" [ngModel]="hConc()" (ngModelChange)="hConc.set($event)" placeholder="0.001" /></div>
        @if (phResult() !== null) {
          <div class="result-box"><div class="result-main"><span class="result-label">pH</span><span class="result-value" [style.color]="phColor()">{{ phResult() }}</span></div>
            <div class="result-sub">{{ phJudgment() }}</div>
          </div>
        }
        <hr class="divider" />
        <h3 class="sub-title">pH → [H⁺]</h3>
        <div class="input-group"><label>pH値</label><input type="number" step="0.1" [ngModel]="phInput()" (ngModelChange)="phInput.set($event)" placeholder="7" /></div>
        @if (hResult() !== null) {
          <div class="result-box"><div class="result-main"><span class="result-label">[H⁺]</span><span class="result-value">{{ hResult() }} mol/L</span></div></div>
        }
      </div>
    </div>
  `,
  styles: `.sub-title{font-size:1.05rem;font-weight:700;color:#374151;margin:0 0 12px;}.divider{border:none;border-top:1px solid #e5e7eb;margin:32px 0;}.result-sub{margin-top:8px;font-size:0.9rem;color:#6b7280;}`,
})
export class PhCalcComponent {
  hConc = signal<number | null>(null);
  phInput = signal<number | null>(null);
  phResult = computed(() => {
    const h = this.hConc();
    if (!h || h <= 0) return null;
    return +(-Math.log10(h)).toFixed(4);
  });
  phColor = computed(() => {
    const p = this.phResult();
    if (p == null) return '#374151';
    if (p < 7) return '#ef4444';
    if (p === 7) return '#10b981';
    return '#3b82f6';
  });
  phJudgment = computed(() => {
    const p = this.phResult();
    if (p == null) return '';
    if (p < 7) return '酸性';
    if (p === 7) return '中性';
    return 'アルカリ性（塩基性）';
  });
  hResult = computed(() => {
    const p = this.phInput();
    if (p == null) return null;
    return (Math.pow(10, -p)).toExponential(4);
  });
}
