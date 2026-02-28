import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <header class="site-header">
      <div class="header-inner">
        <a routerLink="/" class="logo">
          <span class="logo-icon">🧮</span>
          <span class="logo-text">CalcHub</span>
        </a>
        <nav class="header-nav">
          <a routerLink="/" class="nav-link">ホーム</a>
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
      height: 64px;
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
      font-weight: 800;
      font-size: 1.3rem;
    }

    .logo-icon {
      font-size: 1.5rem;
    }

    .header-nav {
      display: flex;
      gap: 8px;
    }

    .nav-link {
      text-decoration: none;
      color: #4b5563;
      font-weight: 500;
      font-size: 0.95rem;
      padding: 8px 16px;
      border-radius: 8px;
      transition: all 0.2s;
    }

    .nav-link:hover {
      color: #111827;
      background: #f3f4f6;
    }
  `,
})
export class HeaderComponent {}
