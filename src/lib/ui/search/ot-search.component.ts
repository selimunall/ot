import { ChangeDetectionStrategy, Component, EventEmitter, Output, inject } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { OtLoadingComponent } from 'src/lib/components/loading/loading.component';
import { OtSearchStateService } from './ot-search.state';

@Component({
  standalone: true,
  selector: 'ot-search',
  templateUrl: './ot-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoModule, OtLoadingComponent],
  providers: [OtSearchStateService]
})
export class OtSearchComponent {
  @Output() clicked = new EventEmitter<any>();
  state = inject(OtSearchStateService);
}
