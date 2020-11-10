import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentFrequency, PaymentPlan } from '@my-fintech/mortgages/mortgages.models';
import { CurrencyPipe } from '@angular/common';
import { SelectOption } from '@my-fintech/commons/commons.models';

@Component({
  selector: 'app-payment-plan',
  templateUrl: './payment-plan.component.html',
  styleUrls: ['./payment-plan.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentPlanComponent implements OnInit {

  @Input()
  years: Array<SelectOption>;

  @Input()
  months: Array<SelectOption>;

  @Input()
  termYears: Array<SelectOption>;

  @Input()
  frequency: Array<SelectOption>;

  paymentPlanForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private currencyPipe: CurrencyPipe
  ) { }

  ngOnInit(): void {
    this.paymentPlanForm = this.formBuilder.group({
      amount: [100000, Validators.required],
      rate: [5, Validators.required],
      periodYear: [25, Validators.required],
      periodMonth: [],
      frequency: [PaymentFrequency.MONTHLY, Validators.required],
      termYears: [5, Validators.required]
    });
  }

  onSubmit(): void {
    const paymentPlan = this.paymentPlanForm.value as PaymentPlan;
    console.warn(this.currencyPipe.transform(paymentPlan.amount));
    console.warn(paymentPlan);
  }
}
