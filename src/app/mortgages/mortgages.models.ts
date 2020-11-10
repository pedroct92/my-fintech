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

export enum PaymentFrequency {
  ACCELERATED_WEEKLY = 'Accelerated Weekly',
  WEEKLY = 'Weekly',
  ACCELERATED_BI_WEEKLY = 'Accelerated Bi-Weekly',
  BI_WEEKLY = 'Bi-Weekly (every two weeks)',
  SEMI_MONTHLY = 'Semi-monthly (24x per year)',
  MONTHLY = 'Monthly (12x per year)'
}
