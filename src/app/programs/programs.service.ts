import { Injectable } from '@angular/core';
import { Program } from './program';
import { Observable } from "rxjs/Rx";

@Injectable()
export class ProgramsService {

  constructor() { }

  getPrograms():Observable<Program[]>{
    //fake it 'til you make it
    let programs = [];
    programs.push(new Program());
    programs[0].id = 1;
    programs[0].name = 'Program One';
    programs[0].active = true;

    programs.push(new Program());
    programs[1].id = 2;
    programs[1].name = 'Program Two';
    programs[1].active = true;

    programs.push(new Program());
    programs[2].id = 3;
    programs[2].name = 'Program Three';
    programs[2].active = true;

    programs.push(new Program());
    programs[3].id = 4;
    programs[3].name = 'Program Four';
    programs[3].active = false;

    return Observable.of(programs);
  }

}
