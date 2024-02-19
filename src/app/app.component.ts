import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  template: `
  <main class="container-sm">
    <section>
      <app-navbar></app-navbar>
    </section>
    <router-outlet></router-outlet>
  <main>
  `,
  styles: [],
})
export class AppComponent {}
