import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this._isLoggedIn.asObservable();

  constructor() {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('token', 'dummy-token');
      localStorage.setItem('username', username);
      this._isLoggedIn.next(true);
      return true;
    }
    return false;
  }

  signup(username: string, password: string): boolean {
    if (username && password) {
      localStorage.setItem('token', 'dummy-token');
      localStorage.setItem('username', username);
      this._isLoggedIn.next(true);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this._isLoggedIn.next(false);
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
