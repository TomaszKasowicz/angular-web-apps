import { Route } from '@angular/router';
import { HomeComponent } from './components/home.component';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home.component').then((m) => m.HomeComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
