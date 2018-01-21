import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ArbitrageComponent } from "./arbitrage/arbitrage.component";

const routes: Routes = [
    { path: 'arbitrage', component: ArbitrageComponent },
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
