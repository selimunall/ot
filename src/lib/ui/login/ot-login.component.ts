import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  standalone: true,
  selector: 'ot-login',
  templateUrl: './ot-login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoModule]
})
export class OtLoginComponent {}
