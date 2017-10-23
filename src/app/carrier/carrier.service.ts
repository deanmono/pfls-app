import { Injectable } from '@angular/core';

import { CarriersService } from '../carriers/carriers.service';
import { Carrier} from './carrier';

import {Program} from './program/program';

@Injectable()
export class CarrierService {

  constructor(private carriersService: CarriersService) {}

  getEmptyCarrier():Carrier{
    let carrier = new Carrier();
    carrier.programs = [];
    return carrier;
  }

  getCarrier(id:number): Promise<Carrier>{
    console.log('carrierId = '+id);
    let carriers = this.carriersService.getCarriersFake();
    for(let carrier of carriers){
      if(carrier.id == id){
        carrier.programs = this.getPrograms(id);
        return Promise.resolve(carrier);
      }
    }

    return null;
  }

  getPrograms(id:number): Program[]{
      let programs: Program[] = [];
      let carriers = this.carriersService.getCarriersFake();
      for(let carrier of carriers){
        if(carrier.id == id)
          return carrier.programs;
      }
      return programs;
  }

}
