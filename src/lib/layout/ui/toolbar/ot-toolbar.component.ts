import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { Button1Component } from '../../../components/buttons/button-1.component';
import { DialogService } from '../../../components/dialog/dialog.service';
import { OtLoginComponent } from '../../../ui/login/ot-login.component';
import { OtLayoutStateService } from '../../ot-layout.state';

@Component({
  standalone: true,
  selector: 'ot-toolbar',
  templateUrl: './ot-toolbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoModule, Button1Component, RouterLink]
})
export class ToolbarComponent {
  #dialogService = inject(DialogService);
  state = inject(OtLayoutStateService);

  openLoginModel(): void {
    this.#dialogService.open(OtLoginComponent, 'Login', '90%', '60%');
  }
}
