import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CATEGORIES, CALCULATORS } from '../../data/calculators.data';
import { CalculatorCategory } from '../../models/calculator.model';

@Component({
  selector: 'app-home',
  imports: [RouterLink, FormsModule],
  template: `
    <section class="hero">
      <div class="hero-inner">
        <h1>🧮 CalcHub</h1>
        <p class="hero-sub">
          生活・数学・工学・化学・健康・会計・税金<br />
          あらゆる計算をワンクリックで。
        </p>
        <div class="search-box">
          <input
            type="text"
            placeholder="計算機を検索… 例: BMI、ローン、消費税"
            [ngModel]="searchQuery()"
            (ngModelChange)="searchQuery.set($event)"
          />
        </div>
      </div>
    </section>

    @if (searchQuery()) {
      <section class="search-results section">
        <div class="section-inner">
          <h2>「{{ searchQuery() }}」の検索結果 ({{ searchResults().length }}件)</h2>
          @if (searchResults().length === 0) {
            <p class="no-results">一致する計算機が見つかりませんでした。</p>
          } @else {
            <div class="calc-grid">
              @for (calc of searchResults(); track calc.id) {
                <a [routerLink]="['/calc', calc.slug]" class="calc-card">
                  <span class="calc-cat-badge" [style.background]="getCategoryColor(calc.category)">
                    {{ getCategoryIcon(calc.category) }} {{ getCategoryLabel(calc.category) }}
                  </span>
                  <h3>{{ calc.title }}</h3>
                  <p>{{ calc.description }}</p>
                </a>
              }
            </div>
          }
        </div>
      </section>
    } @else {
      <section class="categories section">
        <div class="section-inner">
          <h2 class="section-title">カテゴリから探す</h2>
          <div class="cat-grid">
            @for (cat of categories; track cat.key) {
              <a [routerLink]="['/category', cat.key]" class="cat-card" [style.--cat-color]="cat.color">
                <div class="cat-icon-wrap" [style.background]="cat.gradient">
                  <span class="cat-icon">{{ cat.icon }}</span>
                </div>
                <h3>{{ cat.label }}</h3>
                <p>{{ cat.description }}</p>
                <span class="cat-count">{{ getCalcCount(cat.key) }}個の計算機</span>
              </a>
            }
          </div>
        </div>
      </section>

      <section class="popular section">
        <div class="section-inner">
          <h2 class="section-title">人気の計算機</h2>
          <div class="calc-grid">
            @for (calc of popularCalcs; track calc.id) {
              <a [routerLink]="['/calc', calc.slug]" class="calc-card">
                <span class="calc-cat-badge" [style.background]="getCategoryColor(calc.category)">
                  {{ getCategoryIcon(calc.category) }} {{ getCategoryLabel(calc.category) }}
                </span>
                <h3>{{ calc.title }}</h3>
                <p>{{ calc.description }}</p>
              </a>
            }
          </div>
        </div>
      </section>
    }
  `,
  styles: `
    .hero {
      background: linear-gradient(135deg, #0f172a, #1e293b);
      padding: 64px 24px 72px;
      text-align: center;
    }

    .hero-inner {
      max-width: 640px;
      margin: 0 auto;
    }

    .hero h1 {
      font-size: 2.75rem;
      font-weight: 800;
      color: white;
      margin: 0 0 12px;
    }

    .hero-sub {
      color: #94a3b8;
      font-size: 1.1rem;
      line-height: 1.8;
      margin: 0 0 32px;
    }

    .search-box input {
      width: 100%;
      padding: 16px 24px;
      border: 2px solid rgba(255, 255, 255, 0.15);
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.08);
      color: white;
      font-size: 1.05rem;
      font-family: inherit;
      outline: none;
      transition: all 0.2s;
    }

    .search-box input::placeholder {
      color: #94a3b8;
    }

    .search-box input:focus {
      border-color: #6366f1;
      background: rgba(255, 255, 255, 0.12);
    }

    /* Sections */
    .section {
      padding: 64px 24px;
    }

    .section-inner {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 1.75rem;
      font-weight: 800;
      color: #111827;
      margin: 0 0 32px;
      text-align: center;
    }

    .search-results h2 {
      font-size: 1.25rem;
      font-weight: 700;
      color: #374151;
      margin: 0 0 24px;
    }

    .no-results {
      text-align: center;
      color: #9ca3af;
      padding: 48px 0;
    }

    /* Category grid */
    .cat-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 20px;
    }

    .cat-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 32px 20px;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      text-decoration: none;
      color: inherit;
      transition: all 0.25s;
    }

    .cat-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
      border-color: var(--cat-color, #6366f1);
    }

    .cat-icon-wrap {
      width: 64px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 16px;
      margin-bottom: 16px;
    }

    .cat-icon {
      font-size: 1.75rem;
    }

    .cat-card h3 {
      font-size: 1.15rem;
      font-weight: 700;
      margin: 0 0 6px;
      color: #111827;
    }

    .cat-card p {
      font-size: 0.9rem;
      color: #6b7280;
      margin: 0 0 12px;
      line-height: 1.5;
    }

    .cat-count {
      font-size: 0.8rem;
      color: #9ca3af;
      font-weight: 500;
    }

    /* Calc grid */
    .calc-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }

    .calc-card {
      display: flex;
      flex-direction: column;
      padding: 24px;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      text-decoration: none;
      color: inherit;
      transition: all 0.25s;
    }

    .calc-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);
    }

    .calc-cat-badge {
      display: inline-flex;
      align-self: flex-start;
      padding: 4px 12px;
      border-radius: 8px;
      font-size: 0.78rem;
      font-weight: 600;
      color: white;
      margin-bottom: 12px;
    }

    .calc-card h3 {
      font-size: 1.1rem;
      font-weight: 700;
      margin: 0 0 6px;
      color: #111827;
    }

    .calc-card p {
      font-size: 0.88rem;
      color: #6b7280;
      margin: 0;
      line-height: 1.5;
    }

    @media (max-width: 768px) {
      .hero h1 { font-size: 2rem; }
      .cat-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); }
      .calc-grid { grid-template-columns: 1fr; }
    }
  `,
})
export class HomeComponent {
  categories = CATEGORIES;
  allCalcs = CALCULATORS;
  popularCalcs = CALCULATORS.filter((c) =>
    ['bmi', 'consumption-tax', 'loan', 'percentage', 'discount', 'calorie'].includes(c.id)
  );

  searchQuery = signal('');

  searchResults = computed(() => {
    const q = this.searchQuery().toLowerCase();
    if (!q) return [];
    return this.allCalcs.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.keywords.some((k) => k.toLowerCase().includes(q))
    );
  });

  getCalcCount(category: CalculatorCategory): number {
    return this.allCalcs.filter((c) => c.category === category).length;
  }

  getCategoryLabel(category: CalculatorCategory): string {
    return this.categories.find((c) => c.key === category)?.label ?? '';
  }

  getCategoryIcon(category: CalculatorCategory): string {
    return this.categories.find((c) => c.key === category)?.icon ?? '';
  }

  getCategoryColor(category: CalculatorCategory): string {
    return this.categories.find((c) => c.key === category)?.color ?? '#6366f1';
  }
}
