import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DevicesComponent } from './devices/devices.component';
import { ManageProgramsComponent} from './manage-programs/manage-programs.component';

const routes: Routes = [
  { path: '', redirectTo: 'programs/devices', pathMatch: 'full' },
  { path: 'programs/devices', component: DevicesComponent },
  { path: 'programs/manageprograms', component: ManageProgramsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
