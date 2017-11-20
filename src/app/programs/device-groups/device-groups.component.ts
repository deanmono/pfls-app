import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { DeviceGroup } from './device-group';

import { DeviceGroupsService } from './device-groups.service';

@Component({
  selector: 'app-device-groups',
  templateUrl: './device-groups.component.html',
  styleUrls: ['./device-groups.component.css']
})
export class DeviceGroupsComponent implements OnInit {

  constructor(private deviceGroupsService: DeviceGroupsService) { }

  deviceGroups:Observable<DeviceGroup[]>;

  ngOnInit() {
    this.deviceGroups = this.deviceGroupsService.getDeviceGroups();
  }

  onSelect(id: number) {
    console.log('deviceGroupId = ' + id);
  }

}
