import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private checkOutButton: ElementFinder;

  constructor() {
    this.checkOutButton = $('.cart_navigation span');
  }

  public async proceedToCheckOut(): Promise<void> {
    await this.checkOutButton.click();
  }
}
