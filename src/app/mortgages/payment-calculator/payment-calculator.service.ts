import { Injectable } from '@angular/core';
import { SelectOption } from '@my-fintech/commons/commons.models';
import { makeNumberRange } from '@my-fintech/commons/commons.utils';
import { PaymentFrequency } from '@my-fintech/mortgages/mortgages.models';

@Injectable({
  providedIn: 'root'
})
export class PaymentCalculatorService {

  get years(): Array<SelectOption> {
    return makeNumberRange(30).map(i => {
      return {
        label: i === 0 ? '1 year' : `${i + 1} years`,
        value: i + 1
      };
    });
  }

  get months(): Array<SelectOption> {
    return makeNumberRange(12).map(i => {
      return {
        label: i === 0 ? '' : i === 1 ? '1 month' : `${i} months`,
        value: i
      };
    });
  }

  get termYears(): Array<SelectOption> {
    return makeNumberRange(10).map(i => {
      return {
        label: i === 0 ? '1 year' : `${i + 1} years`,
        value: i + 1
      };
    });
  }

  get frequency(): Array<SelectOption> {
    console.log(Object.keys(PaymentFrequency).find(k => k === 'MONTHLY'));
    return Object.keys(PaymentFrequency).map(frequency => {
      return {
        label: PaymentFrequency[frequency],
        value: frequency
      };
    });
  }
}
