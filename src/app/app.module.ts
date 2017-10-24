import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarriersComponent } from './carriers/carriers.component';
import { CarrierComponent } from './carrier/carrier.component';
import { ProgramComponent } from './carrier/program/program.component';

import { CarriersService } from './carriers/carriers.service';
import { CarrierService } from './carrier/carrier.service';
import { ProgramService} from './carrier/program/program.service';

import { AppRoutingModule }     from './app-routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgramAddComponent } from './carrier/program/program-add/program-add.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarriersComponent,
    CarrierComponent,
    ProgramComponent,
    ProgramAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [CarriersService,CarrierService,ProgramService],
  bootstrap: [AppComponent]
})
export class AppModule { }