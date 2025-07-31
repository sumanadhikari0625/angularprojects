import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HeaderComponent],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  user = 'User'; // You can update this later
  isLoggedIn: any;

  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn$;
  }

  logout() {
    this.authService.logout();
  }
}
