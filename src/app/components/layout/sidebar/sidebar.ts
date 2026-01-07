import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LayoutService } from '../../../service/layout.service';
import { UserProvider } from '../../../service/user-provider/user-provider';
import { Dataprovider } from '../../../service/dataProvider/dataprovider';
import { SettingProvider } from '../../../service/settingProvider/setting-provider';
import { isPlatformBrowser } from '@angular/common';

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
  platformId = inject(PLATFORM_ID);
  userProvider = inject(UserProvider);
  layoutService = inject(LayoutService);
  dataprovider = inject(Dataprovider);
  settingProvider = inject(SettingProvider);
  userId = signal<number | undefined>(undefined);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('user') !== null) {
        this.userId.set(JSON.parse(localStorage.getItem('user')!));
      } else {
        this.userProvider.logout();
      }
    }
  }
}
