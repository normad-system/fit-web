import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calc-unit-converter',
  imports: [FormsModule, RouterLink],
  template: `
    <div class="calc-page">
      <a routerLink="/category/daily" class="back">← 生活</a>
      <h1>🏠 単位変換</h1>
      <p class="desc">長さ・重さ・温度の単位を変換します。</p>
      <div class="calc-body">
        <div class="input-group">
          <label>カテゴリ</label>
          <div class="rate-btns">
            <button [class.active]="cat() === 'length'" (click)="cat.set('length')">長さ</button>
            <button [class.active]="cat() === 'weight'" (click)="cat.set('weight')">重さ</button>
            <button [class.active]="cat() === 'temp'" (click)="cat.set('temp')">温度</button>
          </div>
        </div>
        <div class="input-group"><label>値</label><input type="number" [ngModel]="val()" (ngModelChange)="val.set($event)" placeholder="100" /></div>
        @if (conversions().length > 0) {
          <div class="result-box">
            @for (c of conversions(); track c.label) {
              <div class="result-row"><span>{{ c.label }}</span><span class="result-value">{{ c.value }}</span></div>
            }
          </div>
        }
      </div>
    </div>
  `,
  styles: `.rate-btns{display:flex;gap:8px;}.rate-btns button{padding:8px 18px;border:1.5px solid #d1d5db;border-radius:8px;background:white;cursor:pointer;font-size:.9rem;font-family:inherit;transition:all .2s;}.rate-btns button.active{background:#6366f1;color:white;border-color:#6366f1;}.result-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #f3f4f6;}.result-row:last-child{border-bottom:none;}`,
})
export class UnitConverterCalcComponent {
  cat = signal<'length' | 'weight' | 'temp'>('length');
  val = signal<number | null>(null);
  conversions = computed(() => {
    const v = this.val();
    if (v == null) return [];
    const fmt = (n: number) => +n.toFixed(6);
    switch (this.cat()) {
      case 'length': return [
        { label: 'メートル (m)', value: fmt(v) + ' m' },
        { label: 'キロメートル (km)', value: fmt(v / 1000) + ' km' },
        { label: 'センチメートル (cm)', value: fmt(v * 100) + ' cm' },
        { label: 'ミリメートル (mm)', value: fmt(v * 1000) + ' mm' },
        { label: 'インチ (in)', value: fmt(v * 39.3701) + ' in' },
        { label: 'フィート (ft)', value: fmt(v * 3.28084) + ' ft' },
        { label: 'マイル (mi)', value: fmt(v * 0.000621371) + ' mi' },
      ];
      case 'weight': return [
        { label: 'キログラム (kg)', value: fmt(v) + ' kg' },
        { label: 'グラム (g)', value: fmt(v * 1000) + ' g' },
        { label: 'ミリグラム (mg)', value: fmt(v * 1e6) + ' mg' },
        { label: 'トン (t)', value: fmt(v / 1000) + ' t' },
        { label: 'ポンド (lb)', value: fmt(v * 2.20462) + ' lb' },
        { label: 'オンス (oz)', value: fmt(v * 35.274) + ' oz' },
      ];
      case 'temp': return [
        { label: '摂氏 (°C)', value: fmt(v) + ' °C' },
        { label: '華氏 (°F)', value: fmt(v * 9 / 5 + 32) + ' °F' },
        { label: 'ケルビン (K)', value: fmt(v + 273.15) + ' K' },
      ];
    }
  });
}
