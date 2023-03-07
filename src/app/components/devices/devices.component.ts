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

  // При инициализации список устройств проходит проверку на наличие данных в localstorage
  ngOnInit(): void {
    const deviceList = localStorage.getItem('deviceList');
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
}
