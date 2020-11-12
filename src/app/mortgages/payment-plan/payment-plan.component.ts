import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IFormBuilder, IFormGroup } from '@rxweb/types';
import {
  makeFrequencyOptions,
  makeAmortizationYearsOptions, makeTermYearsOptions,
  PaymentFrequency,
  PaymentPlan,
  SelectOption
} from '../mortgages.models';
import { IAbstractControl } from '@rxweb/types/reactive-form/i-abstract-control';

@Component({
  selector: 'app-payment-plan',
  templateUrl: './payment-plan.component.html',
  styleUrls: ['./payment-plan.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentPlanComponent implements OnInit, AfterViewInit {

  @Output()
  calculate = new EventEmitter<PaymentPlan>();

  @Output()
  resetSummary = new EventEmitter<void>();

  amortizationYearsOptions: Array<SelectOption<number>>;
  termYearsOptions: Array<SelectOption<number>>;
  frequencyOptions: Array<SelectOption<PaymentFrequency>>;

  fb: IFormBuilder;
  paymentPlanForm: IFormGroup<PaymentPlan>;

  constructor(
     fb: FormBuilder
  ) {
    this.fb = fb;
  }

  ngOnInit(): void {
    this.amortizationYearsOptions = makeAmortizationYearsOptions();
    this.termYearsOptions = makeTermYearsOptions();
    this.frequencyOptions = makeFrequencyOptions();
    this.paymentPlanForm = this.buildForm();
  }

  ngAfterViewInit(): void {
    this.onCalculate(); // Emits a new calculation with the default params
  }

  onCalculate(): void {
    const paymentPlan: PaymentPlan = this.paymentPlanForm.value;
    this.calculate.emit(paymentPlan);
  }

  onReset(): void {
    this.paymentPlanForm = this.buildForm();
    this.resetSummary.emit();
  }

  get principal(): IAbstractControl<PaymentPlan> {
    return this.paymentPlanForm.get('principal');
  }

  get rate(): IAbstractControl<PaymentPlan> {
    return this.paymentPlanForm.get('rate');
  }

  private buildForm(): IFormGroup<PaymentPlan> {
    return this.fb.group<PaymentPlan>({
      principal: [100000, [Validators.required, Validators.min(1), Validators.max(100000000)]],
      rate: [5, [Validators.required, Validators.min(0.01), Validators.max(100)]],
      amortizationYears: [25, Validators.required],
      frequency: ['MONTHLY', Validators.required],
      termYears: [5, Validators.required]
    });
  }
}
