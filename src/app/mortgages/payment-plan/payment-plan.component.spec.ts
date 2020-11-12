import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentPlanComponent } from './payment-plan.component';
import { MortgagesModule } from '@my-fintech/mortgages/mortgages.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('PaymentPlanComponent', () => {
  let component: PaymentPlanComponent;
  let fixture: ComponentFixture<PaymentPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, MortgagesModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
