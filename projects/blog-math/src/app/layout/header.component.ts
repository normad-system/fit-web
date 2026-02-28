import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="header-inner">
        <a routerLink="/" class="logo">📐 <span>数学の森</span></a>
        <nav class="nav" [class.open]="menuOpen">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="menuOpen=false">ホーム</a>
          <a routerLink="/elementary" routerLinkActive="active" (click)="menuOpen=false">小学校</a>
          <a routerLink="/junior" routerLinkActive="active" (click)="menuOpen=false">中学校</a>
          <a routerLink="/high" routerLinkActive="active" (click)="menuOpen=false">高校</a>
          <a routerLink="/terms" routerLinkActive="active" (click)="menuOpen=false">用語辞典</a>
          <a routerLink="/mathematicians" routerLinkActive="active" (click)="menuOpen=false">数学者列伝</a>
        </nav>
        <button class="hamburger" (click)="menuOpen=!menuOpen" [attr.aria-label]="'メニュー'">
          <span [class.open]="menuOpen"></span>
        </button>
      </div>
    </header>
  `,
  styles: `
    .header { position: sticky; top: 0; z-index: 100; background: white; border-bottom: 1px solid #e5e7eb; }
    .header-inner { max-width: 1100px; margin: 0 auto; padding: 0 20px; display: flex; align-items: center; justify-content: space-between; height: 64px; }
    .logo { display: flex; align-items: center; gap: 8px; font-size: 1.25rem; font-weight: 800; color: #1e293b; text-decoration: none; }
    .logo span { background: linear-gradient(135deg, #6366f1, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .nav { display: flex; gap: 4px; }
    .nav a { padding: 8px 14px; border-radius: 8px; font-size: 0.9rem; font-weight: 500; color: #475569; text-decoration: none; transition: all 0.2s; }
    .nav a:hover { background: #f1f5f9; color: #6366f1; }
    .nav a.active { background: #eef2ff; color: #6366f1; font-weight: 600; }
    .hamburger { display: none; background: none; border: none; cursor: pointer; width: 32px; height: 32px; position: relative; }
    .hamburger span, .hamburger span::before, .hamburger span::after { display: block; width: 22px; height: 2px; background: #374151; position: absolute; left: 5px; transition: all 0.3s; }
    .hamburger span { top: 15px; }
    .hamburger span::before { content: ''; top: -7px; }
    .hamburger span::after { content: ''; top: 7px; }
    .hamburger span.open { background: transparent; }
    .hamburger span.open::before { transform: rotate(45deg); top: 0; }
    .hamburger span.open::after { transform: rotate(-45deg); top: 0; }
    @media (max-width: 768px) {
      .hamburger { display: block; }
      .nav { display: none; position: absolute; top: 64px; left: 0; right: 0; background: white; flex-direction: column; padding: 16px; border-bottom: 1px solid #e5e7eb; box-shadow: 0 8px 16px rgba(0,0,0,0.08); }
      .nav.open { display: flex; }
      .nav a { padding: 12px 16px; }
    }
  `,
})
export class HeaderComponent {
  menuOpen = false;
}
