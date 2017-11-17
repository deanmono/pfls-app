import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DevicesComponent } from './devices/devices.component';

const routes: Routes = [
  { path: '', redirectTo: 'programs/devices', pathMatch: 'full' },
  { path: 'programs/devices', component: DevicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
