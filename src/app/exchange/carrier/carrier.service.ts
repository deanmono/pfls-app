import { Injectable } from '@angular/core';
//TODO delete carriersservice?
import { CarriersService } from '../carriers/carriers.service';
import { Carrier} from './carrier';

import {Program} from './program/program';
import { Http }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()
export class CarrierService {

  constructor(private carriersService: CarriersService,
              private http: Http) {}

  getEmptyCarrier():Carrier{
    let carrier = new Carrier();
    return carrier;
  }

  getCarrier(id:number): Observable<Carrier>{
    console.log('carrierId = '+id);
    return this.http.get(environment.apiURL + "/carriers/"+id).map(response => response.json() as Carrier);
  }

  getPrograms(id:number): Observable<Program[]>{
    return this.http.get(environment.apiURL + "/programs?carrierId="+id).map(response => response.json() as Program[]);
  }

}
