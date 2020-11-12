import { ChangeDetectionStrategy, Component } from '@angular/core';
import { calcMortgageSummary } from '@my-fintech/mortgages/payment-calculator/payment-calculator';
import { MortgageSummary, PaymentPlan } from '@my-fintech/mortgages/mortgages.models';
import { enterLeaveAnimation } from '@my-fintech/commons/animations';

@Component({
  selector: 'app-payment-calculator',
  templateUrl: './payment-calculator.component.html',
  styleUrls: ['./payment-calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [enterLeaveAnimation]
})
export class PaymentCalculatorComponent {

  summary: MortgageSummary;

  onPaymentPlanChange(paymentPlan: PaymentPlan): void {
    this.summary = calcMortgageSummary(paymentPlan);
  }

  onPaymentPlanReset(): void {
    this.summary = undefined;
  }
}
