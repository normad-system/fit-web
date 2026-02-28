import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATHEMATICIANS } from '../../data/mathematicians.data';

@Component({
  selector: 'app-mathematician-detail',
  imports: [RouterLink],
  template: `
    @if (person()) {
      <article class="person-page">
        <div class="person-hero">
          <div class="hero-inner">
            <a routerLink="/mathematicians" class="back">← 数学者列伝</a>
            <span class="portrait">{{ person()!.portrait }}</span>
            <h1>{{ person()!.nameJa }}</h1>
            <p class="name-en">{{ person()!.name }}</p>
            <p class="meta">{{ person()!.nationality }} ・ {{ person()!.born }} — {{ person()!.died }}</p>
          </div>
        </div>

        <div class="person-body">
          <!-- quote -->
          @if (person()!.famousQuote) {
            <blockquote class="quote-block">
              <p>「{{ person()!.famousQuote }}」</p>
              <cite>— {{ person()!.nameJa }}</cite>
            </blockquote>
          }

          <!-- biography -->
          <section class="content-section">
            <h2>📜 生涯</h2>
            <div class="bio-content" [innerHTML]="person()!.biography"></div>
          </section>

          <!-- achievements -->
          <section class="content-section">
            <h2>🏆 主な業績</h2>
            <ul class="achievement-list">
              @for (a of person()!.achievements; track a) {
                <li>{{ a }}</li>
              }
            </ul>
          </section>

          <!-- episodes -->
          <section class="content-section">
            <h2>📖 エピソード</h2>
            <div class="episode-list">
              @for (ep of person()!.episodes; track ep; let i = $index) {
                <div class="episode-card">
                  <div class="episode-num">{{ i + 1 }}</div>
                  <p>{{ ep }}</p>
                </div>
              }
            </div>
          </section>

          <!-- nav -->
          <div class="nav-box">
            @if (prevPerson()) {
              <a [routerLink]="['/mathematician', prevPerson()!.slug]" class="nav-link">
                <span class="nav-dir">← 前の数学者</span>
                <span class="nav-title">{{ prevPerson()!.nameJa }}</span>
              </a>
            }
            @if (nextPerson()) {
              <a [routerLink]="['/mathematician', nextPerson()!.slug]" class="nav-link next">
                <span class="nav-dir">次の数学者 →</span>
                <span class="nav-title">{{ nextPerson()!.nameJa }}</span>
              </a>
            }
          </div>
        </div>
      </article>
    }
  `,
  styles: `
    .person-hero { background: linear-gradient(135deg, #1e293b, #334155); color: white; text-align: center; padding: 60px 20px; }
    .hero-inner { max-width: 700px; margin: 0 auto; }
    .back { color: rgba(255,255,255,0.7); font-size: 0.9rem; text-decoration: none; display: inline-block; margin-bottom: 20px; }
    .back:hover { color: white; }
    .portrait { font-size: 4rem; display: block; margin-bottom: 16px; }
    .person-hero h1 { font-size: 2rem; font-weight: 800; margin-bottom: 4px; }
    .name-en { font-size: 1rem; opacity: 0.7; margin-bottom: 8px; }
    .meta { font-size: 0.9rem; opacity: 0.8; }
    .person-body { max-width: 800px; margin: 0 auto; padding: 48px 20px 80px; }
    .quote-block { text-align: center; padding: 32px; margin-bottom: 40px; background: linear-gradient(135deg, #eef2ff, #faf5ff); border-radius: 16px; }
    .quote-block p { font-size: 1.15rem; font-style: italic; color: #4338ca; font-weight: 500; margin-bottom: 8px; }
    .quote-block cite { font-size: 0.85rem; color: #6b7280; }
    .content-section { margin-bottom: 40px; }
    .content-section h2 { font-size: 1.3rem; font-weight: 700; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #e5e7eb; }
    .bio-content { font-size: 1rem; line-height: 2; color: #334155; }
    .achievement-list { list-style: none; padding: 0; }
    .achievement-list li { padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 0.95rem; color: #334155; padding-left: 24px; position: relative; }
    .achievement-list li::before { content: '✦'; position: absolute; left: 0; color: #6366f1; }
    .episode-list { display: flex; flex-direction: column; gap: 20px; }
    .episode-card { display: flex; gap: 16px; padding: 24px; background: #f8fafc; border-radius: 14px; }
    .episode-num { width: 36px; height: 36px; flex-shrink: 0; background: #6366f1; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.9rem; }
    .episode-card p { font-size: 0.95rem; color: #334155; line-height: 1.8; }
    .nav-box { display: flex; gap: 16px; margin-top: 48px; flex-wrap: wrap; }
    .nav-link { flex: 1; min-width: 200px; padding: 20px; border-radius: 12px; text-decoration: none; color: #1e293b; background: #f8fafc; border: 1px solid #e5e7eb; transition: all 0.2s; }
    .nav-link:hover { border-color: #6366f1; background: #eef2ff; text-decoration: none; }
    .nav-link.next { text-align: right; }
    .nav-dir { display: block; font-size: 0.8rem; color: #6366f1; font-weight: 600; margin-bottom: 4px; }
    .nav-title { font-weight: 700; font-size: 0.95rem; }
  `,
})
export class MathematicianDetailComponent {
  slug = input.required<string>();

  private all = MATHEMATICIANS;

  person = computed(() => this.all.find(m => m.slug === this.slug()));

  prevPerson = computed(() => {
    const idx = this.all.findIndex(m => m.slug === this.slug());
    return idx > 0 ? this.all[idx - 1] : null;
  });

  nextPerson = computed(() => {
    const idx = this.all.findIndex(m => m.slug === this.slug());
    return idx >= 0 && idx < this.all.length - 1 ? this.all[idx + 1] : null;
  });
}
