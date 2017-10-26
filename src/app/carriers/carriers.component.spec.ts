import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarriersComponent } from './carriers.component';
import {RouterTestingModule} from '@angular/router/testing'
import { CarriersService } from './carriers.service';
import {Carrier} from '../carrier/carrier';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let carriersService = {
  getCarriers:function(): Observable<Carrier[]>{
    let cars: Carrier[] = [];
    return Observable.of(cars);
  }
};

describe('CarriersComponent', () => {
  let component: CarriersComponent;
  let fixture: ComponentFixture<CarriersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarriersComponent ],
      imports: [RouterTestingModule],
      providers: [{provide: CarriersService, useValue: carriersService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
