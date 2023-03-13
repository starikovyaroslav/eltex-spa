import { DeviceType, IDevice, Status } from '../models/device';

export const devices: IDevice[] = [
  {
    id: '1678426089325',
    title: 'Устройство-1',
    deviceType: DeviceType.ELTEX_DIMMER,
    enabled: true,
    houseId: '1',
    lastActivity: '10.02.2023',
    status: Status.ONLINE,
    locations: ['location'],
    settings: { name: 'Устройство-1', port: '1', password: '123' },
  },
  {
    id: '1678426089326',
    title: 'Устройство-2',
    deviceType: DeviceType.ELTEX_MOTION,
    enabled: true,
    houseId: '2',
    lastActivity: '01.04.2022',
    status: Status.INITIALIZING,
    locations: ['location'],
    settings: { name: 'Устройство-2', port: '2', password: '123' },
  },
  {
    id: '1678426089327',
    title: 'Устройство-3',
    deviceType: DeviceType.ELTEX_SZ_AIR,
    enabled: false,
    houseId: '3',
    lastActivity: '03.02.2021',
    status: Status.OFFLINE,
    locations: ['location'],
    settings: { name: 'Устройство-3', port: '3', password: '123' },
  },
];
