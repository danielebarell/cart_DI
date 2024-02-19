import { Component, inject } from '@angular/core';
import { CartService } from '../core/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
  <section class="mt-3 ">
  @if(cartService.isEmpty()){
    <p class="text-center">
    Non ci sono prodotti nel carrello!
    </p>
  }@else {
    
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Prezzo</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  @for (product of cartService.products(); track product.id; let i=$index) {  
    <tr class="align-middle">
      <th scope="row">{{i+1}}</th>
      <td>{{product.name}}</td>
      <td>{{product.cost | currency:'EUR':'€'}}</td>
      <td><button class="btn btn-danger" (click)="cartService.removeProduct(product.id)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-x" viewBox="0 0 16 16">
  <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg></button></td>
    </tr>
  }
  </tbody>
</table>
<div class="text-end fs-4">
  Totale: <span class="fw-bolder">{{cartService.totalCost() | currency:'EUR':'€'}}</span>
</div>
}
  </section>`,
  styles: ``
})
export default class CartComponent {
  cartService = inject(CartService);

}
