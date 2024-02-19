import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from './cart.service';
import { CurrencyPipe, NgClass } from '@angular/common';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, NgClass, CurrencyPipe],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" routerLink="home" [style.color]="settingService.color()">{{settingService.title()}}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" routerLink="settings">Settings</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="cart">Check Cart</a>
        </li>
        <li class="nav-item">
          <button class="btn btn-danger" (click)="cartService.clearProducts()">Clear Cart</button>
        </li>
      </ul>
      <div class="d-inline-block ms-4 badge bg-primary text-wrap" [ngClass]="{'bg-secondary':cartService.isEmpty()}">Items Added: 
        <span class="fw-bolder">{{cartService.totalProducts()}}</span>
    </div>
    <div class="d-inline-block ms-2 badge bg-primary text-wrap" [ngClass]="{'bg-secondary':cartService.isEmpty()}">Subtotal: 
        <span class="fw-bolder">{{cartService.totalCost() | currency:'EUR':'€'}}</span>
    </div>
    </div>
  </div>
</nav>
{{render()}}
  `,
  styles: ``
})
export class NavbarComponent {
cartService = inject(CartService);
settingService = inject(SettingsService);
render(){console.log('render navbar')}
}
