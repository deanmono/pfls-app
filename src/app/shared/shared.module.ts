import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AppHeaderComponent } from './app-header/app-header.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [AppHeaderComponent],
  exports: [AppHeaderComponent]
})
export class SharedModule { }
