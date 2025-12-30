import { Routes } from '@angular/router';
import { Overview } from './components/pages/overview/overview';
import { Profile } from './components/pages/profile/profile';
import { Setting } from './components/pages/setting/setting';
import { Login } from './components/pages/login/login';
import { Register } from './components/pages/register/register';
import { Content } from './components/layout/content/content';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Content,
    children: [
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
      },
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
