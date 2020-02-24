import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class CartService {
  items = [];

  constructor() { }
// The addToCart() method appends a product to an array of items.
  addToCart(product) {
    this.items.push(product);
  }

// The getItems() method collects the items users add to the cart and returns each item with its associated quantity.
  getItems() {
    return this.items;  
  }

// The clearCart() method returns an empty array of items.
  clearCart() {
    this.items = [];
    return this.items;
  }

}