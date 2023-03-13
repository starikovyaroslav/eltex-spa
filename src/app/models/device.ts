export enum DeviceType {
  ELTEX_MQTT_DEVICE = 'ELTEX_MQTT_DEVICE',
  ELTEX_MOTION = 'ELTEX_MOTION',
  ELTEX_SOCKET = 'ELTEX_SOCKET',
  ELTEX_SZ_AIR = 'ELTEX_SZ_AIR',
  ELTEX_DIMMER = 'ELTEX_DIMMER',
}

export enum Status {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
  UNAVAILABLE = 'UNAVAILABLE',
  INITIALIZING = 'INITIALIZING',
  UNKNOWN = 'UNKNOWN',
}

export interface ISettings {
  port: string;
  name: string;
  password: string;
}

export interface IHouseId {
  name: string;
  id: string;
}

export interface IDevice {
  id: string;
  title: string;
  deviceType: DeviceType;
  enabled: boolean;
  houseId: IHouseId;
  lastActivity: string;
  status: Status;
  locations: string[];
  settings: ISettings;
}
