import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CATEGORIES, CALCULATORS } from '../../data/calculators.data';
import { CalculatorCategory, CalculatorInfo } from '../../models/calculator.model';

@Component({
  selector: 'app-category',
  imports: [RouterLink],
  template: `
    @if (category) {
      <section class="cat-hero" [style.background]="category.gradient">
        <div class="hero-inner">
          <a routerLink="/" class="back-link">← ホームに戻る</a>
          <span class="cat-icon">{{ category.icon }}</span>
          <h1>{{ category.label }}の計算機</h1>
          <p>{{ category.description }}</p>
        </div>
      </section>

      <section class="calc-list">
        <div class="list-inner">
          <div class="calc-grid">
            @for (calc of calcs; track calc.id) {
              <a [routerLink]="['/calc', calc.slug]" class="calc-card">
                <h3>{{ calc.title }}</h3>
                <p>{{ calc.description }}</p>
                <span class="arrow">→</span>
              </a>
            }
          </div>
        </div>
      </section>
    }
  `,
  styles: `
    .cat-hero {
      padding: 56px 24px 64px;
      text-align: center;
    }

    .hero-inner {
      max-width: 600px;
      margin: 0 auto;
    }

    .back-link {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      font-size: 0.9rem;
      display: inline-block;
      margin-bottom: 20px;
      transition: color 0.2s;
    }

    .back-link:hover {
      color: white;
    }

    .cat-icon {
      font-size: 3rem;
      display: block;
      margin-bottom: 12px;
    }

    .cat-hero h1 {
      color: white;
      font-size: 2rem;
      font-weight: 800;
      margin: 0 0 8px;
    }

    .cat-hero p {
      color: rgba(255, 255, 255, 0.8);
      margin: 0;
      font-size: 1.05rem;
    }

    .calc-list {
      padding: 48px 24px;
    }

    .list-inner {
      max-width: 900px;
      margin: 0 auto;
    }

    .calc-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 16px;
    }

    .calc-card {
      display: flex;
      flex-direction: column;
      padding: 24px 28px;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      text-decoration: none;
      color: inherit;
      transition: all 0.25s;
      position: relative;
    }

    .calc-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);
      border-color: #c7d2fe;
    }

    .calc-card h3 {
      font-size: 1.1rem;
      font-weight: 700;
      margin: 0 0 6px;
      color: #111827;
    }

    .calc-card p {
      font-size: 0.9rem;
      color: #6b7280;
      margin: 0;
      line-height: 1.5;
    }

    .arrow {
      position: absolute;
      top: 24px;
      right: 24px;
      color: #d1d5db;
      font-size: 1.2rem;
      transition: color 0.2s;
    }

    .calc-card:hover .arrow {
      color: #6366f1;
    }
  `,
})
export class CategoryComponent {
  private route = inject(ActivatedRoute);

  category: (typeof CATEGORIES)[number] | undefined;
  calcs: CalculatorInfo[] = [];

  constructor() {
    const key = this.route.snapshot.paramMap.get('category') as CalculatorCategory;
    this.category = CATEGORIES.find((c) => c.key === key);
    this.calcs = CALCULATORS.filter((c) => c.category === key);
  }
}
