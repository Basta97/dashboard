import { Component, inject } from '@angular/core';
import { Card } from '../../card/card';
import { Dataprovider } from '../../../service/dataProvider/dataprovider';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [Card],
  templateUrl: './overview.html',
  styleUrl: './overview.scss',
})
export class Overview {
  private dataProvider = inject(Dataprovider);
  viewrs = this.dataProvider.getviewrs();
}
