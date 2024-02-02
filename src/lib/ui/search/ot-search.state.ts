import { Injectable, computed, signal } from '@angular/core';

export interface OtSearchState {
  loading: boolean;
}

const initalState: OtSearchState = {
  loading: false
};

@Injectable()
export class OtSearchStateService {
  #state = signal<OtSearchState>(initalState);

  loading = computed(() => this.#state().loading);
}
