import { DeviceType, IDevice, Status } from '../models/device';

export const devices: IDevice[] = [
  {
    id: '1678426089325',
    title: 'Устройство-1',
    deviceType: DeviceType.ELTEX_DIMMER,
    enabled: true,
    houseId: { name: 'Частный дом №5', id: 'ph5' },
    lastActivity: '10.02.2023',
    status: Status.ONLINE,
    locations: ['Екатеринбург'],
    settings: { name: 'Устройство-1', port: '1', password: '123' },
  },
  {
    id: '1678426089326',
    title: 'Устройство-2',
    deviceType: DeviceType.ELTEX_MOTION,
    enabled: true,
    houseId: { name: 'Квартира №53', id: '53' },
    lastActivity: '01.04.2022',
    status: Status.INITIALIZING,
    locations: ['Новосибирск'],
    settings: { name: 'Устройство-2', port: '2', password: '123' },
  },
  {
    id: '1678426089327',
    title: 'Устройство-3',
    deviceType: DeviceType.ELTEX_SZ_AIR,
    enabled: false,
    houseId: { name: 'Квартира №3', id: '3' },
    lastActivity: '03.02.2021',
    status: Status.OFFLINE,
    locations: ['Москва'],
    settings: { name: 'Устройство-3', port: '3', password: '123' },
  },
];
