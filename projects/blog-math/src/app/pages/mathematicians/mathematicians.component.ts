import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATHEMATICIANS } from '../../data/mathematicians.data';

@Component({
  selector: 'app-mathematicians',
  imports: [RouterLink],
  template: `
    <section class="math-hero">
      <div class="hero-inner">
        <h1>🧑‍🔬 数学者列伝</h1>
        <p>数学の歴史を彩った偉大な数学者たちの物語</p>
      </div>
    </section>
    <section class="math-body">
      <div class="container">
        <div class="math-grid">
          @for (m of mathematicians; track m.slug) {
            <a [routerLink]="['/mathematician', m.slug]" class="math-card">
              <div class="card-header">
                <span class="portrait">{{ m.portrait }}</span>
                <div>
                  <h2>{{ m.nameJa }}</h2>
                  <p class="name-en">{{ m.name }}</p>
                </div>
              </div>
              <p class="meta">{{ m.nationality }} ・ {{ m.born }} — {{ m.died }}</p>
              <p class="summary">{{ m.summary }}</p>
              @if (m.famousQuote) {
                <blockquote class="quote">「{{ m.famousQuote }}」</blockquote>
              }
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .math-hero { background: linear-gradient(135deg, #1e293b, #334155); color: white; text-align: center; padding: 60px 20px; }
    .hero-inner { max-width: 800px; margin: 0 auto; }
    .math-hero h1 { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
    .math-hero p { opacity: 0.8; }
    .math-body { padding: 48px 20px 80px; }
    .container { max-width: 1000px; margin: 0 auto; }
    .math-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
    .math-card { display: block; background: white; padding: 28px; border-radius: 16px; text-decoration: none; color: #1e293b; box-shadow: 0 2px 8px rgba(0,0,0,0.06); transition: transform 0.2s, box-shadow 0.2s; }
    .math-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.12); text-decoration: none; }
    .card-header { display: flex; gap: 16px; align-items: center; margin-bottom: 12px; }
    .portrait { font-size: 3rem; }
    .card-header h2 { font-size: 1.2rem; font-weight: 700; }
    .name-en { font-size: 0.85rem; color: #6b7280; }
    .meta { font-size: 0.8rem; color: #6366f1; margin-bottom: 10px; }
    .summary { font-size: 0.9rem; color: #475569; line-height: 1.6; }
    .quote { margin-top: 12px; padding: 10px 16px; border-left: 3px solid #6366f1; font-size: 0.85rem; color: #6b7280; font-style: italic; }
  `,
})
export class MathematiciansComponent {
  mathematicians = MATHEMATICIANS;
}
