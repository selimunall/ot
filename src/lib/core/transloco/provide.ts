import { makeEnvironmentProviders } from '@angular/core';
import { getBrowserLang, provideTransloco } from '@ngneat/transloco';
import { TranslocoHttpLoader } from './http-loader';

const langs = [
  { id: 'en', label: 'English' },
  { id: 'tr', label: 'Türkçe' }
];
const defaultLang = langs.find((l) => l.id === getBrowserLang())?.id || 'en';

export const provideTranslocoModule = (availableLangs = langs) =>
  makeEnvironmentProviders([
    provideTransloco({
      config: {
        availableLangs: availableLangs,
        defaultLang: defaultLang,
        missingHandler: {
          logMissingKey: true
        },
        fallbackLang: 'en',
        reRenderOnLangChange: true
      },
      loader: TranslocoHttpLoader
    })
  ]);
