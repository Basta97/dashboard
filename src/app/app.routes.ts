import { Routes } from '@angular/router';
import { Overview } from './components/pages/overview/overview';
import { Profile } from './components/pages/profile/profile';
import { Setting } from './components/pages/setting/setting';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  // {
  //   path:'login',
  //   component: Login,
  // },
  // {
  //   path:'register',
  //   component: Register,
  // },
  {
    path: 'overview',
    component: Overview,
    // canActivate: [authGuard]
  },
  {
    path: 'profile/:id',
    component: Profile,
    // canActivate: [authGuard]
  },
  {
    path: 'setting',
    component: Setting,
    // canActivate: [authGuard]

  }

];
