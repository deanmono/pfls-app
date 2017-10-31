import { TestBed, inject } from '@angular/core/testing';

import { ProgramService } from './program.service';
import { CarriersService } from '../../carriers/carriers.service';
import {Carrier} from '../carrier';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let carriersService = {
  getCarriers:function(): Observable<Carrier[]>{
    let cars: Carrier[] = [];
    return Observable.of(cars);
  }
};

let programService = {
  getNextID:function(){
  },
  getProgram:function(id:number): any{
    return null;
  },
  setActiveStatus:function(id:number, status:boolean): Promise<boolean>{
    return null;
  },
  addProgram:function(program: any) {
  }
};

describe('ProgramService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ProgramService, useValue: programService}, {provide: CarriersService, useValue: carriersService}],
      imports: []
    });
  });

  it('should be created', inject([ProgramService], (service: ProgramService) => {
    expect(service).toBeTruthy();
  }));
});
