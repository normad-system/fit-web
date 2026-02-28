import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../models/blog-post.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [RouterLink, DatePipe],
  template: `
    <section class="blog-hero">
      <div class="hero-inner">
        <h1>ブログ</h1>
        <p class="hero-sub">AI・Web・モバイル・クラウド・暗号資産の最新技術トレンドを発信</p>
      </div>
    </section>

    <section class="blog-section">
      <div class="section-inner">
        <div class="category-filter">
          <button
            class="filter-btn"
            [class.active]="!selectedCategory"
            (click)="filterByCategory(null)"
          >
            すべて
          </button>
          @for (cat of categories; track cat.key) {
            <button
              class="filter-btn"
              [class.active]="selectedCategory === cat.key"
              (click)="filterByCategory(cat.key)"
            >
              {{ cat.label }}
            </button>
          }
        </div>

        <div class="blog-grid">
          @for (post of filteredPosts; track post.id) {
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

        @if (filteredPosts.length === 0) {
          <div class="no-posts">
            <p>該当する記事がありません。</p>
          </div>
        }
      </div>
    </section>
  `,
  styles: `
    .blog-hero {
      background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 50%, #c7d2fe 100%);
      padding: 60px 24px 64px;
      text-align: center;
    }

    .hero-inner {
      max-width: 800px;
      margin: 0 auto;
    }

    .blog-hero h1 {
      font-size: 2.5rem;
      font-weight: 800;
      color: #111827;
      margin: 0 0 12px;
    }

    .hero-sub {
      font-size: 1.1rem;
      color: #4b5563;
      margin: 0;
    }

    .blog-section {
      padding: 60px 24px 80px;
    }

    .section-inner {
      max-width: 1200px;
      margin: 0 auto;
    }

    .category-filter {
      display: flex;
      gap: 8px;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }

    .filter-btn {
      padding: 8px 18px;
      border: 1.5px solid #e5e7eb;
      border-radius: 20px;
      background: white;
      color: #6b7280;
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }

    .filter-btn:hover {
      border-color: #6366f1;
      color: #6366f1;
    }

    .filter-btn.active {
      background: #6366f1;
      border-color: #6366f1;
      color: white;
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

    .no-posts {
      text-align: center;
      padding: 60px 0;
      color: #9ca3af;
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      .blog-hero h1 {
        font-size: 1.75rem;
      }

      .blog-grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class BlogComponent {
  private blogService = inject(BlogService);

  categories = this.blogService.getCategories();
  allPosts = this.blogService.getAllPosts();
  filteredPosts = this.allPosts;
  selectedCategory: BlogPost['category'] | null = null;

  filterByCategory(category: BlogPost['category'] | null) {
    this.selectedCategory = category;
    this.filteredPosts = category
      ? this.blogService.getPostsByCategory(category)
      : this.allPosts;
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
      crypto: 'linear-gradient(135deg, #f59e0b, #f97316)',
      trend: 'linear-gradient(135deg, #f97316, #eab308)',
    };
    return gradients[category] ?? gradients['trend'];
  }
}
