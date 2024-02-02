import { Injectable, computed, signal } from '@angular/core';

export interface OtLayoutState {
  loading: boolean;
  isOpenSearchModel: boolean;
}

const initalState: OtLayoutState = {
  loading: false,
  isOpenSearchModel: false
};

@Injectable()
export class OtLayoutStateService {
  #state = signal<OtLayoutState>(initalState);

  readonly loading = computed(() => this.#state().loading);
  readonly isOpenSearchModel = computed(() => this.#state().isOpenSearchModel);

  toggleSearchModal() {
    this.#state.update((m) => ({ ...m, isOpenSearchModel: !m.isOpenSearchModel }));
  }
}
