import { Injectable } from '@angular/core';

import {Carrier} from '../carrier/carrier';
import {Program} from '../carrier/program/program';

@Injectable()
export class CarriersService {

  private CARRIERS: Carrier[] = [];
  
  constructor() {
    // just for testing
    this.CARRIERS.push(new Carrier());
    this.CARRIERS[0].id = 1;
    this.CARRIERS[0].name = 'Carrier One';
    this.CARRIERS[0].programs = [];

    this.CARRIERS[0].programs.push(new Program());
    this.CARRIERS[0].programs[0].id = 1;
    this.CARRIERS[0].programs[0].name = 'Program One';
    this.CARRIERS[0].programs[0].carrierId = 1;
    this.CARRIERS[0].programs[0].active = true;
    
    this.CARRIERS.push(new Carrier());
    this.CARRIERS[1].id = 2;
    this.CARRIERS[1].name = 'Carrier Two';
    this.CARRIERS[1].programs = [];

    this.CARRIERS[1].programs.push(new Program());
    this.CARRIERS[1].programs[0].id = 2;
    this.CARRIERS[1].programs[0].name = 'Program Two';
    this.CARRIERS[1].programs[0].carrierId = 2;
    this.CARRIERS[1].programs[0].active = true;
    
    this.CARRIERS.push(new Carrier());
    this.CARRIERS[2].id = 3;
    this.CARRIERS[2].name = 'Carrier Three';
    this.CARRIERS[2].programContactName = 'John Smith';
    this.CARRIERS[2].programContactEmail = 'jsmith@somecarrier.com';
    this.CARRIERS[2].programContactPhone = '555-555-5555';
    this.CARRIERS[2].technicalContactName = 'Joe Jones';
    this.CARRIERS[2].technicalContactEmail = 'jjones@somecarrier.com';
    this.CARRIERS[2].technicalContactPhone = '555-555-5556';
    this.CARRIERS[2].programs = [];

    this.CARRIERS[2].programs.push(new Program());
    this.CARRIERS[2].programs[0].id = 3;
    this.CARRIERS[2].programs[0].name = 'Program Three';
    this.CARRIERS[2].programs[0].carrierId = 3;
    this.CARRIERS[2].programs[0].active = false;
    this.CARRIERS[2].programs[0].offerEligibilityDays = 10;
    this.CARRIERS[2].programs[0].eligibleCountries = 'USA';
    this.CARRIERS[2].programs[0].eligibleProvinces = 'AL, AK, TX, IA, OH, IL, IN';
    this.CARRIERS[2].programs[0].beginDate = '03-01-2017';
    this.CARRIERS[2].programs[0].expirationDate = '09-01-2017';
    this.CARRIERS[2].programs[0].contactInfo = 'You can reach us between 7:00am to 9:30pm';
    this.CARRIERS[2].programs[0].companyUrl = 'http://www.supercoolinsurance.com';
    this.CARRIERS[2].programs[0].companyLogo = 'http://www.supercoolinsurance.com/logo.png';
    this.CARRIERS[2].programs[0].insuranceName = 'The name of the insurance';
    this.CARRIERS[2].programs[0].discountType = '%';
    this.CARRIERS[2].programs[0].scoreDiscount = 50;
    this.CARRIERS[2].programs[0].contractedOEMs = 'FCA';

    this.CARRIERS[2].programs.push(new Program());
    this.CARRIERS[2].programs[1].id = 4;
    this.CARRIERS[2].programs[1].name = 'Program Four';
    this.CARRIERS[2].programs[1].carrierId = 3;
    this.CARRIERS[2].programs[1].active = true;
    this.CARRIERS[2].programs[1].offerEligibilityDays = 10;
    this.CARRIERS[2].programs[1].eligibleCountries = 'USA';
    this.CARRIERS[2].programs[1].eligibleProvinces = 'AL, AK, TX, IA, OH, IL, IN';
    this.CARRIERS[2].programs[1].beginDate = '09-01-2017';
    this.CARRIERS[2].programs[1].expirationDate = '12-01-2017';
    this.CARRIERS[2].programs[1].contactInfo = 'You can reach us between 7:00am to 9:30pm';
    this.CARRIERS[2].programs[1].companyUrl = 'http://www.supercoolinsurance.com';
    this.CARRIERS[2].programs[1].companyLogo = 'http://www.supercoolinsurance.com/logo.png';
    this.CARRIERS[2].programs[1].insuranceName = 'The name of the insurance';
    this.CARRIERS[2].programs[1].discountType = '%';
    this.CARRIERS[2].programs[1].scoreDiscount = 50;
    this.CARRIERS[2].programs[1].contractedOEMs = 'FCA';
    
    console.warn('Creating fake data!');
  }

  getCarriers(): Promise<Carrier[]>{
    return Promise.resolve(this.CARRIERS);
  }

  getCarriersFake(): Carrier[]{
    console.warn('Using fake data!');
    return this.CARRIERS;
  }

  getProgramsFake(): Program[]{
    console.warn('Using fake data!');
    let programs = [];
    for(let c of this.CARRIERS){
      for(let p of c.programs){
        programs.push(p);
      }
    }
    return programs;
  }

  addProgramFake(program: Program):boolean{
    let nextId = this.getProgramsFake().length + 1;
    let carriers = this.getCarriersFake();
    for(let c of carriers){
      if(c.id == program.carrierId){
        program.id = nextId;
        program.active = true;
        c.programs.push(program);
        return true;
      }
    }
    return false;
  }

}
