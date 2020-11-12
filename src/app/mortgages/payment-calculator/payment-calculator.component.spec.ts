import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentCalculatorComponent } from './payment-calculator.component';
import { MortgagesModule } from '../mortgages.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';

describe('PaymentCalculatorComponent', () => {
  let component: PaymentCalculatorComponent;
  let fixture: ComponentFixture<PaymentCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, NgxMaskModule.forRoot(), MortgagesModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
