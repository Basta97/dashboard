import { computed, DestroyRef, inject, Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { Viewr } from '../../model/viewrs';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class Dataprovider {
  viewrs = signal<Viewr[]>([]);
  date = signal<string>('');
  readonly currentTime: WritableSignal<Date> = signal(new Date());

  readonly formattedTime = computed(() => {
    return this.currentTime().toLocaleTimeString();
  });

  private readonly destroyRef = inject(DestroyRef);



  constructor() {
    this.viewrs.set([
      { id: 1, website: 'myPortofilio', count: 1000, date: '2025-12-01', time: '05:00:00' },
      { id: 2, website: 'saabeel', count: 2000, date: '2025-12-02', time: '06:00:00' },
      { id: 3, website: 'blog', count: 3000, date: '2025-12-03', time: '07:00:00' },
      { id: 4, website: 'ecommerce', count: 1500, date: '2025-12-04', time: '08:00:00' },
      { id: 5, website: 'landing-page', count: 500, date: '2025-12-05', time: '09:30:00' },
      { id: 6, website: 'dashboard', count: 4200, date: '2025-12-06', time: '11:15:00' },
      { id: 7, website: 'portfolio-v2', count: 1200, date: '2025-12-07', time: '14:45:00' },
      { id: 8, website: 'social-app', count: 8000, date: '2025-12-08', time: '16:20:00' },

    ]);
    this.date.set(new Date().toISOString());
    interval(1000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.currentTime.set(new Date());
      });
  }

  getviewrs(): Signal<Viewr[]> {
    return this.viewrs;
  }




}
