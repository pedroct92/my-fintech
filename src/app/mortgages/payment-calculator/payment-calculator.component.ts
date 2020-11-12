import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PaymentCalculatorService } from '@my-fintech/mortgages/payment-calculator/payment-calculator.service';
import { Observable } from 'rxjs';
import { MortgageSummary, PaymentPlan } from '@my-fintech/mortgages/mortgages.models';
import { enterLeaveAnimation } from '@my-fintech/commons/animations';

@Component({
  selector: 'app-payment-calculator',
  templateUrl: './payment-calculator.component.html',
  styleUrls: ['./payment-calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [enterLeaveAnimation]
})
export class PaymentCalculatorComponent implements OnInit {

  summary$: Observable<MortgageSummary>;

  constructor(
      private calculatorService: PaymentCalculatorService
  ){}

  ngOnInit(): void {
    this.summary$ = this.calculatorService.summary$;
  }

  onPaymentPlanChange(paymentPlan: PaymentPlan): void {
    this.calculatorService.calc(paymentPlan);
  }

  onPaymentPlanReset(): void {
    this.calculatorService.clear();
  }
}
