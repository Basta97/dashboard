import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingProvider {
  dashboardTitle = signal<string>('Dashboard');
  overviewCardLimit = signal<number>(10);
}
