import { Injectable } from '@angular/core';

import { CarriersService } from '../../carriers/carriers.service';

import {Program} from './program';

@Injectable()
export class ProgramService {

  constructor(private carriersService:CarriersService) { }

  getProgram(id:number): Promise<Program>{
    let progs = this.carriersService.getProgramsFake();
    for(let program of progs){
      if(program.id==id)
        return Promise.resolve(program);
    }
    return null;
  }

  setActiveStatus(id:number, status:boolean): Promise<boolean>{
    let progs = this.carriersService.getProgramsFake();
    let result = false;
    for(let program of progs){
      if(program.id == id){
        program.active = status;
        result = true;
        break;
      }
    }
    return Promise.resolve(result);
  }

}
