import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {CarriersComponent} from '../carriers/carriers.component';
import {CarrierComponent} from '../carrier/carrier.component';
import {ProgramComponent} from '../carrier/program/program.component';
import {ProgramAddComponent} from '../carrier/program/program-add/program-add.component';


const routes: Routes = [
  { path: '', redirectTo: '/carriers', pathMatch: 'full' },
  { path: 'carriers', component: CarriersComponent },
  { path: 'carrier/:id', component: CarrierComponent },
  { path: 'carrier/program/:id', component: ProgramComponent },
  { path: 'carrier/programs/clone/:id', component: ProgramAddComponent },
  { path: 'carrier/programs/add/:cid', component: ProgramAddComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
