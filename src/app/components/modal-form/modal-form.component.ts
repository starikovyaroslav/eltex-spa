import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  public enabled: boolean = true;

  public errorMessage: string = 'Поле обязательно для заполнения';

  constructor(
    private deviceService: DevicesService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ModalFormComponent>
  ) {
    this.deviceForm = this.formBuilder.group({
      title: ['', Validators.required],
      deviceType: [
        DeviceType['' as keyof typeof DeviceType],
        Validators.required,
      ],
      enabled: this.enabled,
      houseId: ['', Validators.required],
      status: [Status['' as keyof typeof Status], Validators.required],
      locations: ['', Validators.required],
      settings: this.formBuilder.group({
        name: ['', Validators.required],
        port: ['', Validators.required],
        password: ['', Validators.required],
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
