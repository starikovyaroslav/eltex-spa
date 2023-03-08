import { Component, Input } from '@angular/core';
import { IDevice } from '../../models/device';
import { devices } from '../../data/devices';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
})
export class DevicesComponent {
  @Input()
  devices!: IDevice[];
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

  createDevice = (device: IDevice): void => {
    this.devices.push(device);
    localStorage.setItem('deviceList', JSON.stringify(this.devices));
  };

  removeDevice = (id: string): void => {
    this.devices = this.devices.filter((device) => device.id !== id);
    localStorage.setItem('deviceList', JSON.stringify(this.devices));
    // Чтобы не оставлять пустой массив в localstorage, просто удаляем данные из него
    if (this.devices.length == 0) localStorage.clear();
  };
}
