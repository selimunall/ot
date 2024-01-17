import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { ToolbarComponent } from '../ui/toolbar/ot-toolbar.component';

@Component({
  standalone: true,
  selector: 'ot-layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoModule, RouterOutlet, ToolbarComponent]
})
export class LayoutComponent {}
