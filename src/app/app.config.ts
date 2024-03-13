import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { tokenInterceptor } from 'src/lib/core/interceptors/token.interceptor';
import { OT_ENVIRONMENT } from 'src/lib/core/tokens/environment.token';
import { provideTranslocoModule } from '../lib/core/transloco/provide';
import { environment } from '../lib/environments/environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideTranslocoModule(),
    provideAnimations(),
    provideHttpClient(withInterceptors([tokenInterceptor])),
    importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebaseConfig))),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    { provide: OT_ENVIRONMENT, useValue: environment }
  ]
};
