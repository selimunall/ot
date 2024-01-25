import { DialogModule } from '@angular/cdk/dialog';
import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { slideInBottom, slideOutBottom } from '../../core/animations/slide';
import { zoomIn, zoomOut } from '../../core/animations/zoom';

@Component({
  standalone: true,
  selector: 'dialog',
  templateUrl: './dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoModule, NgComponentOutlet, DialogModule],
  animations: [slideInBottom, zoomIn, slideOutBottom, zoomOut]
})
export class DialogComponent {
  // readonly dialogRef = inject(DialogRef);
  // readonly dialogData = this.dialogRef.config.data;
}
