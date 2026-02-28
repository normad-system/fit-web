import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GRADES } from '../../data/grades.data';
import { TOPICS } from '../../data/topics.data';
import { SchoolStage } from '../../models/math.model';

@Component({
  selector: 'app-stage',
  imports: [RouterLink],
  template: `
    <section class="stage-hero" [style.background]="heroBg()">
      <div class="hero-inner">
        <h1>{{ stageTitle() }}</h1>
        <p>{{ stageDescription() }}</p>
      </div>
    </section>
    <section class="stage-body">
      <div class="container">
        @for (grade of stageGrades(); track grade.key) {
          <div class="grade-section">
            <h2 class="grade-title">
              <span class="grade-icon">{{ grade.icon }}</span>
              {{ grade.label }}
            </h2>
            <div class="topic-list">
              @for (topic of getTopics(grade.key); track topic.slug) {
                <a [routerLink]="['/topic', topic.slug]" class="topic-card" [style.border-left-color]="grade.color">
                  <h3>{{ topic.title }}</h3>
                  <p>{{ topic.summary }}</p>
                </a>
              }
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: `
    .stage-hero { color: white; text-align: center; padding: 60px 20px; }
    .hero-inner { max-width: 800px; margin: 0 auto; }
    .stage-hero h1 { font-size: 2rem; font-weight: 800; margin-bottom: 12px; }
    .stage-hero p { font-size: 1rem; opacity: 0.9; }
    .stage-body { padding: 48px 20px 80px; }
    .container { max-width: 900px; margin: 0 auto; }
    .grade-section { margin-bottom: 48px; }
    .grade-title { display: flex; align-items: center; gap: 10px; font-size: 1.3rem; font-weight: 700; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #e5e7eb; }
    .grade-icon { font-size: 1.5rem; }
    .topic-list { display: flex; flex-direction: column; gap: 12px; }
    .topic-card { display: block; padding: 20px 24px; background: white; border-radius: 12px; border-left: 4px solid; text-decoration: none; color: #1e293b; box-shadow: 0 1px 3px rgba(0,0,0,0.06); transition: transform 0.2s, box-shadow 0.2s; }
    .topic-card:hover { transform: translateX(4px); box-shadow: 0 4px 16px rgba(0,0,0,0.1); text-decoration: none; }
    .topic-card h3 { font-size: 1.05rem; font-weight: 700; margin-bottom: 4px; }
    .topic-card p { font-size: 0.85rem; color: #64748b; }
  `,
})
export class StageComponent {
  stage = input.required<SchoolStage>();

  private grades = GRADES;
  private topics = TOPICS;

  stageGrades = computed(() => this.grades.filter(g => g.stage === this.stage()));

  heroBg = computed(() => {
    const s = this.stage();
    if (s === 'elementary') return 'linear-gradient(135deg, #ef4444, #f97316)';
    if (s === 'junior') return 'linear-gradient(135deg, #3b82f6, #6366f1)';
    return 'linear-gradient(135deg, #8b5cf6, #ec4899)';
  });

  stageTitle = computed(() => {
    const s = this.stage();
    if (s === 'elementary') return '🌸 小学校の算数';
    if (s === 'junior') return '📘 中学校の数学';
    return '🎓 高校の数学';
  });

  stageDescription = computed(() => {
    const s = this.stage();
    if (s === 'elementary') return '1年生のかずのかぞえ方から、6年生の比例・反比例まで、楽しく学びましょう！';
    if (s === 'junior') return '正負の数から三平方の定理まで、中学数学の全範囲をカバーします。';
    return '数学Ⅰ・A から数学Ⅲ・C まで、大学受験に向けた高校数学を丁寧に解説します。';
  });

  getTopics(gradeKey: string) {
    return this.topics.filter(t => t.grade === gradeKey).sort((a, b) => a.order - b.order);
  }
}
