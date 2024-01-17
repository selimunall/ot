import { Dialog } from '@angular/cdk/dialog';
import { Injectable, Type, inject } from '@angular/core';
import { DialogComponent } from './dialog.component';
@Injectable()
export class DialogService {
  #dialog = inject(Dialog);

  open<T>(component: Type<T>, title?: string, width?: string, height?: string) {
    this.#dialog.open(DialogComponent, {
      width: width,
      height: height,
      backdropClass: ['backdrop-blur-sm', 'bg-black/30'],
      data: {
        title,
        component
      }
    });
  }
}
