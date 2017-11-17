import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsRoutingModule } from './programs-routing.module';
import { DevicesComponent } from './devices/devices.component';
import { DevicesService } from './devices/devices.service';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    ProgramsRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  declarations: [DevicesComponent],
  providers: [
    DevicesService
  ]
})
export class ProgramsModule { }
