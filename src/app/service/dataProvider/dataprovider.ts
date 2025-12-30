import { Injectable, signal, Signal } from '@angular/core';
import { Viewr } from '../../model/viewrs';

@Injectable({
  providedIn: 'root',
})
export class Dataprovider {
  viewrs = signal<Viewr[]>([]);


  constructor() {
    this.viewrs.set([
      { id: 1, website: 'myPortofilio', count: 1000, date: '2025-12-01', time: '05:00:00' },
      { id: 2, website: 'saabeel', count: 2000, date: '2025-12-02', time: '06:00:00' },
      { id: 3, website: 'blog', count: 3000, date: '2025-12-03', time: '07:00:00' },

    ]);
  }

  getviewrs(): Signal<Viewr[]> {
    return this.viewrs;
  }




}
