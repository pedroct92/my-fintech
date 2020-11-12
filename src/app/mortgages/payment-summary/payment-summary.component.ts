import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MortgageSummary } from '@my-fintech/mortgages/mortgages.models';

@Component({
  selector: 'app-payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentSummaryComponent {

  @Input()
  summary: MortgageSummary;
}
