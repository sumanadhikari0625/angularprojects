import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css'],
})
export class OrdersPageComponent {
  // Simulated past orders
  orders = [
    { id: 1, total: 299.99, date: '2024-06-15' },
    { id: 2, total: 159.5, date: '2024-07-01' },
  ];
}
