import { Component, Input } from '@angular/core';
import { Viewr } from '../../model/viewrs';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input({ required: true }) viewr!: Viewr;
}
