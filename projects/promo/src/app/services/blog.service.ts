import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';
import { BLOG_POSTS } from '../data/blog-posts.data';

@Injectable({ providedIn: 'root' })
export class BlogService {
  getAllPosts(): BlogPost[] {
    return BLOG_POSTS.sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }

  getLatestPosts(count: number): BlogPost[] {
    return this.getAllPosts().slice(0, count);
  }

  getPostBySlug(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find((post) => post.slug === slug);
  }

  getPostsByCategory(category: BlogPost['category']): BlogPost[] {
    return this.getAllPosts().filter((post) => post.category === category);
  }

  getCategories(): { key: BlogPost['category']; label: string }[] {
    return [
      { key: 'ai', label: 'AI / 人工知能' },
      { key: 'web', label: 'Web開発' },
      { key: 'mobile', label: 'モバイル' },
      { key: 'cloud', label: 'クラウド' },
      { key: 'devops', label: 'DevOps' },
      { key: 'crypto', label: '暗号資産' },
      { key: 'trend', label: 'トレンド' },
    ];
  }
}
