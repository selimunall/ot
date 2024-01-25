import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { Button1Component } from '../../../components/buttons/button-1.component';
import { DialogService } from '../../../components/dialog/dialog.service';
import { OtLoginComponent } from '../../../ui/login/ot-login.component';

@Component({
  standalone: true,
  selector: 'ot-toolbar',
  templateUrl: './ot-toolbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoModule, Button1Component],
  providers: [DialogService]
})
export class ToolbarComponent {
  #dialogService = inject(DialogService);

  openLoginModel(): void {
    console.log('geld');
    this.#dialogService.open(OtLoginComponent, 'Login', '40%', '40%');
  }
}
