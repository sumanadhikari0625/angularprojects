import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail';
import { PostForm } from './pages/post-form/post-form';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: RegisterComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: 'create', component: PostForm },
];
