import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [Header, Sidebar, RouterOutlet],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content {
}
