import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-triangle',
  imports: [FormsModule, RouterLink],
  template: `
    <div class="calc-page">
      <a routerLink="/category/math" class="back">← 数学</a>
      <h1>📐 三角形計算</h1>
      <p class="desc">底辺と高さ、または3辺の長さから面積と周長を計算します。</p>
      <div class="calc-body">
        <h3 class="sub-title">底辺 × 高さ</h3>
        <div class="input-group"><label>底辺</label><input type="number" [ngModel]="base()" (ngModelChange)="base.set($event)" placeholder="10" /></div>
        <div class="input-group"><label>高さ</label><input type="number" [ngModel]="h()" (ngModelChange)="h.set($event)" placeholder="5" /></div>
        @if (areaSimple() !== null) {
          <div class="result-box"><div class="result-main"><span class="result-label">面積</span><span class="result-value">{{ areaSimple() }}</span></div></div>
        }
        <hr class="divider" />
        <h3 class="sub-title">3辺（ヘロンの公式）</h3>
        <div class="input-group"><label>辺a</label><input type="number" [ngModel]="sa()" (ngModelChange)="sa.set($event)" placeholder="3" /></div>
        <div class="input-group"><label>辺b</label><input type="number" [ngModel]="sb()" (ngModelChange)="sb.set($event)" placeholder="4" /></div>
        <div class="input-group"><label>辺c</label><input type="number" [ngModel]="sc()" (ngModelChange)="sc.set($event)" placeholder="5" /></div>
        @if (heron()) {
          <div class="result-box">
            <div class="result-row"><span>周長</span><span class="result-value">{{ heron()!.perimeter }}</span></div>
            <div class="result-row"><span>面積</span><span class="result-value">{{ heron()!.area }}</span></div>
          </div>
        }
      </div>
    </div>
  `,
  styles: `.sub-title{font-size:1.05rem;font-weight:700;color:#374151;margin:0 0 12px;}.divider{border:none;border-top:1px solid #e5e7eb;margin:32px 0;}.result-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f3f4f6;}.result-row:last-child{border-bottom:none;}`,
})
export class TriangleCalcComponent {
  base = signal<number | null>(null);
  h = signal<number | null>(null);
  sa = signal<number | null>(null);
  sb = signal<number | null>(null);
  sc = signal<number | null>(null);
  areaSimple = computed(() => {
    const b = this.base(), h = this.h();
    if (!b || !h || b <= 0 || h <= 0) return null;
    return +(0.5 * b * h).toFixed(4);
  });
  heron = computed(() => {
    const a = this.sa(), b = this.sb(), c = this.sc();
    if (!a || !b || !c || a <= 0 || b <= 0 || c <= 0) return null;
    if (a + b <= c || a + c <= b || b + c <= a) return null;
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return { perimeter: +(a + b + c).toFixed(4), area: +area.toFixed(4) };
  });
}
