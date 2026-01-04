import { Routes } from '@angular/router';
import { Overview } from './components/pages/overview/overview';
import { Profile } from './components/pages/profile/profile';
import { Setting } from './components/pages/setting/setting';
import { Login } from './components/pages/login/login';
import { Register } from './components/pages/register/register';
import { Content } from './components/layout/content/content';
import { News } from './components/pages/news/news';
import { Notes } from './components/pages/notes/notes';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
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
    path: 'dashboard',
    component: Content,
    children: [
      {
        path: 'overview',
        component: Overview,
        canActivate: [authGuard]
      },
      {
        path: 'profile/:id',
        component: Profile,
        canActivate: [authGuard]
      },
      {
        path: 'setting',
        component: Setting,
        canActivate: [authGuard]
      },
      {
        path: 'news',
        component: News,
        canActivate: [authGuard]
      },
      {
        path: 'notes',
        component: Notes,
        canActivate: [authGuard]
      },
      {
        path: 'meeting',
        loadComponent: () => import('./components/pages/meeting/meeting').then(m => m.MeetingComponent),
        canActivate: [authGuard]
      },
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      }
    ]
  },

  {
    path: '**',
    redirectTo: 'login'
  }
];
