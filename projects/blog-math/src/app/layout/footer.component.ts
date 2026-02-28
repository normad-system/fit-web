import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="logo">📐 数学の森</span>
          <p>小学校から高校まで、教科書に沿ってやさしく学べる数学サイト</p>
        </div>
        <div class="footer-links">
          <div class="link-group">
            <h4>教科課程</h4>
            <a routerLink="/elementary">小学校</a>
            <a routerLink="/junior">中学校</a>
            <a routerLink="/high">高校</a>
          </div>
          <div class="link-group">
            <h4>もっと学ぶ</h4>
            <a routerLink="/terms">用語辞典</a>
            <a routerLink="/mathematicians">数学者列伝</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 数学の森. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: `
    .footer { background: #1e293b; color: #94a3b8; padding: 48px 20px 0; margin-top: 80px; }
    .footer-inner { max-width: 1100px; margin: 0 auto; display: flex; gap: 48px; flex-wrap: wrap; }
    .footer-brand { flex: 1; min-width: 240px; }
    .footer-brand .logo { font-size: 1.2rem; font-weight: 700; color: white; }
    .footer-brand p { margin-top: 12px; font-size: 0.85rem; line-height: 1.6; }
    .footer-links { display: flex; gap: 48px; }
    .link-group h4 { color: white; font-size: 0.85rem; font-weight: 600; margin-bottom: 12px; }
    .link-group a { display: block; font-size: 0.85rem; color: #94a3b8; text-decoration: none; padding: 4px 0; transition: color 0.2s; }
    .link-group a:hover { color: white; }
    .footer-bottom { border-top: 1px solid #334155; margin-top: 40px; padding: 20px 0; text-align: center; font-size: 0.8rem; }
  `,
})
export class FooterComponent {}
