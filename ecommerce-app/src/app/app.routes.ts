import { Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list';
import { ProductDetailComponent } from './products/product-detail/product-detail';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./products/product-detail/product-detail').then(
        (m) => m.ProductDetailComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./cart/cart-page.component').then((m) => m.CartPageComponent),
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('./orders/orders-page.component').then(
        (m) => m.OrdersPageComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./auth/signup/signup.component').then((m) => m.SignupComponent),
  },
];
