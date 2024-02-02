import { Routes } from '@angular/router';
import { OtHomeComponent } from '../lib/pages/home/ot-home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: OtHomeComponent
  },
  {
    path: 'forum',
    component: OtHomeComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
