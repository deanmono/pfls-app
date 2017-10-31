import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierComponent } from './carrier.component';
import { CarrierService } from './carrier.service';
import { ProgramService } from './program/program.service';
import {RouterTestingModule} from '@angular/router/testing';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Carrier } from './carrier';


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

describe('CarrierComponent', () => {
  let component: CarrierComponent;
  let fixture: ComponentFixture<CarrierComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrierComponent ],
      providers: [{provide: CarrierService, useValue: carrierService},
                  {provide: ProgramService, useValue: programService}],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
