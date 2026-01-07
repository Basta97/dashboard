import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-component-ex',
  imports: [],
  templateUrl: './component-ex.html',
  styleUrl: './component-ex.scss',
})
export class ComponentEx {
  data = input<string>();
  sendtoparent = output<string>();

  send() {
    this.sendtoparent.emit("helllllllllllllllo parent")
  }
}
