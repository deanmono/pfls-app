import { Injectable } from '@angular/core';

import {Carrier} from '../carrier/carrier';
import {Program} from '../carrier/program/program';

import { HttpClient } from '@angular/common/http';
import { Http }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Injectable()
export class CarriersService {

  private CARRIERS: Carrier[] = [];

  constructor(private http: Http) {
  }

  getCarriers(): Observable<Carrier[]>{
    return this.http.get(environment.apiURL + "/carriers").map(response => response.json() as Carrier[]);
  }

}
