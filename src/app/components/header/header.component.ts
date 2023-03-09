import { Component } from '@angular/core';
import { DevicesService } from '../../services/devices.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalFormComponent } from '../modal-form/modal-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private devicesService: DevicesService,
    private dialog: MatDialog
  ) {}

  resetDeviceList = () => {
    this.devicesService.resetDeviceList();
  };

  openModal() {
    const dialogRef = this.dialog.open(ModalFormComponent);
  }
}
