import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { DeviceGroup } from './device-group';

@Injectable()
export class DeviceGroupsService {

  constructor() { }

  getDeviceGroups(): Observable<DeviceGroup[]>{
    let groups = [];
    groups.push(new DeviceGroup());
    groups[0].id = 1;
    groups[0].name = "Device Group One";
    groups[0].active = false;
    
    groups.push(new DeviceGroup());
    groups[1].id = 2;
    groups[1].name = "Device Group Two";
    groups[1].active = false;

    groups.push(new DeviceGroup());
    groups[2].id = 3;
    groups[2].name = "Device Group Three";
    groups[2].active = true;

    return Observable.of(groups);
  }

}
