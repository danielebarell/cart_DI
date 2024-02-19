import { Component, LOCALE_ID, inject, signal } from '@angular/core';
import { Product } from '../model/product';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { CartService } from '../core/cart.service';
import { SettingsService } from '../core/settings.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JsonPipe,CurrencyPipe],
  template: `
  <section class="d-flex justify-content-evenly py-5">
  @for (product of state(); track product.id) {
    <article class="card" style="width: 18rem;">
  <img [src]="product.image" class="card-img-top" [alt]="product.name">
  <div class="card-body">
    <h5 class="card-title" [style.color]="settingService.color()">{{product.name}} <span class="d-inline-block float-end">{{product.cost | currency:'EUR':'€'}}</span></h5>
    <p class="card-text">{{product.description}}</p>
    <button class="btn btn-primary float-end" (click)="cartService.addProduct(product)"
    [disabled]="!settingService.enableShop()"
    >Add to Cart
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
      <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"></path>
      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
    </svg>
    </button>
  </div>
  </article>
  }
  </section>
    <section>
      {{cartService.products() | json}}
    </section>
  `,
  styles: ``
})
export default class HomeComponent {
  cartService = inject(CartService);
  settingService = inject(SettingsService);
  state = signal<Product[]>( [
    {
      id: 1,
      name: "T-Shirt",
      image: "assets/images/angular.png",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      cost: 10
    },
    {
      id: 2,
      name: "Bullet",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "assets/images/react.png",
      cost: 5
    },
    {
      id: 3,
      name: "Pic",
      description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: "assets/images/js.png",
      cost: 2
    }
  ])
}
