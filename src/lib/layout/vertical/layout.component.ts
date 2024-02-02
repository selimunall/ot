import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { OtSearchComponent } from 'src/lib/ui/search/ot-search.component';
import { OtLayoutStateService } from '../ot-layout.state';
import { ToolbarComponent } from '../ui/toolbar/ot-toolbar.component';

@Component({
  standalone: true,
  selector: 'ot-layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoModule, RouterOutlet, ToolbarComponent, OtSearchComponent, NgClass],
  providers: [OtLayoutStateService]
})
export class LayoutComponent {
  state = inject(OtLayoutStateService);
}
