import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../models/blog-post.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  imports: [RouterLink, DatePipe],
  template: `
    @if (post) {
      <article class="blog-detail">
        <div class="detail-hero" [style.background]="getCategoryGradient(post.category)">
          <div class="detail-hero-inner">
            <a routerLink="/" class="back-link">← ブログ一覧に戻る</a>
            <span class="category-badge">{{ getCategoryLabel(post.category) }}</span>
            <h1>{{ post.title }}</h1>
            <div class="detail-meta">
              <span>{{ post.author }}</span>
              <span>{{ post.publishedAt | date: 'yyyy年M月d日' }}</span>
              <span>{{ post.readTimeMinutes }}分で読める</span>
            </div>
          </div>
        </div>

        <div class="detail-body">
          <div class="detail-content" [innerHTML]="post.content"></div>

          <div class="detail-tags">
            @for (tag of post.tags; track tag) {
              <span class="tag">{{ tag }}</span>
            }
          </div>

          <div class="detail-cta">
            <h3>この記事に関連するサービス</h3>
            <p>技術的なご相談やシステム開発のご依頼など、お気軽にお問い合わせください。</p>
            <div class="cta-actions">
              <a routerLink="/contact" class="btn-primary">お問い合わせ</a>
              <a routerLink="/services" class="btn-secondary">サービス一覧</a>
            </div>
          </div>
        </div>
      </article>
    } @else {
      <div class="not-found">
        <h2>記事が見つかりません</h2>
        <a routerLink="/">ブログ一覧に戻る</a>
      </div>
    }
  `,
  styles: `
    .detail-hero {
      padding: 60px 24px 80px;
    }

    .detail-hero-inner {
      max-width: 800px;
      margin: 0 auto;
    }

    .back-link {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      font-size: 0.9rem;
      display: inline-block;
      margin-bottom: 24px;
      transition: color 0.2s;
    }

    .back-link:hover {
      color: white;
    }

    .category-badge {
      display: inline-block;
      background: rgba(255, 255, 255, 0.2);
      color: white;
      padding: 4px 12px;
      border-radius: 6px;
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 16px;
    }

    .detail-hero h1 {
      color: white;
      font-size: 2.25rem;
      font-weight: 800;
      line-height: 1.4;
      margin: 0 0 20px;
    }

    .detail-meta {
      display: flex;
      gap: 20px;
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.9rem;
      flex-wrap: wrap;
    }

    .detail-body {
      max-width: 800px;
      margin: -40px auto 0;
      padding: 48px;
      background: white;
      border-radius: 16px;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    }

    .detail-content {
      font-size: 1.05rem;
      line-height: 1.9;
      color: #374151;
    }

    :host ::ng-deep .detail-content h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #111827;
      margin: 40px 0 16px;
      padding-bottom: 8px;
      border-bottom: 2px solid #e5e7eb;
    }

    :host ::ng-deep .detail-content p {
      margin: 0 0 20px;
    }

    :host ::ng-deep .detail-content .cta-box {
      background: #eef2ff;
      border-left: 4px solid #6366f1;
      padding: 20px 24px;
      border-radius: 8px;
      margin: 32px 0;
    }

    :host ::ng-deep .detail-content .cta-box a {
      color: #6366f1;
      font-weight: 600;
    }

    .detail-tags {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: 40px;
      padding-top: 24px;
      border-top: 1px solid #e5e7eb;
    }

    .tag {
      background: #f3f4f6;
      color: #6b7280;
      padding: 6px 14px;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 500;
    }

    .detail-cta {
      margin-top: 48px;
      padding: 32px;
      background: #f9fafb;
      border-radius: 12px;
      text-align: center;
    }

    .detail-cta h3 {
      margin: 0 0 8px;
      font-size: 1.25rem;
      color: #111827;
    }

    .detail-cta p {
      color: #6b7280;
      margin: 0 0 24px;
    }

    .cta-actions {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn-primary {
      padding: 12px 28px;
      background: #6366f1;
      color: white;
      border-radius: 10px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.2s;
    }

    .btn-primary:hover {
      background: #4f46e5;
    }

    .btn-secondary {
      padding: 12px 28px;
      background: white;
      color: #374151;
      border: 1.5px solid #d1d5db;
      border-radius: 10px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.2s;
    }

    .btn-secondary:hover {
      border-color: #6366f1;
      color: #6366f1;
    }

    .not-found {
      text-align: center;
      padding: 120px 24px;
    }

    .not-found h2 {
      font-size: 1.5rem;
      color: #374151;
      margin: 0 0 16px;
    }

    .not-found a {
      color: #6366f1;
      text-decoration: none;
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .detail-hero h1 {
        font-size: 1.5rem;
      }

      .detail-body {
        margin: -24px 16px 0;
        padding: 28px 20px;
      }
    }
  `,
})
export class BlogDetailComponent {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);

  post: BlogPost | undefined;

  private categories = this.blogService.getCategories();

  constructor() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.post = this.blogService.getPostBySlug(slug);
    }
  }

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
      trend: 'linear-gradient(135deg, #f97316, #eab308)',
    };
    return gradients[category] ?? gradients['trend'];
  }
}
