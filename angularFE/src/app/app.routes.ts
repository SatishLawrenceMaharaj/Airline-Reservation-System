import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightSearchPageComponent } from './flight-search-page/flight-search-page.component';
import { PassengerInformationPageComponent } from './passenger-information-page/passenger-information-page.component';
import { SummaryAndPaymentPageComponent } from './summary-and-payment-page/summary-and-payment-page.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { MyTripsPageComponent } from './my-trips-page/my-trips-page.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'flight-search', component: FlightSearchPageComponent },
  { path: 'passenger-info', component: PassengerInformationPageComponent },
  { path: 'summary-payment', component: SummaryAndPaymentPageComponent },
  { path: 'success', component: SuccessPageComponent },
  { path: 'my-trips', component: MyTripsPageComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
