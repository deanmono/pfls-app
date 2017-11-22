import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsRoutingModule } from './programs-routing.module';
import { DevicesComponent } from './devices/devices.component';
import { DevicesService } from './devices/devices.service';
import { ProgramsService } from './programs.service';
import { DeviceGroupsService } from './device-groups/device-groups.service';
import { PoliciesService } from './manage-policies/policies.service';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManageProgramsComponent } from './manage-programs/manage-programs.component';
import { DeviceGroupsComponent } from './device-groups/device-groups.component';
import { ManageProgramComponent } from './manage-program/manage-program.component';
import { ManagePoliciesComponent } from './manage-policies/manage-policies.component';


@NgModule({
  imports: [
    CommonModule,
    ProgramsRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  declarations: [DevicesComponent,
	ManageProgramsComponent,
	DeviceGroupsComponent,
	ManageProgramComponent,
	ManagePoliciesComponent
  ],
  providers: [
    DevicesService,
    ProgramsService,
    DeviceGroupsService,
    PoliciesService
  ]
})
export class ProgramsModule { }
