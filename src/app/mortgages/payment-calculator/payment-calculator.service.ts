import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PaymentPlan } from '@my-fintech/mortgages/mortgages.models';

@Injectable({
  providedIn: 'root'
})
export class PaymentCalculatorService {

  private paymentPlanResult$ = new Subject<any>();

  calc(paymentPlan: PaymentPlan): void {
    this.paymentPlanResult$.next(paymentPlan);
  }

  clear(): void {
    this.paymentPlanResult$.next(undefined);
  }

  get result$(): Observable<any> {
    return this.paymentPlanResult$.asObservable();
  }
}
