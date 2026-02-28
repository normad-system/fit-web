import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TOPICS } from '../../data/topics.data';
import { GRADES } from '../../data/grades.data';

@Component({
  selector: 'app-topic-detail',
  imports: [RouterLink],
  template: `
    @if (topic()) {
      <article class="topic-page">
        <div class="topic-header" [style.background]="gradeBg()">
          <div class="header-inner">
            <a [routerLink]="stagePath()" class="back">← {{ gradeInfo()?.label }}</a>
            <span class="grade-badge">{{ gradeInfo()?.icon }} {{ gradeInfo()?.label }}</span>
            <h1>{{ topic()!.title }}</h1>
            <p class="summary">{{ topic()!.summary }}</p>
          </div>
        </div>
        <div class="topic-content">
          <div class="content-inner" [innerHTML]="topic()!.content"></div>
          <div class="nav-box">
            @if (prevTopic()) {
              <a [routerLink]="['/topic', prevTopic()!.slug]" class="nav-link prev">
                <span class="nav-dir">← 前の単元</span>
                <span class="nav-title">{{ prevTopic()!.title }}</span>
              </a>
            }
            @if (nextTopic()) {
              <a [routerLink]="['/topic', nextTopic()!.slug]" class="nav-link next">
                <span class="nav-dir">次の単元 →</span>
                <span class="nav-title">{{ nextTopic()!.title }}</span>
              </a>
            }
          </div>
        </div>
      </article>
    }
  `,
  styles: `
    .topic-header { color: white; padding: 48px 20px; }
    .header-inner { max-width: 800px; margin: 0 auto; }
    .back { color: rgba(255,255,255,0.8); font-size: 0.9rem; text-decoration: none; display: inline-block; margin-bottom: 16px; }
    .back:hover { color: white; }
    .grade-badge { display: inline-block; background: rgba(255,255,255,0.2); padding: 4px 14px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; margin-bottom: 12px; }
    .topic-header h1 { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
    .summary { font-size: 1rem; opacity: 0.9; }
    .topic-content { max-width: 800px; margin: 0 auto; padding: 48px 20px 80px; }
    .content-inner { font-size: 1.05rem; line-height: 2; color: #334155; }
    .nav-box { display: flex; gap: 16px; margin-top: 48px; flex-wrap: wrap; }
    .nav-link { flex: 1; min-width: 200px; padding: 20px; border-radius: 12px; text-decoration: none; color: #1e293b; background: #f8fafc; border: 1px solid #e5e7eb; transition: all 0.2s; }
    .nav-link:hover { border-color: #6366f1; background: #eef2ff; text-decoration: none; }
    .nav-link.next { text-align: right; }
    .nav-dir { display: block; font-size: 0.8rem; color: #6366f1; font-weight: 600; margin-bottom: 4px; }
    .nav-title { font-weight: 700; font-size: 0.95rem; }
  `,
})
export class TopicDetailComponent {
  slug = input.required<string>();

  private topics = TOPICS;
  private grades = GRADES;

  topic = computed(() => this.topics.find(t => t.slug === this.slug()));

  gradeInfo = computed(() => {
    const t = this.topic();
    return t ? this.grades.find(g => g.key === t.grade) : null;
  });

  gradeBg = computed(() => {
    const g = this.gradeInfo();
    if (!g) return '#6366f1';
    const c = g.color;
    return `linear-gradient(135deg, ${c}, ${c}cc)`;
  });

  stagePath = computed(() => {
    const g = this.gradeInfo();
    if (!g) return '/';
    return `/${g.stage}`;
  });

  prevTopic = computed(() => {
    const t = this.topic();
    if (!t) return null;
    const sameGrade = this.topics.filter(x => x.grade === t.grade).sort((a, b) => a.order - b.order);
    const idx = sameGrade.findIndex(x => x.slug === t.slug);
    return idx > 0 ? sameGrade[idx - 1] : null;
  });

  nextTopic = computed(() => {
    const t = this.topic();
    if (!t) return null;
    const sameGrade = this.topics.filter(x => x.grade === t.grade).sort((a, b) => a.order - b.order);
    const idx = sameGrade.findIndex(x => x.slug === t.slug);
    return idx < sameGrade.length - 1 ? sameGrade[idx + 1] : null;
  });
}
