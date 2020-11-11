import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  makeFrequencyOptions,
  makePeriodMonthsOptions,
  makePeriodYearsOptions, makeTermYearsOptions,
  PaymentFrequency,
  PaymentPlan,
  SelectOption
} from '@my-fintech/mortgages/mortgages.models';

@Component({
  selector: 'app-payment-plan',
  templateUrl: './payment-plan.component.html',
  styleUrls: ['./payment-plan.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentPlanComponent implements OnInit {

  @Output()
  calculate = new EventEmitter<PaymentPlan>();

  @Output()
  reset = new EventEmitter<void>();

  periodYears: Array<SelectOption<number>>;
  periodMonths: Array<SelectOption<number>>;
  termYears: Array<SelectOption<number>>;
  frequency: Array<SelectOption<PaymentFrequency>>;

  paymentPlanForm: FormGroup;

  constructor(
      private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.periodYears = makePeriodYearsOptions();
    this.periodMonths = makePeriodMonthsOptions();
    this.termYears = makeTermYearsOptions();
    this.frequency = makeFrequencyOptions();
    this.paymentPlanForm = this.buildForm();
  }

  onCalculate(): void {
    const paymentPlan = this.paymentPlanForm.value as PaymentPlan;
    this.calculate.emit(paymentPlan);
  }

  onReset(): void {
    this.paymentPlanForm = this.buildForm();
    this.reset.emit();
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      amount: [100000, Validators.required],
      rate: [5, Validators.required],
      periodYear: [25, Validators.required],
      periodMonth: [],
      frequency: ['MONTHLY', Validators.required],
      termYears: [5, Validators.required]
    });
  }
}
