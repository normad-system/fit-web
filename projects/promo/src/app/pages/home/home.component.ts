import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../models/blog-post.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, DatePipe],
  template: `
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-badge">AI & IT Tech Blog</div>
        <h1>テクノロジーの最前線を、<br />わかりやすく。</h1>
        <p class="hero-sub">
          AI・Web・モバイル・クラウドの最新技術トレンドを発信。<br />
          ビジネスに活かせる実践的な技術情報をお届けします。
        </p>
        <div class="hero-actions">
          <a routerLink="/services" class="btn-primary">サービスを見る</a>
          <a routerLink="/contact" class="btn-secondary">お問い合わせ</a>
        </div>
      </div>
    </section>

    <section class="blog-section">
      <div class="section-inner">
        <div class="section-header">
          <h2>最新記事</h2>
          <p class="section-sub">AI・ITの最新トレンドをキャッチアップ</p>
        </div>

        <div class="blog-grid">
          @for (post of latestPosts; track post.id) {
            <article class="blog-card">
              <div class="card-thumb" [style.background]="getCategoryGradient(post.category)">
                <span class="card-category">{{ getCategoryLabel(post.category) }}</span>
              </div>
              <div class="card-body">
                <div class="card-meta">
                  <time>{{ post.publishedAt | date: 'yyyy年M月d日' }}</time>
                  <span class="read-time">{{ post.readTimeMinutes }}分で読める</span>
                </div>
                <h3>
                  <a [routerLink]="['/blog', post.slug]">{{ post.title }}</a>
                </h3>
                <p class="card-summary">{{ post.summary }}</p>
                <div class="card-tags">
                  @for (tag of post.tags.slice(0, 3); track tag) {
                    <span class="tag">{{ tag }}</span>
                  }
                </div>
              </div>
            </article>
          }
        </div>

        <div class="view-all">
          <a routerLink="/blog" class="view-all-link">すべての記事を見る →</a>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-inner">
        <h2>システム開発のご相談はお気軽に</h2>
        <p>
          Webサイト制作・カスタムシステム開発・モバイルアプリ開発など、<br />
          お客様のビジネスに合わせたソリューションをご提案します。
        </p>
        <a routerLink="/contact" class="btn-primary btn-lg">無料相談はこちら</a>
      </div>
    </section>
  `,
  styles: `
    .hero {
      background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 50%, #c7d2fe 100%);
      padding: 80px 24px 96px;
    }

    .hero-inner {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    .hero-badge {
      display: inline-block;
      background: white;
      color: #6366f1;
      font-weight: 600;
      font-size: 0.85rem;
      padding: 6px 16px;
      border-radius: 20px;
      margin-bottom: 24px;
      box-shadow: 0 2px 8px rgba(99, 102, 241, 0.15);
    }

    .hero h1 {
      font-size: 2.75rem;
      font-weight: 800;
      color: #111827;
      line-height: 1.3;
      margin: 0 0 20px;
    }

    .hero-sub {
      font-size: 1.1rem;
      color: #4b5563;
      line-height: 1.8;
      margin: 0 0 36px;
    }

    .hero-actions {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      padding: 14px 32px;
      background: #6366f1;
      color: white;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.2s;
      box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
    }

    .btn-primary:hover {
      background: #4f46e5;
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
    }

    .btn-secondary {
      display: inline-flex;
      align-items: center;
      padding: 14px 32px;
      background: white;
      color: #374151;
      border: 1.5px solid #d1d5db;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.2s;
    }

    .btn-secondary:hover {
      border-color: #6366f1;
      color: #6366f1;
    }

    .btn-lg {
      padding: 16px 40px;
      font-size: 1.05rem;
    }

    /* Blog section */
    .blog-section {
      padding: 80px 24px;
    }

    .section-inner {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-header {
      text-align: center;
      margin-bottom: 40px;
    }

    .section-header h2 {
      font-size: 2rem;
      font-weight: 800;
      color: #111827;
      margin: 0 0 8px;
    }

    .section-sub {
      color: #6b7280;
      font-size: 1.05rem;
      margin: 0;
    }

    .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 32px;
    }

    .blog-card {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid #e5e7eb;
      transition: all 0.3s;
    }

    .blog-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
    }

    .card-thumb {
      height: 180px;
      display: flex;
      align-items: flex-end;
      padding: 16px;
    }

    .card-category {
      background: rgba(255, 255, 255, 0.95);
      padding: 4px 12px;
      border-radius: 6px;
      font-size: 0.8rem;
      font-weight: 600;
      color: #374151;
    }

    .card-body {
      padding: 24px;
    }

    .card-meta {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
      font-size: 0.85rem;
      color: #9ca3af;
    }

    .read-time {
      color: #6366f1;
      font-weight: 500;
    }

    .card-body h3 {
      margin: 0 0 12px;
      font-size: 1.15rem;
      font-weight: 700;
      line-height: 1.5;
    }

    .card-body h3 a {
      color: #111827;
      text-decoration: none;
      transition: color 0.2s;
    }

    .card-body h3 a:hover {
      color: #6366f1;
    }

    .card-summary {
      color: #6b7280;
      font-size: 0.9rem;
      line-height: 1.7;
      margin: 0 0 16px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .card-tags {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }

    .tag {
      background: #f3f4f6;
      color: #6b7280;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .view-all {
      text-align: center;
      margin-top: 48px;
    }

    .view-all-link {
      display: inline-flex;
      align-items: center;
      padding: 14px 36px;
      background: white;
      color: #6366f1;
      border: 1.5px solid #6366f1;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.2s;
    }

    .view-all-link:hover {
      background: #6366f1;
      color: white;
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
    }

    /* CTA */
    .cta-section {
      padding: 80px 24px;
      background: linear-gradient(135deg, #4f46e5, #7c3aed);
      text-align: center;
    }

    .cta-inner {
      max-width: 700px;
      margin: 0 auto;
    }

    .cta-section h2 {
      color: white;
      font-size: 2rem;
      font-weight: 800;
      margin: 0 0 16px;
    }

    .cta-section p {
      color: #c7d2fe;
      font-size: 1.05rem;
      line-height: 1.8;
      margin: 0 0 36px;
    }

    .cta-section .btn-primary {
      background: white;
      color: #4f46e5;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
    }

    .cta-section .btn-primary:hover {
      background: #f5f3ff;
      transform: translateY(-1px);
    }

    @media (max-width: 768px) {
      .hero h1 {
        font-size: 1.75rem;
      }

      .hero-sub {
        font-size: 1rem;
      }

      .blog-grid {
        grid-template-columns: 1fr;
      }

      .cta-section h2 {
        font-size: 1.5rem;
      }
    }
  `,
})
export class HomeComponent {
  private blogService = inject(BlogService);

  categories = this.blogService.getCategories();
  latestPosts = this.blogService.getLatestPosts(9);

  getCategoryLabel(category: BlogPost['category']): string {
    return this.categories.find((c) => c.key === category)?.label ?? category;
  }

  getCategoryGradient(category: BlogPost['category']): string {
    const gradients: Record<string, string> = {
      ai: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      web: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
      mobile: 'linear-gradient(135deg, #f59e0b, #ef4444)',
      cloud: 'linear-gradient(135deg, #10b981, #059669)',
      devops: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
      crypto: 'linear-gradient(135deg, #f59e0b, #f97316)',
      trend: 'linear-gradient(135deg, #f97316, #eab308)',
    };
    return gradients[category] ?? gradients['trend'];
  }
}
