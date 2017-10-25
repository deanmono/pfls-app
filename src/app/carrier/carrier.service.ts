import { Injectable } from '@angular/core';
//TODO delete carriersservice?
import { CarriersService } from '../carriers/carriers.service';
import { Carrier} from './carrier';

import {Program} from './program/program';
import { Http }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CarrierService {

  constructor(private carriersService: CarriersService,
              private http: Http) {}

  getEmptyCarrier():Carrier{
    let carrier = new Carrier();
    carrier.programs = [];
    return carrier;
  }

  getCarrier(id:number): Observable<Carrier>{
    console.log('carrierId = '+id);
    return this.http.get("http://localhost:8080/carriers/"+id).map(response => response.json() as Carrier);
  }

  getPrograms(id:number): Observable<Program[]>{
    return this.http.get("http://localhost:8080/programs?carrierId="+id).map(response => response.json() as Program[]);
  }

}
