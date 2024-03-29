import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  standalone: true,
  selector: 'ot-forum',
  templateUrl: './ot-forum.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoModule]
})
export class OtForumComponent {}
