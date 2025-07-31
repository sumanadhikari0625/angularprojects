import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Post {
  id: number;
  title: string;
  content: string;
  summary?: string;
  author: string;
  date: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  posts: Post[] = [];

  constructor() {
    const defaultPosts: Post[] = [
      {
        id: 1,
        title: ' Getting Started with Angular',
        content:
          'Angular is a TypeScript-based open-source web app framework by Google...',
        author: 'Suman',
        date: 'July 10, 2025',
      },
      {
        id: 2,
        title: ' Angular Standalone Components',
        content:
          'With Angular 14+, you can use standalone components for better modularity...',
        author: 'Suman',
        date: 'July 9, 2025',
      },
      {
        id: 3,
        title: ' Styling Angular Apps with CSS',
        content:
          'Learn how to use component-level CSS and global styles in Angular...',
        author: 'Suman',
        date: 'July 8, 2025',
      },
    ];

    const savedPosts: Post[] = JSON.parse(
      localStorage.getItem('posts') || '[]'
    );

    const mergedPosts = [
      ...defaultPosts,
      ...savedPosts.filter(
        (post) =>
          !defaultPosts.some((defaultPost) => defaultPost.id === post.id)
      ),
    ];

    this.posts = mergedPosts;

    localStorage.setItem('posts', JSON.stringify(mergedPosts));
  }

  deletePost(postId: number) {
    this.posts = this.posts.filter((post) => post.id !== postId);
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }
}
