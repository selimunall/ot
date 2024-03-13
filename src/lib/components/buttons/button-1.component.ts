import { NgClass, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  standalone: true,
  selector: 'ot-button-1',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoModule, NgTemplateOutlet, RouterLink, NgClass],
  template: `
    <div class="p-2">
      @if (!!buttonOptions().link) {
      <a
        [routerLink]="buttonOptions().link"
        [ngClass]="buttonOptions().specialClass"
        class="items-center gap-2 relative inline-flex justify-center px-4 py-2 overflow-hidden font-medium rounded-lg group bg-white">
        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white/15 bg-opacity-30 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <ng-container *ngTemplateOutlet="button1"></ng-container>
      </a>
      } @else {
      <button
        [ngClass]="{ 'px-4 py-2': buttonOptions().hasPadding }"
        (click)="clicked.emit($event)"
        class="items-center gap-2 relative inline-flex justify-center px-4 py-2 overflow-hidden font-medium rounded-lg group bg-white">
        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-slate-300 bg-opacity-30 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <ng-container *ngTemplateOutlet="button1"></ng-container>
      </button>
      }
    </div>

    <ng-template #button1>
      @if(!!buttonOptions().icon) {
      <i [class]="buttonOptions().icon"></i>
      } @if (!!buttonOptions().title) {
      <span [ngClass]="{ 'text-base': buttonOptions().size === 'base', 'text-xs': buttonOptions().size === 'small', 'text-xl': buttonOptions().size === 'large' }">
        {{ buttonOptions().title }}
      </span>
      }
    </ng-template>
  `
})
export class Button1Component {
  readonly #defaultButtonOptions = {
    hasPadding: true,
    size: 'base'
  } as Button1Options;

  buttonOptions = input<Button1Options, Button1Options>(this.#defaultButtonOptions, {
    transform: (value) => ({ ...this.#defaultButtonOptions, ...value })
  });

  @Output() clicked = new EventEmitter<any>();
}

interface Button1Options {
  title?: string;
  hasPadding?: boolean;
  icon?: string;
  specialClass?: string;
  link?: any[];
  size?: 'small' | 'base' | 'large';
}
