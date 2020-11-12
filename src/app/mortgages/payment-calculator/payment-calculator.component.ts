import { ChangeDetectionStrategy, Component } from '@angular/core';
import { calcMortgageSummary } from './payment-calculator';
import { MortgageSummary, PaymentPlan } from '../mortgages.models';
import { enterLeaveAnimation } from '../../commons/animations';

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
