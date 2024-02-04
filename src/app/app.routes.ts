import { Routes } from '@angular/router';
import { OtForumComponent } from 'src/lib/pages/forum/ot-forum.component';
import { OtHomeComponent } from '../lib/pages/home/ot-home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: OtHomeComponent
  },
  {
    path: 'forum',
    component: OtForumComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
