import { Component } from '@angular/core';
import { Header } from '../header/header';

@Component({
  selector: 'app-content',
  imports: [Header],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content {
}
