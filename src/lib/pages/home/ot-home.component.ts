import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { ImageStateService } from '../../state/ot-image.state';

@Component({
  standalone: true,
  selector: 'ot-ot-home',
  templateUrl: './ot-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoModule]
})
export class OtHomeComponent {
  #imageState = inject(ImageStateService);

  // constructor() {
  //   this.#strState.getHomeImage();
  // }
}
