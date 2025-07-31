import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, AsyncPipe } from '@angular/common';
import { ProductService } from '../../core/services/product.service';
import { Observable } from 'rxjs';
import { CartService } from '../../core/services/cart.service'; // same idea: two levels up
import { map } from 'rxjs/operators';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css'],
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  productId = this.route.snapshot.paramMap.get('id')!;
  product$ = this.productService.getProductById(
    this.productId
  ) as unknown as Observable<Product>;

  cartService = inject(CartService);

  addToCart(product: Product) {
    console.log('Adding to cart:', product); // for debug
    this.cartService.addToCart(product);
  }
}
