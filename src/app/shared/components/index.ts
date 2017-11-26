import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppHeaderComponent } from './app-header/app-header.component';
import { SignupComponent } from './signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


export const COMPONENTS = [
    AppHeaderComponent,
    SignupComponent
];

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        NgbModule
        // TranslateModule,
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})

export class ComponentsModule { }
