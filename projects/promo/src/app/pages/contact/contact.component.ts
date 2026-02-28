import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, RouterLink],
  template: `
    <section class="contact-hero">
      <div class="hero-inner">
        <div class="hero-badge">Contact Us</div>
        <h1>お問い合わせ</h1>
        <p class="hero-sub">
          ご相談・お見積りは無料です。<br />
          Webサイト制作、システム開発、モバイルアプリ開発について、<br />
          お気軽にお問い合わせください。
        </p>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-inner">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>お気軽にご相談ください</h2>
            <p class="info-desc">
              まずはお客様のご要望をお聞かせください。最適なソリューションをご提案いたします。
            </p>

            <div class="info-items">
              <div class="info-item">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <strong>メール</strong>
                  <span>contact&#64;normad-tech.com</span>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <strong>対応時間</strong>
                  <span>平日 10:00〜19:00</span>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <strong>所在地</strong>
                  <span>リモート対応（全国対応可）</span>
                </div>
              </div>
            </div>

            <div class="service-links">
              <h3>サービス詳細はこちら</h3>
              <a routerLink="/services" fragment="web">Webサイト制作 →</a>
              <a routerLink="/services" fragment="system">カスタムシステム開発 →</a>
              <a routerLink="/services" fragment="mobile">モバイルアプリ開発 →</a>
            </div>
          </div>

          <div class="contact-form-wrapper">
            @if (submitted()) {
              <div class="success-message">
                <div class="success-icon">✓</div>
                <h3>お問い合わせありがとうございます</h3>
                <p>内容を確認の上、2営業日以内にご連絡いたします。</p>
                <button (click)="resetForm()" class="btn-secondary">新しいお問い合わせ</button>
              </div>
            } @else {
              <form (ngSubmit)="onSubmit()" class="contact-form">
                <div class="form-group">
                  <label for="name">お名前 <span class="required">*</span></label>
                  <input
                    id="name"
                    type="text"
                    [(ngModel)]="formData.name"
                    name="name"
                    placeholder="山田 太郎"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="company">会社名</label>
                  <input
                    id="company"
                    type="text"
                    [(ngModel)]="formData.company"
                    name="company"
                    placeholder="株式会社○○"
                  />
                </div>

                <div class="form-group">
                  <label for="email">メールアドレス <span class="required">*</span></label>
                  <input
                    id="email"
                    type="email"
                    [(ngModel)]="formData.email"
                    name="email"
                    placeholder="info&#64;example.com"
                    required
                  />
                </div>

                <div class="form-group">
                  <label>ご相談内容 <span class="required">*</span></label>
                  <div class="checkbox-group">
                    <label class="checkbox-label">
                      <input type="checkbox" [(ngModel)]="formData.serviceWeb" name="serviceWeb" />
                      <span>Webサイト制作</span>
                    </label>
                    <label class="checkbox-label">
                      <input type="checkbox" [(ngModel)]="formData.serviceSystem" name="serviceSystem" />
                      <span>カスタムシステム開発</span>
                    </label>
                    <label class="checkbox-label">
                      <input type="checkbox" [(ngModel)]="formData.serviceMobile" name="serviceMobile" />
                      <span>モバイルアプリ開発</span>
                    </label>
                    <label class="checkbox-label">
                      <input type="checkbox" [(ngModel)]="formData.serviceOther" name="serviceOther" />
                      <span>その他</span>
                    </label>
                  </div>
                </div>

                <div class="form-group">
                  <label for="budget">ご予算（任意）</label>
                  <select id="budget" [(ngModel)]="formData.budget" name="budget">
                    <option value="">選択してください</option>
                    <option value="~50万">〜50万円</option>
                    <option value="50~100万">50万〜100万円</option>
                    <option value="100~300万">100万〜300万円</option>
                    <option value="300~500万">300万〜500万円</option>
                    <option value="500万~">500万円〜</option>
                    <option value="未定">未定・要相談</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="message">ご相談内容の詳細 <span class="required">*</span></label>
                  <textarea
                    id="message"
                    [(ngModel)]="formData.message"
                    name="message"
                    rows="6"
                    placeholder="プロジェクトの背景、実現したいこと、スケジュール感などをお聞かせください。"
                    required
                  ></textarea>
                </div>

                <button type="submit" class="btn-primary btn-lg btn-full">送信する</button>
              </form>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .contact-hero {
      background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 50%, #c7d2fe 100%);
      padding: 64px 24px 80px;
      text-align: center;
    }

    .hero-inner {
      max-width: 800px;
      margin: 0 auto;
    }

    .hero-badge {
      display: inline-block;
      background: white;
      color: #6366f1;
      font-weight: 600;
      font-size: 0.85rem;
      padding: 6px 16px;
      border-radius: 20px;
      margin-bottom: 24px;
      box-shadow: 0 2px 8px rgba(99, 102, 241, 0.15);
    }

    .contact-hero h1 {
      font-size: 2.5rem;
      font-weight: 800;
      color: #111827;
      margin: 0 0 16px;
    }

    .hero-sub {
      color: #4b5563;
      font-size: 1.05rem;
      line-height: 1.8;
      margin: 0;
    }

    /* Contact section */
    .contact-section {
      padding: 80px 24px;
    }

    .contact-inner {
      max-width: 1100px;
      margin: 0 auto;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1.3fr;
      gap: 64px;
    }

    .contact-info h2 {
      font-size: 1.5rem;
      font-weight: 800;
      color: #111827;
      margin: 0 0 12px;
    }

    .info-desc {
      color: #6b7280;
      line-height: 1.7;
      margin: 0 0 32px;
    }

    .info-items {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 40px;
    }

    .info-item {
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }

    .info-icon {
      flex-shrink: 0;
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #eef2ff;
      color: #6366f1;
      border-radius: 10px;
    }

    .info-item strong {
      display: block;
      font-size: 0.9rem;
      color: #111827;
      margin-bottom: 2px;
    }

    .info-item span {
      font-size: 0.9rem;
      color: #6b7280;
    }

    .service-links {
      padding: 24px;
      background: #f9fafb;
      border-radius: 12px;
    }

    .service-links h3 {
      font-size: 1rem;
      font-weight: 700;
      color: #111827;
      margin: 0 0 12px;
    }

    .service-links a {
      display: block;
      color: #6366f1;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      padding: 6px 0;
      transition: color 0.2s;
    }

    .service-links a:hover {
      color: #4f46e5;
    }

    /* Form */
    .contact-form-wrapper {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 20px;
      padding: 40px;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .form-group label {
      font-size: 0.9rem;
      font-weight: 600;
      color: #374151;
    }

    .required {
      color: #ef4444;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      padding: 12px 16px;
      border: 1.5px solid #d1d5db;
      border-radius: 10px;
      font-size: 1rem;
      font-family: inherit;
      color: #111827;
      background: #fafafa;
      transition: all 0.2s;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #6366f1;
      background: white;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }

    .form-group textarea {
      resize: vertical;
      min-height: 120px;
    }

    .checkbox-group {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-top: 4px;
    }

    .checkbox-label {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      font-weight: 400 !important;
    }

    .checkbox-label input[type='checkbox'] {
      width: 18px;
      height: 18px;
      accent-color: #6366f1;
    }

    .checkbox-label span {
      font-size: 0.9rem;
      color: #374151;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 14px 32px;
      background: #6366f1;
      color: white;
      border: none;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
    }

    .btn-primary:hover {
      background: #4f46e5;
      transform: translateY(-1px);
    }

    .btn-lg {
      padding: 16px 40px;
      font-size: 1.05rem;
    }

    .btn-full {
      width: 100%;
    }

    .btn-secondary {
      display: inline-flex;
      align-items: center;
      padding: 12px 28px;
      background: white;
      color: #374151;
      border: 1.5px solid #d1d5db;
      border-radius: 10px;
      text-decoration: none;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }

    .btn-secondary:hover {
      border-color: #6366f1;
      color: #6366f1;
    }

    /* Success */
    .success-message {
      text-align: center;
      padding: 48px 24px;
    }

    .success-icon {
      width: 64px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ecfdf5;
      color: #059669;
      font-size: 2rem;
      font-weight: 700;
      border-radius: 50%;
      margin: 0 auto 24px;
    }

    .success-message h3 {
      font-size: 1.25rem;
      color: #111827;
      margin: 0 0 8px;
    }

    .success-message p {
      color: #6b7280;
      margin: 0 0 24px;
    }

    @media (max-width: 768px) {
      .contact-hero h1 {
        font-size: 1.75rem;
      }

      .contact-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .contact-form-wrapper {
        padding: 28px 20px;
      }

      .checkbox-group {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class ContactComponent {
  submitted = signal(false);

  formData = {
    name: '',
    company: '',
    email: '',
    serviceWeb: false,
    serviceSystem: false,
    serviceMobile: false,
    serviceOther: false,
    budget: '',
    message: '',
  };

  onSubmit() {
    // TODO: integrate with backend API
    console.log('Form submitted:', this.formData);
    this.submitted.set(true);
  }

  resetForm() {
    this.formData = {
      name: '',
      company: '',
      email: '',
      serviceWeb: false,
      serviceSystem: false,
      serviceMobile: false,
      serviceOther: false,
      budget: '',
      message: '',
    };
    this.submitted.set(false);
  }
}
