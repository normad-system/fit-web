import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  template: `
    <section class="services-hero">
      <div class="hero-inner">
        <div class="hero-badge">Our Services</div>
        <h1>ビジネスを加速する<br />テクノロジーソリューション</h1>
        <p class="hero-sub">
          最新技術を活用したWebサイト制作からカスタムシステム開発、モバイルアプリ開発まで。<br />
          お客様のビジネスに最適なソリューションをワンストップで提供します。
        </p>
      </div>
    </section>

    <section class="services-list">
      <div class="services-inner">

        <!-- Web制作 -->
        <div class="service-card" id="web">
          <div class="service-icon web-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </div>
          <div class="service-content">
            <h2>Webサイト制作</h2>
            <p class="service-desc">
              コーポレートサイト、LP、ECサイト、メディアサイトなど、
              お客様の目的に合わせた高品質なWebサイトを制作します。
              SEO対策、レスポンシブ対応、高速表示を標準実装。
            </p>
            <div class="service-features">
              <div class="feature">
                <strong>レスポンシブデザイン</strong>
                <span>あらゆるデバイスで最適な表示</span>
              </div>
              <div class="feature">
                <strong>SEO最適化</strong>
                <span>検索エンジンからの集客を最大化</span>
              </div>
              <div class="feature">
                <strong>高速パフォーマンス</strong>
                <span>SSR/SSG対応で高速な表示速度</span>
              </div>
              <div class="feature">
                <strong>CMS対応</strong>
                <span>コンテンツの更新・管理が容易</span>
              </div>
            </div>
            <div class="service-tech">
              <span>Angular</span>
              <span>Next.js</span>
              <span>WordPress</span>
              <span>TypeScript</span>
            </div>
          </div>
        </div>

        <!-- カスタムシステム開発 -->
        <div class="service-card" id="system">
          <div class="service-icon system-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16,18 22,12 16,6"/>
              <polyline points="8,6 2,12 8,18"/>
              <line x1="14" y1="4" x2="10" y2="20"/>
            </svg>
          </div>
          <div class="service-content">
            <h2>カスタムシステム開発</h2>
            <p class="service-desc">
              業務管理システム、顧客管理（CRM）、在庫管理、AI連携システムなど、
              お客様の業務課題に合わせたオーダーメイドのシステムを開発します。
              要件定義から運用保守まで一貫してサポートします。
            </p>
            <div class="service-features">
              <div class="feature">
                <strong>フルスクラッチ開発</strong>
                <span>ビジネスロジックに完全対応</span>
              </div>
              <div class="feature">
                <strong>AI/ML統合</strong>
                <span>LLM、RAG、データ分析の組み込み</span>
              </div>
              <div class="feature">
                <strong>API設計 / マイクロサービス</strong>
                <span>スケーラブルなアーキテクチャ</span>
              </div>
              <div class="feature">
                <strong>クラウドインフラ構築</strong>
                <span>AWS / GCP / Azure 環境構築</span>
              </div>
            </div>
            <div class="service-tech">
              <span>NestJS</span>
              <span>Python</span>
              <span>PostgreSQL</span>
              <span>Docker</span>
              <span>AWS</span>
            </div>
          </div>
        </div>

        <!-- モバイルアプリ開発 -->
        <div class="service-card" id="mobile">
          <div class="service-icon mobile-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2"/>
              <line x1="12" y1="18" x2="12" y2="18"/>
            </svg>
          </div>
          <div class="service-content">
            <h2>モバイルアプリ開発</h2>
            <p class="service-desc">
              iOS / Android 対応のモバイルアプリを開発します。
              ネイティブ開発とクロスプラットフォーム開発の両方に対応。
              UI/UXデザインからストア公開、運用保守までサポートします。
            </p>
            <div class="service-features">
              <div class="feature">
                <strong>iOS / Android対応</strong>
                <span>両プラットフォームに最適化</span>
              </div>
              <div class="feature">
                <strong>UI/UXデザイン</strong>
                <span>直感的で美しいインターフェース</span>
              </div>
              <div class="feature">
                <strong>プッシュ通知 / オフライン対応</strong>
                <span>エンゲージメントの最大化</span>
              </div>
              <div class="feature">
                <strong>ストア申請・公開</strong>
                <span>App Store / Google Play 公開サポート</span>
              </div>
            </div>
            <div class="service-tech">
              <span>Swift</span>
              <span>Kotlin</span>
              <span>Flutter</span>
              <span>React Native</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- 開発の流れ -->
    <section class="process-section">
      <div class="process-inner">
        <h2>開発の流れ</h2>
        <div class="process-steps">
          <div class="step">
            <div class="step-num">01</div>
            <h3>ヒアリング</h3>
            <p>ご要望・課題をお伺いし、最適なソリューションをご提案します。</p>
          </div>
          <div class="step">
            <div class="step-num">02</div>
            <h3>設計・プランニング</h3>
            <p>要件定義、設計、スケジュール策定を行います。</p>
          </div>
          <div class="step">
            <div class="step-num">03</div>
            <h3>開発・テスト</h3>
            <p>アジャイル開発で品質の高いプロダクトを構築します。</p>
          </div>
          <div class="step">
            <div class="step-num">04</div>
            <h3>納品・運用サポート</h3>
            <p>リリース後も安定した運用をサポートします。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="cta-inner">
        <h2>まずはお気軽にご相談ください</h2>
        <p>ご相談・お見積りは無料です。<br />お客様の課題やご要望をお聞かせください。</p>
        <a routerLink="/contact" class="btn-primary btn-lg">無料相談はこちら</a>
      </div>
    </section>
  `,
  styles: `
    .services-hero {
      background: linear-gradient(135deg, #0f172a, #1e293b);
      padding: 80px 24px 96px;
      text-align: center;
    }

    .hero-inner {
      max-width: 800px;
      margin: 0 auto;
    }

    .hero-badge {
      display: inline-block;
      background: rgba(99, 102, 241, 0.2);
      color: #818cf8;
      font-weight: 600;
      font-size: 0.85rem;
      padding: 6px 16px;
      border-radius: 20px;
      margin-bottom: 24px;
    }

    .services-hero h1 {
      color: white;
      font-size: 2.5rem;
      font-weight: 800;
      line-height: 1.3;
      margin: 0 0 20px;
    }

    .hero-sub {
      color: #94a3b8;
      font-size: 1.1rem;
      line-height: 1.8;
      margin: 0;
    }

    /* Service cards */
    .services-list {
      padding: 80px 24px;
    }

    .services-inner {
      max-width: 1000px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 48px;
    }

    .service-card {
      display: flex;
      gap: 40px;
      padding: 48px;
      background: white;
      border-radius: 20px;
      border: 1px solid #e5e7eb;
      transition: all 0.3s;
    }

    .service-card:hover {
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
    }

    .service-icon {
      flex-shrink: 0;
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 16px;
    }

    .web-icon {
      background: #eef2ff;
      color: #6366f1;
    }

    .system-icon {
      background: #ecfdf5;
      color: #059669;
    }

    .mobile-icon {
      background: #fef3c7;
      color: #d97706;
    }

    .service-content h2 {
      font-size: 1.5rem;
      font-weight: 800;
      color: #111827;
      margin: 0 0 12px;
    }

    .service-desc {
      color: #6b7280;
      font-size: 1rem;
      line-height: 1.8;
      margin: 0 0 24px;
    }

    .service-features {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 24px;
    }

    .feature {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .feature strong {
      font-size: 0.95rem;
      color: #111827;
    }

    .feature span {
      font-size: 0.85rem;
      color: #9ca3af;
    }

    .service-tech {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .service-tech span {
      background: #f3f4f6;
      color: #6b7280;
      padding: 6px 14px;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 500;
    }

    /* Process */
    .process-section {
      padding: 80px 24px;
      background: #f9fafb;
    }

    .process-inner {
      max-width: 1000px;
      margin: 0 auto;
    }

    .process-section h2 {
      text-align: center;
      font-size: 2rem;
      font-weight: 800;
      color: #111827;
      margin: 0 0 48px;
    }

    .process-steps {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }

    .step {
      text-align: center;
      padding: 32px 20px;
      background: white;
      border-radius: 16px;
      border: 1px solid #e5e7eb;
    }

    .step-num {
      font-size: 2rem;
      font-weight: 800;
      color: #6366f1;
      margin-bottom: 12px;
    }

    .step h3 {
      font-size: 1.05rem;
      font-weight: 700;
      color: #111827;
      margin: 0 0 8px;
    }

    .step p {
      color: #6b7280;
      font-size: 0.9rem;
      line-height: 1.6;
      margin: 0;
    }

    /* CTA */
    .cta-section {
      padding: 80px 24px;
      background: linear-gradient(135deg, #4f46e5, #7c3aed);
      text-align: center;
    }

    .cta-inner {
      max-width: 700px;
      margin: 0 auto;
    }

    .cta-section h2 {
      color: white;
      font-size: 2rem;
      font-weight: 800;
      margin: 0 0 16px;
    }

    .cta-section p {
      color: #c7d2fe;
      font-size: 1.05rem;
      line-height: 1.8;
      margin: 0 0 36px;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      padding: 14px 32px;
      background: white;
      color: #4f46e5;
      border-radius: 12px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.2s;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
    }

    .btn-primary:hover {
      background: #f5f3ff;
      transform: translateY(-1px);
    }

    .btn-lg {
      padding: 16px 40px;
      font-size: 1.05rem;
    }

    @media (max-width: 768px) {
      .services-hero h1 {
        font-size: 1.75rem;
      }

      .service-card {
        flex-direction: column;
        gap: 24px;
        padding: 32px 24px;
      }

      .service-features {
        grid-template-columns: 1fr;
      }

      .process-steps {
        grid-template-columns: 1fr 1fr;
      }

      .cta-section h2 {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 480px) {
      .process-steps {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class ServicesComponent {}
