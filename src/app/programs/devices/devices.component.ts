import { Component, OnInit } from '@angular/core';
import { DevicesService } from './devices.service';
import { Observable } from 'rxjs/Observable';
import { Device } from './device';

import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  searchForm = new FormGroup({});

  constructor(private devicesService:DevicesService,
              private formBuilder: FormBuilder,
              private router: Router) {

    this.searchForm = this.formBuilder.group({
      id: null,
      serialNumber: "",
      simId: "",
      fromDate: "",
      toDate: "",
      active: ""
    });
  }

  devices:Observable<Device[]>;

  ngOnInit() {
  }

  search(){
    console.log(this.searchForm.value);
    let queryParms = [];
    let queryString = null;

    if (this.searchForm.value.id > '' && this.searchForm.value.id > 0)
      queryParms.push("id=" + this.searchForm.value.id);
    if(this.searchForm.value.serialNumber > '')
      queryParms.push("serialNumber_like=^" + this.searchForm.value.serialNumber + '.*');
    if (this.searchForm.value.simId > '')
      queryParms.push("simId_like=^" + this.searchForm.value.simId + '.*');
    if (this.searchForm.value.active > '')
      queryParms.push("active=" + this.searchForm.value.active);
    if (this.searchForm.value.fromDate > '')
      queryParms.push("dateAdded_gte=" + this.searchForm.value.fromDate);
    if (this.searchForm.value.toDate > '')
      queryParms.push("dateAdded_lte=" + this.searchForm.value.toDate);
    
    if(queryParms.length>0){
      queryString = queryParms.join('&');
    }

    this.devices = this.devicesService.searchDevices(queryString);
  }

  onSelectDevice(id: number) {
    console.log('deviceId = ' + id);
  }
}
