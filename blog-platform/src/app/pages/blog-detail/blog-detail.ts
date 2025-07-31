import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-detail.html',
  styleUrls: ['./blog-detail.css'],
})
export class BlogDetailComponent {
  blog: any;

  posts = [
    {
      id: 1,
      title: 'Angular Magic',
      author: 'Suman',
      content: 'This is the full blog content...',
      summary: 'Quick intro to Angular magic.',
    },
    {
      id: 2,
      title: 'RxJS Tricks',
      author: 'Suman',
      content: 'Advanced operators explained...',
      summary: 'Get deeper with RxJS.',
    },
    {
      id: 3,
      title: ' Styling Angular Apps with CSS',
      author: 'Suman',
      content:
        'Learn how to use component-level CSS and global styles in Angular...',
      summary: 'How to write scoped and global styles in Angular apps.',
    },
  ];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blog = this.posts.find((p) => p.id === id);
  }
}
