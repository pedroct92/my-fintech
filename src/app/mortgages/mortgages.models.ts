import { makeNumberRange } from '../commons/commons.utils';

export interface SelectOption<T> {
  label: string;
  value: T;
}

export type PaymentFrequency = 'ACCELERATED_WEEKLY' | 'WEEKLY' | 'ACCELERATED_BI_WEEKLY' | 'BI_WEEKLY'| 'SEMI_MONTHLY'| 'MONTHLY';

export interface PaymentPlan {
  principal: number;
  rate: number;
  amortizationYears: number;
  frequency: PaymentFrequency;
  termYears: number;
}

export interface MortgageSection {
  numPayments: number;
  paidInterest: number;
  paidPrincipal: number;
  paidInTotal: number;
}

export interface MortgageSummary {
  payment: number;
  frequencyLabel: string;
  firstTerm: MortgageSection;
  allTerms: MortgageSection;
}

export function makeAmortizationYearsOptions(): Array<SelectOption<number>> {
  return makeNumberRange(30).map(i => {
    return {
      label: i === 0 ? '1 year' : `${i + 1} years`,
      value: i + 1
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

export function getFrequencyLabel(frequency: PaymentFrequency): string {
  const opt = makeFrequencyOptions().find(v => v.value === frequency);
  return opt?.label;
}

/*
* For simplicity, accelerated and non-accelerated frequencies are returning the same amount of payments per year.
* */
export function numberOfPaymentsPerYear(frequency: PaymentFrequency): number {
  switch (frequency) {
    case 'WEEKLY':
    case 'ACCELERATED_WEEKLY': return 52;
    case 'BI_WEEKLY':
    case 'ACCELERATED_BI_WEEKLY': return 26;
    case 'SEMI_MONTHLY': return 24;
    case 'MONTHLY': return 12;
    default: throw new Error(`Unsupported PaymentFrequency: ${frequency}`);
  }
}
