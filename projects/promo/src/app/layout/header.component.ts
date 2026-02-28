import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">
      <div class="header-inner">
        <a routerLink="/" class="logo">
          <span class="logo-icon">N</span>
          <span class="logo-text">NormaD<span class="logo-accent">Tech</span></span>
        </a>
        <button class="mobile-menu-btn" (click)="toggleMenu()" [class.active]="menuOpen">
          <span></span><span></span><span></span>
        </button>
        <nav class="main-nav" [class.open]="menuOpen">
          <a routerLink="/blog" routerLinkActive="active" (click)="closeMenu()">ブログ</a>
          <a routerLink="/services" routerLinkActive="active" (click)="closeMenu()">サービス</a>
          <a routerLink="/contact" routerLinkActive="active" class="nav-cta" (click)="closeMenu()">お問い合わせ</a>
        </nav>
      </div>
    </header>
  `,
  styles: `
    .site-header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid #e5e7eb;
    }

    .header-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: #111827;
      font-weight: 700;
      font-size: 1.25rem;
    }

    .logo-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      color: white;
      border-radius: 10px;
      font-weight: 800;
      font-size: 1.1rem;
    }

    .logo-accent {
      color: #6366f1;
    }

    .main-nav {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .main-nav a {
      text-decoration: none;
      color: #4b5563;
      font-weight: 500;
      font-size: 0.95rem;
      padding: 8px 16px;
      border-radius: 8px;
      transition: all 0.2s;
    }

    .main-nav a:hover {
      color: #111827;
      background: #f3f4f6;
    }

    .main-nav a.active {
      color: #6366f1;
      background: #eef2ff;
    }

    .nav-cta {
      background: #6366f1 !important;
      color: white !important;
      font-weight: 600 !important;
    }

    .nav-cta:hover {
      background: #4f46e5 !important;
      color: white !important;
    }

    .mobile-menu-btn {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
    }

    .mobile-menu-btn span {
      display: block;
      width: 24px;
      height: 2px;
      background: #374151;
      border-radius: 2px;
      transition: all 0.3s;
    }

    .mobile-menu-btn.active span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    .mobile-menu-btn.active span:nth-child(2) {
      opacity: 0;
    }
    .mobile-menu-btn.active span:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }

    @media (max-width: 768px) {
      .mobile-menu-btn {
        display: flex;
      }

      .main-nav {
        display: none;
        position: absolute;
        top: 72px;
        left: 0;
        right: 0;
        flex-direction: column;
        background: white;
        padding: 16px 24px;
        border-bottom: 1px solid #e5e7eb;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      }

      .main-nav.open {
        display: flex;
      }

      .main-nav a {
        padding: 12px 16px;
        width: 100%;
        text-align: center;
      }
    }
  `,
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
