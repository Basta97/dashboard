import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LayoutService } from '../../../service/layout.service';
import { UserProvider } from '../../../service/user-provider/user-provider';
import { Dataprovider } from '../../../service/dataProvider/dataprovider';
import { SettingProvider } from '../../../service/settingProvider/setting-provider';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  host: {
    '[class.open]': 'layoutService.isSidebarOpen()'
  }
})
export class Sidebar {
  userProvider = inject(UserProvider);
  layoutService = inject(LayoutService);
  dataprovider = inject(Dataprovider);
  settingProvider = inject(SettingProvider);
  userId = signal<number | undefined>(undefined);

  ngOnInit() {
    if (localStorage.getItem('user') !== null) {
      this.userId.set(JSON.parse(localStorage.getItem('user')!));
    } else {
      this.userProvider.logout();
    }
  }
}
