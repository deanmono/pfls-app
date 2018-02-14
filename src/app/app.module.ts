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

import { ComponentsModule } from './shared/components/';

import { HttpService } from "./shared/services/http.service";
import { ProductsService } from "./shared/services/products.service";
import { AuthService } from "./shared/services/auth.service";
import { HomeComponent } from './home/home.component';
import { ConfigService } from "./shared/services/config.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
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
      HttpService,
      ProductsService,
      AuthService,
      ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
