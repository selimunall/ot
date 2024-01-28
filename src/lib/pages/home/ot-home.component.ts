import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { CommonStateService } from '../../state/ot-common.state';

@Component({
  standalone: true,
  selector: 'ot-ot-home',
  templateUrl: './ot-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoModule]
})
export class OtHomeComponent {
  #cmnState = inject(CommonStateService);

  constructor() {
    this.#cmnState;
  }
}
