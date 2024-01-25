import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { ImageService } from '../../services/image.service';

@Component({
  standalone: true,
  selector: 'ot-ot-home',
  templateUrl: './ot-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoModule]
})
export class OtHomeComponent {
  image = inject(ImageService);
  constructor() {
    this.image.get();
  }
}
