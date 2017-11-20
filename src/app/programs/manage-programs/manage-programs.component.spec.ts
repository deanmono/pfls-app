import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { ManageProgramsComponent } from './manage-programs.component';
import { ProgramsService } from '../programs.service';

describe('ManageProgramsComponent', () => {
  let component: ManageProgramsComponent;
  let fixture: ComponentFixture<ManageProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageProgramsComponent],
      providers: [ProgramsService],
      imports: [RouterTestingModule, NgbModule.forRoot(), ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
