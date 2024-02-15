import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslocoModule } from '@ngneat/transloco';
import { Button1Component } from 'src/lib/components/buttons/button-1.component';
import { GetImagePipe } from 'src/lib/core/pipes/get-image.pipe';
import { ImageApi } from 'src/lib/services/ot-image.api';

interface HomeState {
  images: DownloadedImage[];
  slideIndex: number;
}

interface DownloadedImage {
  name: string;
  url: SafeResourceUrl;
}

const initalState: HomeState = {
  images: [],
  slideIndex: 1
};

@Component({
  standalone: true,
  selector: 'ot-home',
  templateUrl: './ot-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoModule, NgClass, Button1Component, GetImagePipe]
})
export class OtHomeComponent {
  #api = inject(ImageApi);
  #sanitizer = inject(DomSanitizer);

  #state = signal<HomeState>(initalState);

  readonly images = computed(() => this.#state().images);
  readonly slideIndex = computed(() => this.#state().slideIndex);

  constructor() {
    console.log('geliyor');
    this.getImages();
  }

  ngOnInit() {
    console.log('geliyor');
  }

  async getImages() {
    console.log('geliyor');

    await this.#api.getPaths('home').then((paths) => {
      paths.items.forEach(async (m) => {
        await this.#api.getImage(m.fullPath).then((image) => {
          this.#state.update((state) => ({
            ...state,
            images: [...state.images, { name: m.name, url: this.#sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(image)) }]
          }));
        });
        console.log(this.images(), 'asd');
      });
    });
  }

  setSlideIndex(index: number) {
    this.#state.update((m) => ({ ...m, slideIndex: index }));
  }
}
