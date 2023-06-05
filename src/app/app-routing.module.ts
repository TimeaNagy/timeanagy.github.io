import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AirConditionerComponent } from './air-conditioner/air-conditioner.component';

const routes: Routes = [
  { path: 'midea', component: AirConditionerComponent },
  { path: 'lg', component: AirConditionerComponent },
  { path: 'daikin', component: AirConditionerComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
