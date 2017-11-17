import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { DevicesComponent } from './devices.component';
import { Device } from './device';
import { DevicesService } from './devices.service';

let devicesService = {
  searchDevices(queryString: string): Observable<Device[]> {
    return null;
  }
,
  getDevice(id: number): Observable<Device> {
    let device = new Device();
    device.id = 3;
    device.serialNumber = 'serial';
    device.simId = 'sim';
    device.active = false;
    device.type = 'OneType';
    device.dateAdded = '2017-11-11';

    return Observable.of(device);
  }
};

describe('DevicesComponent', () => {
  let component: DevicesComponent;
  let fixture: ComponentFixture<DevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesComponent ],
      providers: [{ provide: DevicesService, useValue: devicesService }],
      imports: [RouterTestingModule, NgbModule.forRoot(), ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
