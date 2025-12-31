import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NewsProvider } from '../../../service/newsProvider/news-provider';
import { DatePipe } from '@angular/common';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [DatePipe, ReactiveFormsModule],
  templateUrl: './news.html',
  styleUrl: './news.scss',
})
export class News implements OnInit {
  newsProvider = inject(NewsProvider);
  articles = signal<any[]>([]);
  searchControl = new FormControl('');
  isLoading = signal<boolean>(false);

  ngOnInit() {
    this.fetchHeadlines();

    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((searchTerm) => {
      if (searchTerm && searchTerm.trim().length > 0) {
        this.searchNews(searchTerm);
      } else {
        this.fetchHeadlines();
      }
    });
  }

  fetchHeadlines() {
    this.isLoading.set(true);
    this.newsProvider.getNewsByHeadlines().subscribe({
      next: (res) => {
        if (res.status === 'ok') {
          this.articles.set(res.articles);
        }
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error fetching headlines:', err);
        this.isLoading.set(false);
      }
    });
  }

  searchNews(query: string) {
    this.isLoading.set(true);
    this.newsProvider.getNewsBySearch(query).subscribe({
      next: (res) => {
        if (res.status === 'ok') {
          this.articles.set(res.articles);
        }
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error searching news:', err);
        this.isLoading.set(false);
      }
    });
  }
}
