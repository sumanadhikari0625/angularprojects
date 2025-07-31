import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-form.html',
  styleUrls: ['./post-form.css'],
})
export class PostForm {
  title = '';
  summary = '';
  content = '';

  constructor(private router: Router) {}

  submit() {
    const newPost = {
      id: Date.now(),
      title: this.title,
      summary: this.summary,
      content: this.content,
      author: 'Suman',
      date: new Date().toLocaleDateString(),
    };

    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.unshift(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));
    this.router.navigate(['/']);
  }
}
