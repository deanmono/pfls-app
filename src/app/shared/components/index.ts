import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppHeaderComponent } from './app-header/app-header.component';
import { SignupComponent } from './signup/signup.component';

export const COMPONENTS = [
    AppHeaderComponent,
    SignupComponent
];

@NgModule({
    imports: [
        RouterModule,
        CommonModule
        // TranslateModule,
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
    entryComponents: COMPONENTS
})

export class ComponentsModule { }
