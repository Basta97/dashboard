import { Component, computed, inject } from '@angular/core';
import { Card } from '../../card/card';
import { Dataprovider } from '../../../service/dataProvider/dataprovider';
import { SettingProvider } from '../../../service/settingProvider/setting-provider';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [Card],
  templateUrl: './overview.html',
  styleUrl: './overview.scss',
})
export class Overview {
  private dataProvider = inject(Dataprovider);
  private settingProvider = inject(SettingProvider);

  viewrs = computed(() => {
    return this.dataProvider.getviewrs()().slice(0, this.settingProvider.overviewCardLimit());
  });
}
