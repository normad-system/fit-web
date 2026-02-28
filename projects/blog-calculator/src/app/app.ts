import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header />
    <main><router-outlet /></main>
    <app-footer />
  `,
  styles: `main { min-height: calc(100vh - 160px); }`
})
export class App {}
