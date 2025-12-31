import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Content } from '../content/content';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet  , Sidebar , Content],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {

}
