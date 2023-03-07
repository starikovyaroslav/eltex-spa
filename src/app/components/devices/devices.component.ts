import { Component } from '@angular/core';
import { IDevice } from '../../models/device';
import { devices } from '../../data/devices';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
})
export class DevicesComponent {
  devices: IDevice[] = devices;
}
