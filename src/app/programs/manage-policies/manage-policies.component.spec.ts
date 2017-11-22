import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ManagePoliciesComponent } from './manage-policies.component';
import { PoliciesService } from './policies.service';

describe('ManagePoliciesComponent', () => {
  let component: ManagePoliciesComponent;
  let fixture: ComponentFixture<ManagePoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePoliciesComponent ],
      providers: [PoliciesService],
      imports: [RouterTestingModule, NgbModule.forRoot()],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
