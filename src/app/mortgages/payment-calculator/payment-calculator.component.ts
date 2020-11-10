import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PaymentCalculatorService } from '@my-fintech/mortgages/payment-calculator/payment-calculator.service';
import { SelectOption } from '@my-fintech/commons/commons.models';

@Component({
  selector: 'app-payment-calculator',
  templateUrl: './payment-calculator.component.html',
  styleUrls: ['./payment-calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentCalculatorComponent implements OnInit {

  years: Array<SelectOption>;
  months: Array<SelectOption>;
  termYears: Array<SelectOption>;
  frequency: Array<SelectOption>;

  constructor(
      private paymentCalculatorService: PaymentCalculatorService
  ){}

  ngOnInit(): void {
    this.years = this.paymentCalculatorService.years;
    this.months = this.paymentCalculatorService.months;
    this.termYears = this.paymentCalculatorService.termYears;
    this.frequency = this.paymentCalculatorService.frequency;
  }
}
