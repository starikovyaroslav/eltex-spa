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
  public dataSource!: IDevice[];
  public totalItems!: number;
  public pageSize: number = 5;
  public currentPageIndex: number = 0;
  public devices$: Observable<IDevice[]> = this.devicesService.devices;
  public displayedColumns: string[] = [
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

  private loadPage(): void {
    this.devices$.subscribe({
      next: (res) => {
        this.dataSource = res.slice(
          this.currentPageIndex * this.pageSize,
          (this.currentPageIndex + 1) * this.pageSize
        );
        this.totalItems = res.length;
      },
    });
  }

  public ngOnInit(): void {
    this.loadPage();
  }

  public removeDevice(id: string): void {
    this.devicesService.removeDevice(id);
  }

  public pageChanged(event: PageEvent): void {
    this.currentPageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadPage();
  }
}
