import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GRADES } from '../../data/grades.data';
import { TOPICS } from '../../data/topics.data';
import { MATHEMATICIANS } from '../../data/mathematicians.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <!-- Hero -->
    <section class="hero">
      <div class="hero-inner">
        <h1>📐 数学の森へようこそ</h1>
        <p class="hero-sub">小学校から高校まで、教科書にそって<br>やさしく・たのしく・わかりやすく学べる数学サイトです。</p>
      </div>
    </section>

    <!-- School Stages -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">🏫 教科課程で学ぶ</h2>
        <div class="stage-grid">
          <a routerLink="/elementary" class="stage-card elementary">
            <span class="stage-icon">🌸</span>
            <h3>小学校 (1〜6年)</h3>
            <p>かずのかぞえ方から、分数・小数・割合まで</p>
          </a>
          <a routerLink="/junior" class="stage-card junior">
            <span class="stage-icon">📘</span>
            <h3>中学校 (1〜3年)</h3>
            <p>正負の数、方程式、関数、図形の証明</p>
          </a>
          <a routerLink="/high" class="stage-card high">
            <span class="stage-icon">🎓</span>
            <h3>高校 (数Ⅰ〜Ⅲ)</h3>
            <p>三角比、微分積分、複素数平面まで</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Popular Topics -->
    <section class="section section-alt">
      <div class="container">
        <h2 class="section-title">📚 人気の単元</h2>
        <div class="topic-grid">
          @for (topic of popularTopics; track topic.slug) {
            <a [routerLink]="['/topic', topic.slug]" class="topic-card">
              <span class="topic-grade" [style.background]="getGradeColor(topic.grade)">{{ getGradeLabel(topic.grade) }}</span>
              <h3>{{ topic.title }}</h3>
              <p>{{ topic.summary }}</p>
            </a>
          }
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="section">
      <div class="container">
        <div class="features">
          <div class="feature">
            <span class="feature-icon">📖</span>
            <h3>用語辞典</h3>
            <p>数学の専門用語をひらがな付きでやさしく解説</p>
            <a routerLink="/terms" class="feature-link">辞典を見る →</a>
          </div>
          <div class="feature">
            <span class="feature-icon">🧑‍🔬</span>
            <h3>数学者列伝</h3>
            <p>ピタゴラス,ガウス, ラマヌジャン… 偉大な数学者のエピソード</p>
            <a routerLink="/mathematicians" class="feature-link">列伝を読む →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Mathematicians Preview -->
    <section class="section section-alt">
      <div class="container">
        <h2 class="section-title">🧑‍🔬 偉大な数学者たち</h2>
        <div class="math-grid">
          @for (m of mathematicians; track m.slug) {
            <a [routerLink]="['/mathematician', m.slug]" class="math-card">
              <span class="math-portrait">{{ m.portrait }}</span>
              <div>
                <h3>{{ m.nameJa }}</h3>
                <p class="math-years">{{ m.born }} — {{ m.died }}</p>
                <p class="math-summary">{{ m.summary }}</p>
              </div>
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .hero { background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%); color: white; text-align: center; padding: 80px 20px; }
    .hero h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 16px; }
    .hero-sub { font-size: 1.15rem; opacity: 0.9; line-height: 1.8; }
    .section { padding: 64px 20px; }
    .section-alt { background: #f8fafc; }
    .container { max-width: 1100px; margin: 0 auto; }
    .section-title { font-size: 1.5rem; font-weight: 800; margin-bottom: 32px; text-align: center; }
    .stage-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
    .stage-card { display: block; padding: 32px; border-radius: 16px; text-decoration: none; color: white; transition: transform 0.2s, box-shadow 0.2s; }
    .stage-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.12); text-decoration: none; }
    .stage-card.elementary { background: linear-gradient(135deg, #ef4444, #f97316); }
    .stage-card.junior { background: linear-gradient(135deg, #3b82f6, #6366f1); }
    .stage-card.high { background: linear-gradient(135deg, #8b5cf6, #ec4899); }
    .stage-icon { font-size: 2.5rem; display: block; margin-bottom: 16px; }
    .stage-card h3 { font-size: 1.25rem; font-weight: 700; margin-bottom: 8px; }
    .stage-card p { font-size: 0.9rem; opacity: 0.9; }
    .topic-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px; }
    .topic-card { display: block; background: white; padding: 24px; border-radius: 14px; text-decoration: none; color: #1e293b; box-shadow: 0 1px 3px rgba(0,0,0,0.06); transition: transform 0.2s, box-shadow 0.2s; }
    .topic-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); text-decoration: none; }
    .topic-grade { display: inline-block; padding: 3px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; color: white; margin-bottom: 12px; }
    .topic-card h3 { font-size: 1.05rem; font-weight: 700; margin-bottom: 6px; }
    .topic-card p { font-size: 0.85rem; color: #64748b; }
    .features { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; }
    .feature { background: white; padding: 32px; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); text-align: center; }
    .feature-icon { font-size: 2.5rem; display: block; margin-bottom: 16px; }
    .feature h3 { font-size: 1.15rem; font-weight: 700; margin-bottom: 8px; }
    .feature p { font-size: 0.9rem; color: #64748b; margin-bottom: 16px; }
    .feature-link { font-weight: 600; color: #6366f1; font-size: 0.9rem; }
    .math-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; }
    .math-card { display: flex; gap: 16px; background: white; padding: 24px; border-radius: 14px; text-decoration: none; color: #1e293b; box-shadow: 0 1px 3px rgba(0,0,0,0.06); transition: transform 0.2s; }
    .math-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); text-decoration: none; }
    .math-portrait { font-size: 2.5rem; flex-shrink: 0; }
    .math-card h3 { font-size: 1rem; font-weight: 700; margin-bottom: 4px; }
    .math-years { font-size: 0.8rem; color: #6366f1; margin-bottom: 6px; }
    .math-summary { font-size: 0.85rem; color: #64748b; }
    @media (max-width: 640px) { .hero h1 { font-size: 1.75rem; } .hero-sub { font-size: 1rem; } }
  `,
})
export class HomeComponent {
  mathematicians = MATHEMATICIANS;
  popularTopics = TOPICS.filter(t =>
    ['addition-basics', 'multiplication-intro', 'fractions-intro', 'positive-negative', 'quadratic-equation', 'trigonometric-ratios', 'differentiation-intro', 'pythagorean-theorem'].includes(t.slug)
  );
  grades = GRADES;

  getGradeColor(key: string): string {
    return this.grades.find(g => g.key === key)?.color ?? '#6366f1';
  }
  getGradeLabel(key: string): string {
    return this.grades.find(g => g.key === key)?.label ?? '';
  }
}
