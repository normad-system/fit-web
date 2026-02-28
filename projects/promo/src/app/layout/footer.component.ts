import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">
              <span class="logo-icon">N</span>
              <span class="logo-text">NormaD<span class="logo-accent">Tech</span></span>
            </div>
            <p class="footer-desc">
              AI・IT技術の最新トレンドを発信しながら、<br />
              Webサイト制作・システム開発・モバイルアプリ開発を提供しています。
            </p>
          </div>

          <div class="footer-links">
            <h4>コンテンツ</h4>
            <a routerLink="/">ブログ</a>
            <a routerLink="/services">サービス</a>
            <a routerLink="/contact">お問い合わせ</a>
          </div>

          <div class="footer-links">
            <h4>サービス</h4>
            <a routerLink="/services" fragment="web">Webサイト制作</a>
            <a routerLink="/services" fragment="system">カスタムシステム開発</a>
            <a routerLink="/services" fragment="mobile">モバイルアプリ開発</a>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 NormaD Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: `
    .site-footer {
      background: #111827;
      color: #9ca3af;
      padding: 64px 24px 32px;
      margin-top: 80px;
    }

    .footer-inner {
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 48px;
    }

    .footer-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 16px;
    }

    .logo-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      color: white;
      border-radius: 8px;
      font-weight: 800;
      font-size: 1rem;
    }

    .logo-text {
      color: white;
      font-weight: 700;
      font-size: 1.15rem;
    }

    .logo-accent {
      color: #818cf8;
    }

    .footer-desc {
      font-size: 0.9rem;
      line-height: 1.7;
      color: #9ca3af;
    }

    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .footer-links h4 {
      color: white;
      font-size: 0.95rem;
      font-weight: 600;
      margin: 0 0 8px;
    }

    .footer-links a {
      color: #9ca3af;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.2s;
    }

    .footer-links a:hover {
      color: #c7d2fe;
    }

    .footer-bottom {
      margin-top: 48px;
      padding-top: 24px;
      border-top: 1px solid #1f2937;
      text-align: center;
      font-size: 0.85rem;
    }

    @media (max-width: 768px) {
      .footer-grid {
        grid-template-columns: 1fr;
        gap: 32px;
      }
    }
  `,
})
export class FooterComponent {}
