import { Component, OnInit } from '@angular/core';
import { IDevice } from './models/device';
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

  // При инициализации получаем список устройств
  ngOnInit(): void {
    this.devicesService.getAllDevices();
  }
}
