import { Routes } from '@angular/router';
import { Overview } from '../../pages/overview/overview';
import { Profile } from '../../pages/profile/profile';
import { Setting } from '../../pages/setting/setting';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: 'overview',
    component: Overview,
  },
  {
    path: 'profile/:id',
    component: Profile,
  },
  {
    path: 'setting',
    component: Setting,
  }
];
