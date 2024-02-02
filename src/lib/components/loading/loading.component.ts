import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ot-loading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (loading()) {
    <div class="absolute inset-0 z-10 flex flex-col items-center justify-center backdrop-blur-sm">
      <i class="ot-icon-f ot-i-progress-activity animate-spin text-2xl"></i>
    </div>
    }
  `
})
export class OtLoadingComponent {
  readonly loading = input.required<boolean>();
}
