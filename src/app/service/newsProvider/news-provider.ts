import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsProvider {
  protected http = inject(HttpClient);

  dummyArticles = [
    {
      source: { id: 'the-verge', name: 'The Verge' },
      author: 'Nilay Patel',
      title: 'The future of AI in 2025',
      description: 'Artificial Intelligence continues to evolve at a rapid pace, transforming industries and daily life.',
      url: 'https://www.theverge.com',
      urlToImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
      publishedAt: '2025-01-01T10:00:00Z',
      content: 'AI regulations are coming...'
    },
    {
      source: { id: 'techcrunch', name: 'TechCrunch' },
      author: 'Sarah Perez',
      title: 'New comprehensive dashboard for developers released',
      description: 'A new Angular-based dashboard template promises to speed up development time significantly.',
      url: 'https://techcrunch.com',
      urlToImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      publishedAt: '2025-01-02T14:30:00Z',
      content: 'Developers are rejoicing...'
    },
    {
      source: { id: 'bbc-news', name: 'BBC News' },
      author: 'BBC',
      title: 'Global markets rally as tech stocks soar',
      description: 'Major indices hit all-time highs driven by breakthroughs in quantum computing.',
      url: 'https://www.bbc.com',
      urlToImage: 'https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=1000',
      publishedAt: '2025-01-03T09:15:00Z',
      content: 'Wall Street opened higher...'
    },
    {
      source: { id: 'cnn', name: 'CNN' },
      author: 'Anderson Cooper',
      title: 'Sustainable energy milestones reached',
      description: 'Renewable energy sources now power 50% of the global grid.',
      url: 'https://www.cnn.com',
      urlToImage: 'https://images.unsplash.com/photo-1473341304170-5799ed41387e?auto=format&fit=crop&q=80&w=1000',
      publishedAt: '2025-01-04T11:45:00Z',
      content: 'Solar and wind farms...'
    },
    {
      source: { id: 'wired', name: 'Wired' },
      author: 'Steven Levy',
      title: 'The rise of smart cities',
      description: 'How IoT is making urban living more efficient and sustainable.',
      url: 'https://www.wired.com',
      urlToImage: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=1000',
      publishedAt: '2025-01-05T16:20:00Z',
      content: 'Traffic lights talking to cars...'
    }
  ];

  getAllNews(): Observable<any> {
    return of({ status: 'ok', articles: this.dummyArticles });
  }

  getNewsBySearch(search: string): Observable<any> {
    const lowerSearch = search.toLowerCase();
    const filtered = this.dummyArticles.filter(article =>
      article.title.toLowerCase().includes(lowerSearch) ||
      article.description.toLowerCase().includes(lowerSearch)
    );
    return of({ status: 'ok', articles: filtered });
  }

  getNewsByHeadlines(): Observable<any> {
    return of({ status: 'ok', articles: this.dummyArticles });
  }

}
