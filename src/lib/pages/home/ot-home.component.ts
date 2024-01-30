import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslocoModule } from '@ngneat/transloco';
import { ImageApi } from 'src/lib/services/ot-image.api';

export interface HomeState {
  images: any[];
}

const initalState: HomeState = {
  images: []
};

@Component({
  standalone: true,
  selector: 'ot-home',
  templateUrl: './ot-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoModule]
})
export class OtHomeComponent {
  #api = inject(ImageApi);
  #sanitizer = inject(DomSanitizer);
  #state = signal<HomeState>(initalState);

  readonly data = computed(() => this.#state().images);

  constructor() {
    this.getImages();
  }

  async getImages() {
    await this.#api.getPaths('home').then((paths) => {
      paths.items.forEach(async (m) => {
        const asd = m.name;
        await this.#api.getImage(m.fullPath).then((image) => {
          this.#state.update((state) => ({ ...state, images: [...state.images, { name: asd, url: this.#sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(image)) }] }));
        });
      });
    });
  }
}
