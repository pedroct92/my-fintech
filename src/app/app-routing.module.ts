import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentCalculatorComponent } from './mortgages/payment-calculator/payment-calculator.component';
import { NotFoundComponent } from '@my-fintech/shared/not-found/not-found.component';

const routes: Routes = [
  { path: 'mortgages-calculator', component: PaymentCalculatorComponent },
  { path: '', redirectTo: '/mortgages-calculator', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
