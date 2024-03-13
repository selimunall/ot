import { DialogModule, DialogRef } from '@angular/cdk/dialog';
import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { AnimationDurationsMilliseconds } from 'src/lib/core/animations/defaults';
import { slideInBottom, slideOutBottom } from '../../core/animations/slide';
import { zoomIn, zoomOut } from '../../core/animations/zoom';

@Component({
  standalone: true,
  selector: 'ot-dialog',
  templateUrl: './dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoModule, NgComponentOutlet, DialogModule],
  animations: [slideInBottom, zoomIn, slideOutBottom, zoomOut]
})
export class DialogComponent {
  readonly dialogRef = inject(DialogRef);
  readonly dialogTitle = this.dialogRef.config.data.title;
  readonly dialogSecondTitle = this.dialogRef.config.data.secondTitle;
  readonly dialogComponent = this.dialogRef.config.data.component;
  hidden = false;

  close(): void {
    this.hidden = true;
    setTimeout(() => {
      this.dialogRef.close();
    }, AnimationDurationsMilliseconds.exiting);
  }
}
