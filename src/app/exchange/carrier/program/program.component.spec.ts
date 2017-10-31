import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramComponent } from './program.component';
import {RouterTestingModule} from '@angular/router/testing'
import {ProgramService} from './program.service';
import {Program} from './program';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

let programService = {
  getNextID:function(){
  },
  getProgram:function(id:number): Observable<Program>{
    return Observable.of(new Program());
  },
  setActiveStatus:function(id:number, status:boolean): Promise<boolean>{
    return Promise.resolve(false);
  },
  addProgram:function(program: Program) {
  }
};

describe('ProgramComponent', () => {
  let component: ProgramComponent;
  let fixture: ComponentFixture<ProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramComponent ],
      imports: [RouterTestingModule, NgbModule.forRoot()],
      providers: [{provide: ProgramService, useValue: programService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
