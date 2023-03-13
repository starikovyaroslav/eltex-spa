import { Component, OnInit } from '@angular/core';
import { DevicesService } from './services/devices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private devicesService: DevicesService) {}

  title = 'eltex-spa';

  // При инициализации получаем список устройств
  public ngOnInit(): void {
    this.devicesService.getAllDevices();
  }
}
