import { Injectable } from '@angular/core';
import { IDevice } from '../models/device';
import { devices } from '../data/devices';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  devices: BehaviorSubject<IDevice[]> = new BehaviorSubject<IDevice[]>([]);

  devices$: Observable<IDevice[]> = this.devices.asObservable();

  //При инициализации список устройств проходит проверку на наличие данных в localstorage
  getAllDevices = () => {
    const deviceList: string | null = localStorage.getItem('deviceList');
    //Если localstorage не пуст - берем из него список
    if (this.devices$) {
      if (deviceList !== null) {
        this.devices.next(JSON.parse(deviceList));
      } else {
        this.devices.next(devices);
        localStorage.setItem('deviceList', JSON.stringify(this.devices.value));
      }
    }
  };

  //Создание устройства
  createDevice = (device: IDevice): void => {
    const newDevice: IDevice = {
      ...device,
      id: String(Date.now()),
    };
    this.devices$.pipe(take(1)).subscribe((value) => {
      const newDeviceList: IDevice[] = [newDevice, ...value];
      this.devices.next(newDeviceList);
    });
    localStorage.setItem('deviceList', JSON.stringify(this.devices.value));
  };

  //Удаление устройства
  removeDevice = (id: string): void => {
    const currentDevices: IDevice[] = this.devices.value;
    const newDeviceList: IDevice[] = currentDevices.filter(
      (device) => device.id !== id
    );
    this.devices.next(newDeviceList);
    localStorage.setItem('deviceList', JSON.stringify(this.devices.value));
  };

  //Сброс списка устройства
  resetDeviceList = (): void => {
    this.devices.next(devices);
    localStorage.setItem('deviceList', JSON.stringify(this.devices.value));
  };
}
