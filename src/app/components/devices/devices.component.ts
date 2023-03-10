import { Component, OnInit } from '@angular/core';
import { IDevice } from '../../models/device';
import { Observable } from 'rxjs';
import { DevicesService } from '../../services/devices.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
})
export class DevicesComponent implements OnInit {
  constructor(private devicesService: DevicesService) {}
  dataSource!: IDevice[];
  totalItems!: number;
  pageSize: number = 5;
  currentPageIndex: number = 0;
  devices$: Observable<IDevice[]> = this.devicesService.devices;
  displayedColumns: string[] = [
    'id',
    'title',
    'deviceType',
    'enabled',
    'houseId',
    'lastActivity',
    'status',
    'locations',
    'name',
    'port',
    'password',
    'action',
  ];

  ngOnInit(): void {
    this.loadPage();
  }

  removeDevice = (id: string): void => {
    this.devicesService.removeDevice(id);
  };

  pageChanged(event: PageEvent) {
    this.currentPageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadPage();
  }

  loadPage = (): void => {
    this.devices$.subscribe({
      next: (res) => {
        this.dataSource = res.slice(
          this.currentPageIndex * this.pageSize,
          (this.currentPageIndex + 1) * this.pageSize
        );
        this.totalItems = res.length;
      },
    });
  };
}
