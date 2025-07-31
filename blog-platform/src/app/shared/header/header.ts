import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class HeaderComponent implements OnInit {
  userEmail: string | null = null;

  ngOnInit(): void {
    const user = localStorage.getItem('loggedInUser');
    this.userEmail = user ? JSON.parse(user).email : null;
  }

  logout(): void {
    localStorage.removeItem('loggedInUser');
    location.reload();
  }
}
