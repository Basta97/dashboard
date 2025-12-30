import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/layout/header/header';
import { Sidebar } from './components/layout/sidebar/sidebar';
import { Content } from './components/layout/content/content';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,Header , Sidebar , Content],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dashboard');
}
