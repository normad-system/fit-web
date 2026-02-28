import { Component, signal, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-power',
  imports: [FormsModule, RouterLink, DecimalPipe],
  template: `
    <div class="calc-page">
      <a routerLink="/category/engineering" class="back">← 工学</a>
      <h1>⚙️ 電力計算</h1>
      <p class="desc">消費電力と使用時間から電力量と電気代を計算します。</p>
      <div class="calc-body">
        <div class="input-group"><label>消費電力 (W)</label><input type="number" [ngModel]="watts()" (ngModelChange)="watts.set($event)" placeholder="1000" /></div>
        <div class="input-group"><label>使用時間 (時間/日)</label><input type="number" step="0.5" [ngModel]="hoursPerDay()" (ngModelChange)="hoursPerDay.set($event)" placeholder="8" /></div>
        <div class="input-group"><label>電気単価 (円/kWh)</label><input type="number" [ngModel]="pricePerKwh()" (ngModelChange)="pricePerKwh.set($event)" placeholder="31" /></div>
        @if (result()) {
          <div class="result-box">
            <div class="result-row"><span>1日の電力量</span><span class="result-value">{{ result()!.kwhDay }} kWh</span></div>
            <div class="result-row"><span>1日の電気代</span><span class="result-value">¥{{ result()!.costDay }}</span></div>
            <div class="result-row"><span>1ヶ月（30日）</span><span class="result-value">¥{{ result()!.costMonth | number }}</span></div>
            <div class="result-row"><span>年間</span><span class="result-value">¥{{ result()!.costYear | number }}</span></div>
          </div>
        }
      </div>
    </div>
  `,
  styles: `.result-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f3f4f6;}.result-row:last-child{border-bottom:none;}`,
})
export class PowerCalcComponent {
  watts = signal<number | null>(null);
  hoursPerDay = signal<number | null>(null);
  pricePerKwh = signal(31);
  result = computed(() => {
    const w = this.watts(), h = this.hoursPerDay(), p = this.pricePerKwh();
    if (!w || !h || !p || w <= 0 || h <= 0) return null;
    const kwhDay = +(w * h / 1000).toFixed(3);
    const costDay = Math.round(kwhDay * p);
    return { kwhDay, costDay, costMonth: costDay * 30, costYear: costDay * 365 };
  });
}
