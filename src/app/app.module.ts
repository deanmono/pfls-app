import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ConfiguratorModule } from './configurator/configurator.module';
import { ExchangeModule } from './exchange/exchange.module';
import { ComponentsModule } from './shared/components/';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ConfiguratorModule,
    ExchangeModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ComponentsModule
    // ServiceModule.forRoot(),
    // StoreModule.provideStore(store)
    // Note that you must instrument after importing StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
