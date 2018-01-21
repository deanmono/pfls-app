import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ConfiguratorModule } from './configurator/configurator.module';
import { ComponentsModule } from './shared/components/';

import { LoginComponent } from './login/login.component';
import { HttpService } from "./shared/services/http.service";
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    ConfiguratorModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
    // ServiceModule.forRoot(),
    // StoreModule.provideStore(store)
    // Note that you must instrument after importing StoreModule
  ],
  providers: [
      HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
