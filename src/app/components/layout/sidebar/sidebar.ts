import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LayoutService } from '../../../service/layout.service';
import { UserProvider } from '../../../service/user-provider/user-provider';

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
}
