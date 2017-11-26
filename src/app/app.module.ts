import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BackandService } from '@backand/angular2-sdk';

import { ConfiguratorModule } from './configurator/configurator.module';
import { ExchangeModule } from './exchange/exchange.module';
import { ComponentsModule } from './shared/components/';
import { ProgramsModule } from './programs/programs.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    ConfiguratorModule,
    ExchangeModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ComponentsModule,
    ProgramsModule,
    FormsModule,
    ReactiveFormsModule
    // ServiceModule.forRoot(),
    // StoreModule.provideStore(store)
    // Note that you must instrument after importing StoreModule
  ],
  providers: [BackandService],
  bootstrap: [AppComponent]
})
export class AppModule {}
