import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'elementary',
    loadComponent: () => import('./pages/stage/stage.component').then(m => m.StageComponent),
    data: { stage: 'elementary' },
  },
  {
    path: 'junior',
    loadComponent: () => import('./pages/stage/stage.component').then(m => m.StageComponent),
    data: { stage: 'junior' },
  },
  {
    path: 'high',
    loadComponent: () => import('./pages/stage/stage.component').then(m => m.StageComponent),
    data: { stage: 'high' },
  },
  {
    path: 'topic/:slug',
    loadComponent: () => import('./pages/topic-detail/topic-detail.component').then(m => m.TopicDetailComponent),
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/terms/terms.component').then(m => m.TermsComponent),
  },
  {
    path: 'mathematicians',
    loadComponent: () => import('./pages/mathematicians/mathematicians.component').then(m => m.MathematiciansComponent),
  },
  {
    path: 'mathematician/:slug',
    loadComponent: () => import('./pages/mathematician-detail/mathematician-detail.component').then(m => m.MathematicianDetailComponent),
  },
  { path: '**', redirectTo: '' },
];
