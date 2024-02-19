import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public products = signal<Product[]>([]);
  public totalProducts = computed(()=>this.products().length);
  public totalCost = computed(()=>this.products().reduce((acc,p)=>p.cost + acc,0));
  public isEmpty = computed(()=>this.products().length === 0);
  public addProduct(newProduct:Product){
    if(!this.products().find(p=>p.id === newProduct.id)){
      this.products.update((list)=>{
        return [...list, newProduct]
      })
    }else{
      console.warn(`il prodotto id=${newProduct.id} è già stato aggiunto`);
    }
    
  }
  public removeProduct(id:number){
    this.products.update(list=>list.filter(p=>p.id !== id))
  }
  public clearProducts(){
    this.products.set([]);
  }
  
}
