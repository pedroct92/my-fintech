import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  getFrequencyLabel,
  MortgageSummary,
  numberOfPaymentsPerYear,
  PaymentPlan
} from '@my-fintech/mortgages/mortgages.models';

@Injectable({
  providedIn: 'root'
})
export class PaymentCalculatorService {

  private mortgageSummary$ = new Subject<MortgageSummary>();

  /*
  * For simplicity, the interest is being applied evey month according to the following formula:
  * https://en.wikipedia.org/wiki/Mortgage_calculator
  */
  calc(plan: PaymentPlan): void {
    const paymentsPerYear = numberOfPaymentsPerYear(plan.frequency);
    const allTermsNumPayments = paymentsPerYear * plan.amortizationYears;
    const interest = plan.rate / 100 / paymentsPerYear;
    const payment = plan.principal * interest / (1 - (Math.pow(1 + interest, - allTermsNumPayments)));

    const summary: MortgageSummary = {
      payment,
      frequencyLabel: getFrequencyLabel(plan.frequency),
      firstTerm: {
        numPayments: paymentsPerYear * plan.termYears,
        paidInterest: 0, // TODO
        paidPrincipal: 0, // TODO
        paidInTotal: payment * plan.termYears * paymentsPerYear
      },
      allTerms: {
        numPayments: allTermsNumPayments,
        paidInterest: (payment * allTermsNumPayments) - plan.principal,
        paidPrincipal: plan.principal,
        paidInTotal: payment * allTermsNumPayments
      }
    };

    this.mortgageSummary$.next(summary);
  }

  clear(): void {
    this.mortgageSummary$.next(undefined);
  }

  get summary$(): Observable<any> {
    return this.mortgageSummary$.asObservable();
  }
}
