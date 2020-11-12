import { MortgageSummary, PaymentPlan } from '@my-fintech/mortgages/mortgages.models';

export function basePaymentPlan(plan: PaymentPlan): PaymentPlan {
    const base = { principal: 100000, rate: 5, amortizationYears: 25, frequency: 'MONTHLY', termYears: 5 };
    return Object.assign(base, plan);
}

export const expectedMonthly: MortgageSummary = {
    payment: 584.59,
    frequencyLabel: 'Monthly (12x per year)',
    firstTerm: { numPayments: 60, paidInterest: 23655.5915, paidPrincipal: 11419.8109, paidInTotal: 35075.40 },
    allTerms: { numPayments: 300, paidInterest: 75377.01, paidPrincipal: 100000, paidInTotal: 175377.01 }
};

export const expectedWeekly: MortgageSummary = {
    payment: 134.7970,
    frequencyLabel: 'Weekly',
    firstTerm: { numPayments: 260, paidInterest: 23638.7529, paidPrincipal: 11408.4796, paidInTotal: 35047.23 },
    allTerms: { numPayments: 1300, paidInterest: 75236.16, paidPrincipal: 100000, paidInTotal: 175236.16 }
};

export const expectedBiWeekly: MortgageSummary = {
    payment: 269.6591,
    frequencyLabel: 'Bi-Weekly (every two weeks)',
    firstTerm: { numPayments: 130, paidInterest: 23643.8022, paidPrincipal: 11411.8832, paidInTotal: 35055.68 },
    allTerms: { numPayments: 650, paidInterest: 75278.4274, paidPrincipal: 100000, paidInTotal: 175278.4274 }
};

export const expected200kPrincipalAmortization10yrs: MortgageSummary = {
    payment: 2121.3103,
    frequencyLabel: 'Monthly (12x per year)',
    firstTerm: { numPayments: 60, paidInterest: 39688.3496, paidPrincipal: 87590.2686, paidInTotal: 127278.6182 },
    allTerms: { numPayments: 120, paidInterest: 54557.2365, paidPrincipal: 200000, paidInTotal: 254557.2365 }
};

export const expected3yrsTerm: MortgageSummary = {
    payment: 423.8543,
    frequencyLabel: 'Monthly (12x per year)',
    firstTerm: { numPayments: 36, paidInterest: 5724.7811, paidPrincipal: 9533.9750, paidInTotal: 15258.7561 },
    allTerms: { numPayments: 300, paidInterest: 27156.3015, paidPrincipal: 100000, paidInTotal: 127156.3015 }
};

