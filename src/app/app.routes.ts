import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { OtForumComponent } from 'src/lib/pages/forum/ot-forum.component';
import { OtPlantsComponent } from 'src/lib/pages/plants/ot-plants.component';
import { PlantApi } from 'src/lib/services/ot-plant.api';
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
    path: 'plants',
    component: OtPlantsComponent,
    resolve: {
      data: () => {
        const api = inject(PlantApi);
        return api.get();
      }
    }
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
