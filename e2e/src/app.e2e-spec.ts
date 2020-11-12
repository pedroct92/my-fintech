import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display mortgages calculator page', () => {
    page.navigateTo();
    expect(page.appHeaderIsPresent()).toBeTruthy();
    expect(page.mortgageCalculatorLabel()).toEqual('Mortgages Payment Calculator');
    expect(page.paymentPlanTitle()).toEqual('Payment Plan');
    expect(page.mortgagesSummaryTitle()).toEqual('Your Mortgage Details');
    expect(page.mortgagesSectionsCount()).toEqual(2);
    expect(page.appFooterIsPresent()).toBeTruthy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
