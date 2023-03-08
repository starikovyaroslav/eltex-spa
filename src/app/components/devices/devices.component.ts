import { Component, OnInit } from '@angular/core';
import { IDevice } from '../../models/device';
import { devices } from '../../data/devices';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
})
export class DevicesComponent implements OnInit {
  devices: IDevice[] = [];
  displayedColumns: string[] = [
    'id',
    'title',
    'deviceType',
    'enabled',
    'houseId',
    'lastActivity',
    'status',
    'locations',
    'settings',
    'action',
  ];

  // При инициализации список устройств проходит проверку на наличие данных в localstorage
  ngOnInit(): void {
    const deviceList: string | null = localStorage.getItem('deviceList');
    if (this.devices.length == 0) {
      //Если localstorage не пуст - берем из него список
      if (deviceList !== null) {
        this.devices = JSON.parse(deviceList);
      } else {
        this.devices = devices;
        localStorage.setItem('deviceList', JSON.stringify(this.devices));
      }
    }
  }

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
