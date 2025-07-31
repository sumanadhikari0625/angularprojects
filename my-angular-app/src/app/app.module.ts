import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// ✅ Import the components directly (they are standalone)
import { AppComponent } from './app';
import { LoginComponent } from './pages/login.component';
import { TodoComponent } from './pages/todo.component';

@NgModule({
  // ❌ No need to declare standalone components
  declarations: [],

  // ✅ Import the standalone components
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppComponent,
    LoginComponent,
    TodoComponent,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'todos', component: TodoComponent },
    ]),
  ],

  // ✅ Bootstrap standalone root component
  bootstrap: [AppComponent],
})
export class AppModule {}
