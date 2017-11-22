import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DevicesComponent } from './devices/devices.component';
import { ManageProgramsComponent} from './manage-programs/manage-programs.component';
import { DeviceGroupsComponent } from './device-groups/device-groups.component';
import { ManageProgramComponent } from './manage-program/manage-program.component';
import { ManagePoliciesComponent } from './manage-policies/manage-policies.component';

const routes: Routes = [
  { path: '', redirectTo: 'programs/manageprograms', pathMatch: 'full' },
  { path: 'programs/devices', component: DevicesComponent },
  { path: 'programs/manageprograms', component: ManageProgramsComponent },
  { path: 'programs/manageprograms/:id', component: ManageProgramComponent },
  { path: 'programs/devicegroups', component: DeviceGroupsComponent },
  { path: 'programs/policies', component: ManagePoliciesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
