import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: 'topic/:slug', renderMode: RenderMode.Server },
  { path: 'mathematician/:slug', renderMode: RenderMode.Server },
  { path: '**', renderMode: RenderMode.Prerender },
];
