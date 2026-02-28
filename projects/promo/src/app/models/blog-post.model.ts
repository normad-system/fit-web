export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: 'ai' | 'web' | 'mobile' | 'cloud' | 'devops' | 'trend' | 'crypto';
  tags: string[];
  author: string;
  publishedAt: string;
  readTimeMinutes: number;
  thumbnailUrl: string;
}
