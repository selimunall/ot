import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideTranslocoModule } from '../lib/core/transloco/provide';
import { environment } from '../lib/environments/environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideTranslocoModule(),
    importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebaseConfig))),
    importProvidersFrom(provideFirestore(() => getFirestore()))
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initialize,
    //   multi: true,
    //   deps: [StorageStateService]
    // }
  ]
};
