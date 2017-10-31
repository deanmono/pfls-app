import { Injectable } from '@angular/core';

import { CarriersService } from '../../carriers/carriers.service';

import {Program} from './program';

import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../../../environments/environment';


@Injectable()
export class ProgramService {

  // until api is working correctly
  nextID:number = 5;
  getNextID(){
    return this.nextID++;
  }

  constructor(private carriersService:CarriersService,
              private http: Http) { }

  getProgram(id:number): Observable<Program>{
    console.log('programId = '+id);
    return this.http.get(environment.apiURL + "/programs/"+id).map(response => response.json() as Program);
  }

  setActiveStatus(id:number, status:boolean): Promise<boolean>{
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    console.log('sending patch');
    this.http.patch(environment.apiURL + '/programs/'+id, {active:false}, options).toPromise().then();
    return Promise.resolve(true);
  }

  addProgram(program: Program) {
    return this.http.post(environment.apiURL + '/programs', program)
      .subscribe(
        res => {
          console.log(res);
          return true;
        },
        err => {
          console.log("Error occured");
          return false;
        }
      );
  }

}
