import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramAddComponent } from './program-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing'
import {ProgramService} from '../program.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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


describe('ProgramAddComponent', () => {
  let component: ProgramAddComponent;
  let fixture: ComponentFixture<ProgramAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramAddComponent ],
      providers:[{provide: ProgramService, useValue: programService}],
      imports:[ReactiveFormsModule, RouterTestingModule, NgbModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
