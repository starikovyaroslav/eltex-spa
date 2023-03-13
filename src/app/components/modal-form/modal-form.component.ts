import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DevicesService } from '../../services/devices.service';
import { DeviceType, IHouseId, Status } from '../../models/device';
import { houseId } from '../../data/houseId';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss'],
})
export class ModalFormComponent {
  public deviceForm: FormGroup;

  public houseId: IHouseId[] = houseId;

  public deviceType: DeviceType[] = [
    DeviceType.ELTEX_DIMMER,
    DeviceType.ELTEX_MOTION,
    DeviceType.ELTEX_SZ_AIR,
    DeviceType.ELTEX_MQTT_DEVICE,
    DeviceType.ELTEX_SOCKET,
  ];

  public status: Status[] = [
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
    this.deviceForm = this.formBuilder.group({
      title: '',
      deviceType: DeviceType['' as keyof typeof DeviceType],
      enabled: '',
      houseId: '',
      status: Status['' as keyof typeof Status],
      locations: [''],
      settings: this.formBuilder.group({
        name: '',
        port: '',
        password: '',
      }),
    });
  }

  public onFormSubmit(): void {
    if (this.deviceForm.valid) {
      this.deviceService.createDevice(this.deviceForm.value);
      this.dialogRef.close(true);
    }
  }
}
