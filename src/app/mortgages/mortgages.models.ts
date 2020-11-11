import { makeNumberRange } from '@my-fintech/commons/commons.utils';

export interface SelectOption<T> {
  label: string;
  value: T;
}

export type PaymentFrequency = 'ACCELERATED_WEEKLY' | 'WEEKLY' | 'ACCELERATED_BI_WEEKLY' | 'BI_WEEKLY'| 'SEMI_MONTHLY'| 'MONTHLY';

export interface PaymentPlan {
  amount: number;
  rate: number;
  period: AmortizationPeriod;
  frequency: PaymentFrequency;
  termYears: number;
}

export interface AmortizationPeriod {
  years: number;
  months: number;
}

export function makePeriodYearsOptions(): Array<SelectOption<number>> {
  return makeNumberRange(30).map(i => {
    return {
      label: i === 0 ? '1 year' : `${i + 1} years`,
      value: i + 1
    };
  });
}

export function makePeriodMonthsOptions(): Array<SelectOption<number>>  {
  return makeNumberRange(12).map(i => {
    return {
      label: i === 0 ? '' : i === 1 ? '1 month' : `${i} months`,
      value: i
    };
  });
}

export function makeTermYearsOptions(): Array<SelectOption<number>> {
  return makeNumberRange(10).map(i => {
    return {
      label: i === 0 ? '1 year' : `${i + 1} years`,
      value: i + 1
    };
  });
}

export function makeFrequencyOptions(): Array<SelectOption<PaymentFrequency>> {
  return [
    { label: 'Accelerated Weekly', value: 'ACCELERATED_WEEKLY' },
    { label: 'Weekly', value: 'WEEKLY'},
    { label: 'Accelerated Bi-Weekly', value: 'ACCELERATED_BI_WEEKLY' },
    { label: 'Bi-Weekly (every two weeks)', value: 'BI_WEEKLY' },
    { label: 'Semi-monthly (24x per year)', value: 'SEMI_MONTHLY' },
    { label: 'Monthly (12x per year)', value: 'MONTHLY' },
  ];
}
