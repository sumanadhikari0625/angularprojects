import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);

  cart$ = this.cartSubject.asObservable();

  addToCart(product: Product) {
    this.cartItems.push(product);
    this.cartSubject.next([...this.cartItems]);
    console.log('Cart updated:', this.cartItems);
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    this.cartSubject.next([...this.cartItems]);
    console.log('Item removed, updated cart:', this.cartItems);
  }

  getCartItems() {
    return this.cartItems;
  }
}
