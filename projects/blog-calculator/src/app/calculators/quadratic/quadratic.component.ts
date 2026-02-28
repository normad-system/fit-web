import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-quadratic',
  imports: [FormsModule, RouterLink],
  template: `
    <div class="calc-page">
      <a routerLink="/category/math" class="back">← 数学</a>
      <h1>📐 二次方程式の解</h1>
      <p class="desc">ax² + bx + c = 0 の解を判別式で求めます。</p>
      <div class="calc-body">
        <div class="equation">
          <div class="inline-inputs">
            <input type="number" [ngModel]="a()" (ngModelChange)="a.set($event)" placeholder="1" style="width:80px" />
            <span>x² +</span>
            <input type="number" [ngModel]="b()" (ngModelChange)="b.set($event)" placeholder="0" style="width:80px" />
            <span>x +</span>
            <input type="number" [ngModel]="c()" (ngModelChange)="c.set($event)" placeholder="-4" style="width:80px" />
            <span>= 0</span>
          </div>
        </div>
        @if (result()) {
          <div class="result-box">
            <div class="result-row"><span>判別式 D</span><span class="result-value">{{ result()!.discriminant }}</span></div>
            @if (result()!.type === 'real2') {
              <div class="result-row"><span>x₁</span><span class="result-value">{{ result()!.x1 }}</span></div>
              <div class="result-row"><span>x₂</span><span class="result-value">{{ result()!.x2 }}</span></div>
            } @else if (result()!.type === 'real1') {
              <div class="result-row"><span>x（重解）</span><span class="result-value">{{ result()!.x1 }}</span></div>
            } @else {
              <div class="result-row"><span>x₁</span><span class="result-value">{{ result()!.x1 }}</span></div>
              <div class="result-row"><span>x₂</span><span class="result-value">{{ result()!.x2 }}</span></div>
              <div class="result-sub" style="color:#6b7280;margin-top:8px;font-size:0.85rem;">※ 虚数解です（iは虚数単位）</div>
            }
          </div>
        }
      </div>
    </div>
  `,
  styles: `.inline-inputs{display:flex;align-items:center;gap:10px;flex-wrap:wrap;}.inline-inputs input{padding:10px 14px;border:1.5px solid #d1d5db;border-radius:10px;font-size:1rem;font-family:inherit;}.inline-inputs input:focus{outline:none;border-color:#6366f1;}.inline-inputs span{color:#6b7280;font-size:1rem;}.result-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f3f4f6;}.result-row:last-child{border-bottom:none;}`,
})
export class QuadraticCalcComponent {
  a = signal<number | null>(null);
  b = signal<number | null>(null);
  c = signal<number | null>(null);
  result = computed(() => {
    const a = this.a(), b = this.b(), c = this.c();
    if (a == null || b == null || c == null || a === 0) return null;
    const D = b * b - 4 * a * c;
    const fmt = (n: number) => +n.toFixed(6);
    if (D > 0) {
      return { discriminant: fmt(D), type: 'real2' as const, x1: fmt((-b + Math.sqrt(D)) / (2 * a)), x2: fmt((-b - Math.sqrt(D)) / (2 * a)) };
    } else if (D === 0) {
      return { discriminant: 0, type: 'real1' as const, x1: fmt(-b / (2 * a)), x2: null };
    } else {
      const real = fmt(-b / (2 * a));
      const imag = fmt(Math.sqrt(-D) / (2 * a));
      return { discriminant: fmt(D), type: 'complex' as const, x1: `${real} + ${imag}i`, x2: `${real} - ${imag}i` };
    }
  });
}
