import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { tokenInterceptor } from 'src/lib/core/interceptors/token.interceptor';
import { trefleInterceptor } from 'src/lib/core/interceptors/trefle.interceptor';
import { OT_ENVIRONMENT } from 'src/lib/core/tokens/environment.token';
import { provideTranslocoModule } from '../lib/core/transloco/provide';
import { environment } from '../lib/environments/environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideTranslocoModule(),
    provideHttpClient(withInterceptors([tokenInterceptor, trefleInterceptor])),
    importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebaseConfig))),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    { provide: OT_ENVIRONMENT, useValue: environment }
  ]
};
