import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialCommonsModule } from '../commons/material-commons.module';
import { PaymentPlanComponent } from './payment-plan/payment-plan.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';
import { PaymentCalculatorComponent } from './payment-calculator/payment-calculator.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
    imports: [
        CommonModule, MaterialCommonsModule, NgxMaskModule
    ],
  declarations: [
    PaymentPlanComponent, PaymentSummaryComponent, PaymentCalculatorComponent
  ],
  exports: [
    PaymentPlanComponent, PaymentSummaryComponent, PaymentCalculatorComponent
  ]
})
export class MortgagesModule { }
