import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentSummaryComponent } from './payment-summary.component';
import { MortgagesModule } from '../mortgages.module';
import { MortgageSummary } from '../mortgages.models';

describe('PaymentSummaryComponent', () => {
  let component: PaymentSummaryComponent;
  let fixture: ComponentFixture<PaymentSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MortgagesModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSummaryComponent);
    component = fixture.componentInstance;
    component.summary = { firstTerm: {}, allTerms: {} } as MortgageSummary;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
