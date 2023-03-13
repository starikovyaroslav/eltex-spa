import { Component, OnInit } from '@angular/core';
import { IDevice } from './models/device';
import { DevicesService } from './services/devices.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private devicesService: DevicesService) {}

  title = 'eltex-spa';
  public devices$!: Observable<IDevice[]>;

  // При инициализации получаем список устройств
  public ngOnInit(): void {
    this.devicesService.getAllDevices();
  }
}
