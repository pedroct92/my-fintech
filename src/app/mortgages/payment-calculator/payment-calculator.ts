import {
  getFrequencyLabel,
  MortgageSummary,
  numberOfPaymentsPerYear,
  PaymentPlan
} from '../mortgages.models';

function calcPayment(principal: number, interest: number, numPayments: number): number {
  return principal * interest / (1 - (Math.pow(1 + interest, -numPayments)));
}

function calcInterest(rate: number, numPaymentsPerYear: number): number {
  return rate / 100 / numPaymentsPerYear;
}

function calcRemainingPrincipal(payment: number, interest: number, numPaymentsLoan: number, numPaymentsTerm: number): number {
  return payment / interest * (1 - (1 / Math.pow(1 + interest, numPaymentsLoan - numPaymentsTerm)));
}

function calcTotalPaymentsTerm(payment: number, termYears: number, numPaymentsPerYear: number): number {
  return payment * termYears * numPaymentsPerYear;
}

/*
  * Interest is being applied evey month according to the following formula:
  * https://en.wikipedia.org/wiki/Mortgage_calculator
  */
export function calcMortgageSummary(plan: PaymentPlan): MortgageSummary {
  const numPaymentsPerYear = numberOfPaymentsPerYear(plan.frequency);
  const numPaymentsPerTerm = numPaymentsPerYear * plan.termYears;
  const numPaymentsLoan = numPaymentsPerYear * plan.amortizationYears;
  const interest = calcInterest(plan.rate, numPaymentsPerYear);
  const payment = calcPayment(plan.principal, interest, numPaymentsLoan);
  const principalBalance = calcRemainingPrincipal(payment, interest, numPaymentsLoan, numPaymentsPerTerm);
  const totalPaymentsTerm = calcTotalPaymentsTerm(payment, plan.termYears, numPaymentsPerYear);
  const principalBalanceTerm = plan.principal - principalBalance;

  return {
    payment,
    frequencyLabel: getFrequencyLabel(plan.frequency),
    firstTerm: {
      numPayments: numPaymentsPerTerm,
      paidInterest: totalPaymentsTerm - principalBalanceTerm,
      paidPrincipal: principalBalanceTerm,
      paidInTotal: payment * numPaymentsPerTerm
    },
    allTerms: {
      numPayments: numPaymentsLoan,
      paidInterest: (payment * numPaymentsLoan) - plan.principal,
      paidPrincipal: plan.principal,
      paidInTotal: payment * numPaymentsLoan
    }
  };
}
