import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [NgFor, NgIf, FormsModule, DatePipe],
})
export class TodoComponent implements OnInit {
  newTodo = '';
  newDueDate = '';
  todos: { text: string; done: boolean; dueDate?: string }[] = [];
  isBrowser = false;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        this.todos = JSON.parse(storedTodos);
      }
    }
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      const email = localStorage.getItem('email');
      if (!email) {
        this.router.navigate(['/']);
      }
    }
  }

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({
        text: this.newTodo,
        done: false,
        dueDate: this.newDueDate || '',
      });
      this.newTodo = '';
      this.newDueDate = '';
      this.saveTodos();
    }
  }

  toggleDone(index: number) {
    this.todos[index].done = !this.todos[index].done;
    this.saveTodos();
  }

  editTodo(index: number) {
    const updatedText = prompt('Edit your todo:', this.todos[index].text);
    if (updatedText !== null) {
      this.todos[index].text = updatedText;
      this.saveTodos();
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.saveTodos();
  }

  saveTodos() {
    if (this.isBrowser) {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  logout() {
    if (this.isBrowser) {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('email');
    }
    this.router.navigate(['/login']);
  }
}
