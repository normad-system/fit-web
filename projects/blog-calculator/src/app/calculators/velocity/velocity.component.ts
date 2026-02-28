import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-velocity',
  imports: [FormsModule, RouterLink],
  template: `
    <div class="calc-page">
      <a routerLink="/category/engineering" class="back">← 工学</a>
      <h1>⚙️ 速度・距離・時間</h1>
      <p class="desc">2つの値を入力すると残りの1つを計算します。</p>
      <div class="calc-body">
        <div class="input-group"><label>距離 (km)</label><input type="number" [ngModel]="distance()" (ngModelChange)="distance.set($event)" /></div>
        <div class="input-group"><label>時間 (時間)</label><input type="number" step="0.1" [ngModel]="time()" (ngModelChange)="time.set($event)" /></div>
        <div class="input-group"><label>速度 (km/h)</label><input type="number" [ngModel]="speed()" (ngModelChange)="speed.set($event)" /></div>
        @if (result()) {
          <div class="result-box">
            <div class="result-row"><span>距離</span><span class="result-value">{{ result()!.d }} km</span></div>
            <div class="result-row"><span>時間</span><span class="result-value">{{ result()!.t }} 時間</span></div>
            <div class="result-row"><span>速度</span><span class="result-value">{{ result()!.s }} km/h</span></div>
          </div>
        }
      </div>
    </div>
  `,
  styles: `.result-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f3f4f6;}.result-row:last-child{border-bottom:none;}`,
})
export class VelocityCalcComponent {
  distance = signal<number | null>(null);
  time = signal<number | null>(null);
  speed = signal<number | null>(null);
  result = computed(() => {
    const d = this.distance(), t = this.time(), s = this.speed();
    const fmt = (n: number) => +n.toFixed(4);
    if (d != null && t != null && d > 0 && t > 0) return { d: fmt(d), t: fmt(t), s: fmt(d / t) };
    if (d != null && s != null && d > 0 && s > 0) return { d: fmt(d), t: fmt(d / s), s: fmt(s) };
    if (t != null && s != null && t > 0 && s > 0) return { d: fmt(s * t), t: fmt(t), s: fmt(s) };
    return null;
  });
}
