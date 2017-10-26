import { TestBed, inject } from '@angular/core/testing';

import { CarrierService } from './carrier.service';
import { CarriersService } from '../carriers/carriers.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Carrier } from './carrier';

let carriersService = {
  getCarriers:function(): Observable<Carrier[]>{
    let cars: Carrier[] = [];
    return Observable.of(cars);
  }
};
let carrierService = {
  getEmptyCarrier:function():any{
    return null;
  },
  getCarrier:function(id:number): Observable<Carrier>{
    let obs = Observable.of(new Carrier());
    return obs;
  },
  getPrograms:function(id:number): any{
    return null;
  }
};

describe('CarrierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: CarriersService, useValue: carriersService},
        {provide: CarrierService, useValue: carrierService}],
      imports: []
    });
  });

  it('should be created', inject([CarrierService], (service: CarrierService) => {
    expect(service).toBeTruthy();
  }));
});
