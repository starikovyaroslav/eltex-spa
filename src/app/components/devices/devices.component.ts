import { Component } from '@angular/core';
import { IDevice } from '../../models/device';
import { Observable } from 'rxjs';
import { DevicesService } from '../../services/devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
})
export class DevicesComponent {
  constructor(private devicesService: DevicesService) {}
  devices$: Observable<IDevice[]> = this.devicesService.devices;
  displayedColumns: string[] = [
    'id',
    'title',
    'deviceType',
    'enabled',
    'houseId',
    'lastActivity',
    'status',
    'locations',
    'name',
    'port',
    'password',
    'action',
  ];

  removeDevice = (id: string): void => {
    this.devicesService.removeDevice(id);
  };
}
