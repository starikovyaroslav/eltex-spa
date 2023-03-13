import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DevicesService } from '../../services/devices.service';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss'],
})
export class ModalConfirmComponent {
  private readonly id: string;
  constructor(
    private dialogRef: MatDialogRef<ModalConfirmComponent>,
    private devicesService: DevicesService
  ) {
    this.id = dialogRef.id;
  }

  public removeDevice(): void {
    this.devicesService.removeDevice(this.id);
    this.dialogRef.close(true);
  }
}
