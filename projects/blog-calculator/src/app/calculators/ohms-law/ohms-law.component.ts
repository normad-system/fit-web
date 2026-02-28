import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-ohms-law',
  imports: [FormsModule, RouterLink],
  template: `
    <div class="calc-page">
      <a routerLink="/category/engineering" class="back">← 工学</a>
      <h1>⚙️ オームの法則</h1>
      <p class="desc">V = I × R — 2つの値を入力すると残りを計算します。</p>
      <div class="calc-body">
        <div class="input-group"><label>電圧 V (ボルト)</label><input type="number" [ngModel]="voltage()" (ngModelChange)="voltage.set($event)" placeholder="" /></div>
        <div class="input-group"><label>電流 I (アンペア)</label><input type="number" [ngModel]="current()" (ngModelChange)="current.set($event)" placeholder="" /></div>
        <div class="input-group"><label>抵抗 R (オーム)</label><input type="number" [ngModel]="resistance()" (ngModelChange)="resistance.set($event)" placeholder="" /></div>
        @if (result()) {
          <div class="result-box">
            <div class="result-row"><span>電圧 V</span><span class="result-value">{{ result()!.v }} V</span></div>
            <div class="result-row"><span>電流 I</span><span class="result-value">{{ result()!.i }} A</span></div>
            <div class="result-row"><span>抵抗 R</span><span class="result-value">{{ result()!.r }} Ω</span></div>
            <div class="result-row"><span>電力 P</span><span class="result-value">{{ result()!.p }} W</span></div>
          </div>
        }
      </div>
    </div>
  `,
  styles: `.result-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f3f4f6;}.result-row:last-child{border-bottom:none;}`,
})
export class OhmsLawCalcComponent {
  voltage = signal<number | null>(null);
  current = signal<number | null>(null);
  resistance = signal<number | null>(null);
  result = computed(() => {
    const v = this.voltage(), i = this.current(), r = this.resistance();
    const fmt = (n: number) => +n.toFixed(6);
    if (v != null && i != null && v > 0 && i > 0) return { v: fmt(v), i: fmt(i), r: fmt(v / i), p: fmt(v * i) };
    if (v != null && r != null && v > 0 && r > 0) return { v: fmt(v), i: fmt(v / r), r: fmt(r), p: fmt(v * v / r) };
    if (i != null && r != null && i > 0 && r > 0) return { v: fmt(i * r), i: fmt(i), r: fmt(r), p: fmt(i * i * r) };
    return null;
  });
}
