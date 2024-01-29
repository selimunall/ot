import { Injectable, inject, signal } from '@angular/core';
import { ListResult } from '@angular/fire/storage';
import { ImageApi } from '../services/ot-image.api';

export interface CommonState {
  appStorage: ListResult;
}

const initialState: CommonState = {
  appStorage: {
    items: [],
    prefixes: []
  }
};

@Injectable({ providedIn: 'root' })
export class ImageStateService {
  #state = signal<CommonState>(initialState);
  #api = inject(ImageApi);

  init() {
    this.getPaths('home');
  }

  getPaths(mainPath: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.#api
        .getPaths(mainPath)
        .then((m) => {
          this.#state.update((state) => ({ ...state, appStorage: m }));
        })
        .finally(() => resolve());
    });
  }

  getHomeImage() {}
}
