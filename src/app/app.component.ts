import { Component, OnInit } from '@angular/core';
import { IDevice } from './models/device';
import { devices } from './data/devices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'eltex-spa';
  devices: IDevice[] = [];

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

  updateDeviceList = (): void => {
    this.devices = devices;
    console.log(this.devices);
  };
}
