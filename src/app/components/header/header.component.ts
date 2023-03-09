import { Component } from '@angular/core';
import { DevicesService } from '../../services/devices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private devicesService: DevicesService) {}

  resetDeviceList = () => {
    this.devicesService.resetDeviceList();
  };
}
