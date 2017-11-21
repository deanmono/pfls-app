import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceGroupsComponent } from './device-groups.component';
import { RouterTestingModule } from '@angular/router/testing'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DeviceGroupsService } from './device-groups.service';

describe('DeviceGroupsComponent', () => {
  let component: DeviceGroupsComponent;
  let fixture: ComponentFixture<DeviceGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceGroupsComponent ],
      providers: [DeviceGroupsService],
      imports: [RouterTestingModule, NgbModule.forRoot()],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});