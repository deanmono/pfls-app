import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Device } from './device';

import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

import { environment } from '../../../environments/environment';

interface SearchResponse{
  results:Device[];
}

@Injectable()
export class DevicesService {

  constructor(private http:HttpClient) { }

  searchDevices(queryString:string):Observable<Device[]>{
    if (queryString){
      return this.http.get<SearchResponse>(environment.apiURL + "/devices?" + queryString).map(data => _.values(data));
    }
    else{
      return this.http.get<SearchResponse>(environment.apiURL + "/devices").map(data => _.values(data));
    }
  }

  getDevice(id:number):Observable<Device>{
    let device = new Device();
    device.id = 3;
    device.serialNumber = 'serial';
    device.simId = 'sim';
    device.active = false;
    device.type = 'OneType';
    device.dateAdded = '2017-11-11';

    return Observable.of(device);
  }

}
