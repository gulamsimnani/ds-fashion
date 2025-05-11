import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jeans-categories-list',
  standalone: true,
  templateUrl: './jeans-categories-list.component.html',
  styleUrls: ['./jeans-categories-list.component.scss'],
  imports: [CommonModule]
})
export class JeansCategoriesListComponent implements OnInit {
  categories: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/men-jeans/categories.json').subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.error('Failed to load categories', err);
      }
    });
  }
}
