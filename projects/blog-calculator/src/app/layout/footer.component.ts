import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="site-footer">
      <div class="footer-inner">
        <p>&copy; 2026 CalcHub — すべての計算をもっと簡単に</p>
      </div>
    </footer>
  `,
  styles: `
    .site-footer {
      background: #111827;
      color: #9ca3af;
      padding: 32px 24px;
      text-align: center;
      margin-top: 80px;
    }

    .footer-inner {
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-inner p {
      font-size: 0.9rem;
      margin: 0;
    }
  `,
})
export class FooterComponent {}
