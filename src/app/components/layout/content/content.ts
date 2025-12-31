import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { RouterOutlet } from '@angular/router';
import { FloatingNotes } from '../../shared/floating-notes/floating-notes';

@Component({
  selector: 'app-content',
  imports: [Header, Sidebar, RouterOutlet, FloatingNotes],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content {
}
