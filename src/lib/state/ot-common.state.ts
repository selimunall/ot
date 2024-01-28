import { Injectable, inject, signal } from '@angular/core';
import { ListResult } from '@angular/fire/storage';
import { ImageService } from '../services/image.api';

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
export class CommonStateService {
  #state = signal<CommonState>(initialState);
  #api = inject(ImageService);

  init() {
    return new Promise<void>((resolve, reject) => {
      this.#api.getStorage().then((m) => {
        this.#state.update((state) => ({ ...state, appStorage: m }));
        console.log(m);
        resolve();
      });
    });
  }
}
