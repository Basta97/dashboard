import { RenderMode, ServerRoute } from '@angular/ssr';


export const serverRoutes: ServerRoute[] = [
  {
    path: 'login',
    renderMode: RenderMode.Client,
  },
  {
    path: 'register',
    renderMode: RenderMode.Client
  },
  {
    path: 'dashboard',
    renderMode: RenderMode.Server,
  },
  {
    path: 'dashboard/overview',
    renderMode: RenderMode.Server
  },
  {
    path: 'dashboard/profile/:id',

    renderMode: RenderMode.Server
  },
  {
    path: 'dashboard/setting',
    renderMode: RenderMode.Server
  },
  {
    path: 'dashboard/news',
    renderMode: RenderMode.Server
  },
  {
    path: 'dashboard/notes',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
