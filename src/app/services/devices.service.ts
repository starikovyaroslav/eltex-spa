import { Injectable } from '@angular/core';
import { IDevice } from '../models/device';
import { devices } from '../data/devices';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  constructor() {}

  devices: BehaviorSubject<IDevice[]> = new BehaviorSubject<IDevice[]>(devices);

  devices$: Observable<IDevice[]> = this.devices.asObservable();

  createDevice = (device: IDevice): void => {
    this.devices$.pipe(take(1)).subscribe((value) => {
      const newDeviceList: IDevice[] = [...value, device];
      this.devices.next(newDeviceList);
    });
    localStorage.setItem('deviceList', JSON.stringify(this.devices$));
  };

  //todo поправить удаление
  removeDevice = (id: string): void => {
    this.devices$.pipe(take(1)).subscribe((value) => {
      const newDeviceList: IDevice[] = this.devices.filter(
        (device) => device.id !== id
      );
    });

    localStorage.setItem('deviceList', JSON.stringify(this.devices$));
    // Чтобы не оставлять пустой массив в localstorage, просто удаляем данные из него
    if (this.devices$.length == 0) localStorage.clear();
  };
}
