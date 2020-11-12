import { TestBed } from '@angular/core/testing';
import { PaymentCalculatorService } from './payment-calculator.service';

describe('PaymentCalculatorService', () => {
  let service: PaymentCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
