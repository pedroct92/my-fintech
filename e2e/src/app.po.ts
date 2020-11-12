import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  appHeaderIsPresent(): Promise<boolean> {
    return element(by.css('app-root app-header')).isPresent() as Promise<boolean>;
  }

  mortgageCalculatorLabel(): Promise<string> {
    return element(by.css('app-root h1 span')).getText() as Promise<string>;
  }

  paymentPlanTitle(): Promise<string> {
    return element(by.css('app-payment-plan mat-card-title')).getText() as Promise<string>;
  }

  mortgagesSummaryTitle(): Promise<string> {
    return element(by.css('app-payment-summary mat-card-title')).getText() as Promise<string>;
  }

  mortgagesSectionsCount(): Promise<number> {
    return element.all(by.css('app-payment-summary table')).count() as Promise<number>;
  }

  appFooterIsPresent(): Promise<boolean> {
    return element(by.css('app-root app-footer')).isPresent() as Promise<boolean>;
  }
}
