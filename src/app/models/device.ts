export enum DeviceType {
  'ELTEX_MQTT_DEVICE',
  'ELTEX_MOTION',
  'ELTEX_SOCKET',
  'ELTEX_SZ_AIR',
  'ELTEX_DIMMER',
}

export enum Status {
  'ONLINE',
  'OFFLINE',
  'UNAVAILABLE',
  'INITIALIZING',
  'UNKNOWN',
}

export interface ISettings {
  port: string;
  name: string;
  password: string;
}

export interface IDevice {
  id: string;
  title: string;
  deviceType: DeviceType;
  enabled: boolean;
  houseId: string;
  lastActivity: number;
  status: Status;
  locations: string[];
  settings: ISettings;
}
