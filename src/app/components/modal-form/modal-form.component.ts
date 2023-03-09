import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DevicesService } from '../../services/devices.service';
import { DeviceType, Status } from '../../models/device';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss'],
})
export class ModalFormComponent {
  empForm: FormGroup;

  deviceType: DeviceType[] = [
    DeviceType.ELTEX_DIMMER,
    DeviceType.ELTEX_MOTION,
    DeviceType.ELTEX_SZ_AIR,
    DeviceType.ELTEX_MQTT_DEVICE,
    DeviceType.ELTEX_SOCKET,
  ];

  status: Status[] = [
    Status.INITIALIZING,
    Status.OFFLINE,
    Status.ONLINE,
    Status.UNAVAILABLE,
    Status.UNKNOWN,
  ];

  enabled: boolean = true;

  constructor(
    private deviceService: DevicesService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ModalFormComponent>
  ) {
    this.empForm = this.formBuilder.group({
      title: '',
      deviceType: DeviceType['' as keyof typeof DeviceType],
      enabled: '',
      houseId: '',
      lastActivity: '',
      status: Status['' as keyof typeof Status],
      locations: [''],
      settings: this.formBuilder.group({
        name: '',
        port: '',
        password: '',
      }),
    });
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      console.log(this.empForm.value);
      this.deviceService.createDevice(this.empForm.value);
      this.dialogRef.close(true);
    }
  }
}
