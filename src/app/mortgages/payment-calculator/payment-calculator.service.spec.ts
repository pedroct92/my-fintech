import { TestBed } from '@angular/core/testing';
import { PaymentCalculatorService } from './payment-calculator.service';
import { take } from 'rxjs/operators';
import { MortgageSection, MortgageSummary, PaymentPlan } from '@my-fintech/mortgages/mortgages.models';
import {
  basePaymentPlan,
  expected3yrsTerm,
  expected200kPrincipalAmortization10yrs,
  expectedBiWeekly,
  expectedMonthly,
  expectedWeekly
} from '@my-fintech/mortgages/payment-calculator/payment-calculator.mocks';

describe('PaymentCalculatorService', () => {
  let service: PaymentCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentCalculatorService);
  });

  [
    { name: 'MONTHLY', input: { frequency: 'MONTHLY' }, expected: expectedMonthly },
    { name: 'WEEKLY', input: { frequency: 'WEEKLY' }, expected: expectedWeekly },
    { name: 'BI_WEEKLY', input: { frequency: 'BI_WEEKLY' }, expected: expectedBiWeekly },
    { name: '200k with amortization in 10 Years', input: { principal: 200000, amortizationYears: 10 }, expected: expected200kPrincipalAmortization10yrs },
    { name: '3 years term with 2% interest', input: { termYears: 3, rate: 2 }, expected: expected3yrsTerm },
  ].forEach(t => {
    it(`should calculate summary with ${t.name}`, (done) => {
      service.summary$.subscribe(v => {
        verify(v, t.expected);
        done();
      });
      service.calc(basePaymentPlan(t.input as PaymentPlan));
    });
  });

  it('should emit empty mortgageSummary on clear', (done) => {
    service.summary$
        .pipe(take(1))
        .subscribe(v => {
          expect(v).toBeUndefined();
          done();
        });
    service.clear();
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
