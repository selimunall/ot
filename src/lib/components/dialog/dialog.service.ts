import { Dialog } from '@angular/cdk/dialog';
import { Injectable, Type, inject } from '@angular/core';
import { DialogComponent } from './dialog.component';

@Injectable({ providedIn: 'root' })
export class DialogService {
  readonly #dialog = inject(Dialog);

  open<T>(component: Type<T>, title: string, width?: string, height?: string): void {
    const dialog = this.#dialog.open(DialogComponent, {
      width: width,
      height: height,
      backdropClass: ['backdrop-blur-sm', 'bg-black/30'],
      data: {
        component,
        title
      }
    });
  }
}
