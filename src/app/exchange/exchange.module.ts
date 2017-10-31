import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeRoutingModule } from './exchange-routing.module';

import { CarriersComponent } from './carriers/carriers.component';
import { CarrierComponent } from './carrier/carrier.component';
import { ProgramComponent } from './carrier/program/program.component';

import { CarriersService } from './carriers/carriers.service';
import { CarrierService } from './carrier/carrier.service';
import { ProgramService} from './carrier/program/program.service';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { ProgramAddComponent } from './carrier/program/program-add/program-add.component';


@NgModule({
  imports: [
    CommonModule,
    ExchangeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [
    CarriersComponent,
    CarrierComponent,
    ProgramComponent,
    ProgramAddComponent
  ],
  providers: [
    CarriersService,
    CarrierService,
    ProgramService
  ]
})
export class ExchangeModule { }
