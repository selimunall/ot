import { DialogRef } from '@angular/cdk/dialog';
import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  standalone: true,
  selector: 'dialog',
  templateUrl: './dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoModule, NgComponentOutlet]
})
export class DialogComponent {
  readonly dialogRef = inject(DialogRef);
  readonly dialogData = this.dialogRef.config.data;
}
