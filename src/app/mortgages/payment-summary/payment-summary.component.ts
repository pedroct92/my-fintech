import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentSummaryComponent {

}
