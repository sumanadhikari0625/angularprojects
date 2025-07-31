import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../core/services/cart.service';
import { Observable } from 'rxjs';
import { Product } from '../core/models/product.model';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {
  cartService = inject(CartService);
  cartItems$: Observable<Product[]> = this.cartService.cart$;

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }

  getTotal(items: Product[]): number {
    return items.reduce((total, item) => total + item.price, 0);
  }
}
