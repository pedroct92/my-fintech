import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PaymentCalculatorService } from '@my-fintech/mortgages/payment-calculator/payment-calculator.service';
import { Observable } from 'rxjs';
import { PaymentPlan } from '@my-fintech/mortgages/mortgages.models';
import { enterLeaveAnimation } from '@my-fintech/commons/animations';

@Component({
  selector: 'app-payment-calculator',
  templateUrl: './payment-calculator.component.html',
  styleUrls: ['./payment-calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [enterLeaveAnimation]
})
export class PaymentCalculatorComponent implements OnInit {

  result$: Observable<any>; // TODO def type

  constructor(
      private calculatorService: PaymentCalculatorService
  ){}

  ngOnInit(): void {
    this.result$ = this.calculatorService.result$;
  }

  onPaymentPlanChange(paymentPlan: PaymentPlan): void {
    this.calculatorService.calc(paymentPlan);
  }

  onPaymentPlanReset(): void {
    this.calculatorService.clear();
  }
}
