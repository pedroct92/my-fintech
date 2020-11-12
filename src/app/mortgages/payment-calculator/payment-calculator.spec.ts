import { calcMortgageSummary } from './payment-calculator';
import { MortgageSection, MortgageSummary, PaymentPlan } from '@my-fintech/mortgages/mortgages.models';
import {
  basePaymentPlan,
  expected3yrsTerm,
  expected200kPrincipalAmortization10yrs,
  expectedBiWeekly,
  expectedMonthly,
  expectedWeekly
} from '@my-fintech/mortgages/payment-calculator/payment-calculator.mocks';

describe('Payment Calculator tests', () => {
  [
    { name: 'MONTHLY', input: { frequency: 'MONTHLY' }, expected: expectedMonthly },
    { name: 'WEEKLY', input: { frequency: 'WEEKLY' }, expected: expectedWeekly },
    { name: 'BI_WEEKLY', input: { frequency: 'BI_WEEKLY' }, expected: expectedBiWeekly },
    { name: '200k with amortization in 10 Years', input: { principal: 200000, amortizationYears: 10 }, expected: expected200kPrincipalAmortization10yrs },
    { name: '3 years term with 2% interest', input: { termYears: 3, rate: 2 }, expected: expected3yrsTerm }
  ].forEach(t => {
    it(`should calculate summary with ${t.name}`, () => {
      const resultSummary = calcMortgageSummary(basePaymentPlan(t.input as PaymentPlan));
      verify(resultSummary, t.expected);
    });
  });

  function verify(result: MortgageSummary, expected: MortgageSummary): void {
    expect(result.payment).toBeCloseTo(expected.payment);
    expect(result.frequencyLabel).toBe(expected.frequencyLabel);
    verifySection(result.firstTerm, expected.firstTerm);
    verifySection(result.allTerms, expected.allTerms);
  }

  function verifySection(result: MortgageSection, expected: MortgageSection): void {
    expect(result.numPayments).toBe(expected.numPayments);
    expect(result.paidInterest).toBeCloseTo(expected.paidInterest);
    expect(result.paidPrincipal).toBeCloseTo(expected.paidPrincipal);
    expect(result.paidInTotal).toBeCloseTo(expected.paidInTotal);
  }
});
