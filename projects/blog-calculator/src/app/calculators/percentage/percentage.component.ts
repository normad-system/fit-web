import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-percentage',
  imports: [FormsModule, RouterLink],
  template: `
    <div class="calc-page">
      <a routerLink="/category/math" class="back">← 数学</a>
      <h1>📐 百分率計算</h1>
      <p class="desc">パーセントに関する3種類の計算をまとめて行えます。</p>

      <div class="calc-body">
        <!-- パターン1: AのB%は? -->
        <div class="calc-section">
          <h3>① AのB%はいくつ?</h3>
          <div class="inline-inputs">
            <input type="number" [ngModel]="a1()" (ngModelChange)="a1.set($event)" placeholder="200" />
            <span>の</span>
            <input type="number" [ngModel]="b1()" (ngModelChange)="b1.set($event)" placeholder="15" />
            <span>% は</span>
          </div>
          @if (r1() !== null) {
            <div class="inline-result">= <strong>{{ r1() }}</strong></div>
          }
        </div>

        <!-- パターン2: AはBの何%? -->
        <div class="calc-section">
          <h3>② AはBの何%?</h3>
          <div class="inline-inputs">
            <input type="number" [ngModel]="a2()" (ngModelChange)="a2.set($event)" placeholder="30" />
            <span>は</span>
            <input type="number" [ngModel]="b2()" (ngModelChange)="b2.set($event)" placeholder="200" />
            <span>の何%</span>
          </div>
          @if (r2() !== null) {
            <div class="inline-result">= <strong>{{ r2() }}%</strong></div>
          }
        </div>

        <!-- パターン3: B%がAの時、元の数は? -->
        <div class="calc-section">
          <h3>③ B%がAのとき、元の数は?</h3>
          <div class="inline-inputs">
            <input type="number" [ngModel]="b3()" (ngModelChange)="b3.set($event)" placeholder="20" />
            <span>% が</span>
            <input type="number" [ngModel]="a3()" (ngModelChange)="a3.set($event)" placeholder="50" />
            <span>のとき元の数は</span>
          </div>
          @if (r3() !== null) {
            <div class="inline-result">= <strong>{{ r3() }}</strong></div>
          }
        </div>
      </div>
    </div>
  `,
  styles: `
    .calc-section { margin-bottom: 32px; padding-bottom: 32px; border-bottom: 1px solid #f3f4f6; }
    .calc-section:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
    .calc-section h3 { font-size: 1rem; font-weight: 700; color: #374151; margin: 0 0 12px; }
    .inline-inputs { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
    .inline-inputs input { width: 120px; padding: 10px 14px; border: 1.5px solid #d1d5db; border-radius: 10px; font-size: 1rem; font-family: inherit; }
    .inline-inputs input:focus { outline: none; border-color: #6366f1; }
    .inline-inputs span { color: #6b7280; font-size: 0.95rem; }
    .inline-result { margin-top: 12px; font-size: 1.25rem; color: #6366f1; }
  `,
})
export class PercentageCalcComponent {
  a1 = signal<number | null>(null);
  b1 = signal<number | null>(null);
  a2 = signal<number | null>(null);
  b2 = signal<number | null>(null);
  a3 = signal<number | null>(null);
  b3 = signal<number | null>(null);

  r1 = computed(() => {
    const a = this.a1(), b = this.b1();
    if (a == null || b == null) return null;
    return +(a * b / 100).toFixed(4);
  });
  r2 = computed(() => {
    const a = this.a2(), b = this.b2();
    if (a == null || b == null || b === 0) return null;
    return +(a / b * 100).toFixed(2);
  });
  r3 = computed(() => {
    const a = this.a3(), b = this.b3();
    if (a == null || b == null || b === 0) return null;
    return +(a / (b / 100)).toFixed(4);
  });
}
