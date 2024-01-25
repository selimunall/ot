import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  standalone: true,
  selector: 'ot-button-1',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoModule, NgTemplateOutlet, RouterLink],
  template: `
    <div class="p-2">
      @if (!!link()) {
      <a [routerLink]="link()" class="items-center gap-2 relative inline-flex justify-center px-4 py-2 overflow-hidden font-medium rounded-lg group">
        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white/15 bg-opacity-30 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <ng-container *ngTemplateOutlet="button1"></ng-container>
      </a>
      } @else {
      <button (click)="clicked.emit($event)" class="items-center gap-2 relative inline-flex justify-center px-4 py-2 overflow-hidden font-medium rounded-lg group">
        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white/15 bg-opacity-30 rounded-full group-hover:w-56 group-hover:h-56"></span>
        <ng-container *ngTemplateOutlet="button1"></ng-container>
      </button>
      }
    </div>

    <ng-template #button1>
      @if(!!icon()) {
      <i [class]="icon()"></i>
      } @if (!!title()) {
      <span>
        {{ title() }}
      </span>
      }
    </ng-template>
  `
})
export class Button1Component {
  title = input();
  icon = input();
  link = input<any[]>();

  @Output() clicked = new EventEmitter<any>();
}
