import { Component, OnInit } from '@angular/core';
import { IDevice } from './models/device';
import { devices } from './data/devices';
import { DevicesService } from './services/devices.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private devicesService: DevicesService) {}
  title = 'eltex-spa';
  devices$!: Observable<IDevice[]>;

  // При инициализации список устройств проходит проверку на наличие данных в localstorage
  ngOnInit(): void {
    const deviceList: string | null = localStorage.getItem('deviceList');
    if (this.devices$) {
      //Если localstorage не пуст - берем из него список
      if (deviceList !== null) {
        this.devices$ = JSON.parse(deviceList);
      } else {
        this.devices$ = this.devicesService.devices;
        localStorage.setItem('deviceList', JSON.stringify(this.devices$));
      }
    }
  }

  // updateDeviceList = (): void => {
  //   this.devices = devices;
  //   console.log(this.devices);
  // };
}
