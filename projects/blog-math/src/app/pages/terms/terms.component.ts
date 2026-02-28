import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TERMS } from '../../data/terms.data';

@Component({
  selector: 'app-terms',
  imports: [FormsModule],
  template: `
    <section class="terms-hero">
      <div class="hero-inner">
        <h1>📖 数学用語辞典</h1>
        <p>小学校〜高校のおもな数学用語をやさしく解説します</p>
        <div class="search-box">
          <input type="text" placeholder="用語を検索…" [ngModel]="searchQuery()" (ngModelChange)="searchQuery.set($event)" />
        </div>
      </div>
    </section>
    <section class="terms-body">
      <div class="container">
        <!-- Category Filter -->
        <div class="category-filter">
          @for (cat of categories; track cat) {
            <button [class.active]="activeCategory() === cat" (click)="activeCategory.set(cat)">{{ cat }}</button>
          }
        </div>

        <div class="terms-list">
          @for (term of filteredTerms(); track term.slug) {
            <div class="term-card" [id]="term.slug">
              <div class="term-header">
                <h3>{{ term.term }}</h3>
                <span class="reading">{{ term.reading }}</span>
                <span class="cat-badge">{{ term.category }}</span>
              </div>
              <p class="definition">{{ term.definition }}</p>
              @if (term.example) {
                <div class="example">
                  <span class="example-label">例：</span>{{ term.example }}
                </div>
              }
            </div>
          }
          @if (filteredTerms().length === 0) {
            <div class="empty">該当する用語が見つかりませんでした。</div>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .terms-hero { background: linear-gradient(135deg, #059669, #10b981); color: white; text-align: center; padding: 60px 20px; }
    .hero-inner { max-width: 600px; margin: 0 auto; }
    .terms-hero h1 { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
    .terms-hero p { opacity: 0.9; margin-bottom: 24px; }
    .search-box input { width: 100%; max-width: 400px; padding: 14px 20px; border: none; border-radius: 12px; font-size: 1rem; font-family: inherit; outline: none; box-shadow: 0 4px 16px rgba(0,0,0,0.15); }
    .terms-body { padding: 40px 20px 80px; }
    .container { max-width: 900px; margin: 0 auto; }
    .category-filter { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px; justify-content: center; }
    .category-filter button { padding: 8px 18px; border: 1.5px solid #d1d5db; border-radius: 20px; background: white; cursor: pointer; font-size: 0.85rem; font-family: inherit; transition: all 0.2s; }
    .category-filter button.active { background: #059669; color: white; border-color: #059669; }
    .terms-list { display: flex; flex-direction: column; gap: 16px; }
    .term-card { background: white; padding: 24px; border-radius: 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); }
    .term-header { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 8px; }
    .term-header h3 { font-size: 1.15rem; font-weight: 700; }
    .reading { font-size: 0.85rem; color: #6b7280; }
    .cat-badge { font-size: 0.75rem; padding: 2px 10px; border-radius: 12px; background: #f0fdf4; color: #059669; font-weight: 600; }
    .definition { font-size: 0.95rem; color: #374151; line-height: 1.7; }
    .example { margin-top: 10px; padding: 10px 16px; background: #f8fafc; border-radius: 8px; font-size: 0.9rem; color: #475569; }
    .example-label { font-weight: 600; color: #059669; }
    .empty { text-align: center; padding: 40px; color: #9ca3af; }
  `,
})
export class TermsComponent {
  searchQuery = signal('');
  activeCategory = signal('すべて');
  categories = ['すべて', ...new Set(TERMS.map(t => t.category))];

  filteredTerms = computed(() => {
    let filtered = TERMS;
    const cat = this.activeCategory();
    if (cat !== 'すべて') {
      filtered = filtered.filter(t => t.category === cat);
    }
    const q = this.searchQuery().trim().toLowerCase();
    if (q) {
      filtered = filtered.filter(t =>
        t.term.toLowerCase().includes(q) ||
        t.reading.includes(q) ||
        t.definition.toLowerCase().includes(q)
      );
    }
    return filtered;
  });
}
