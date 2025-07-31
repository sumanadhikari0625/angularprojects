import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { LoginComponent } from './pages/login.component';
import { TodoComponent } from './pages/todo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // 👈 This makes "/" go to Home
  { path: 'login', component: LoginComponent },
  { path: 'todos', component: TodoComponent },
  { path: '**', redirectTo: '' }, // 👈 Wildcard route (optional fallback to Home)
];
