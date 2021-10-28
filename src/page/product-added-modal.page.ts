import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private checkOutButton: ElementFinder;

  constructor() {
    this.checkOutButton = $('[style*="display: block;"] .button-container > a');
  }

  public async proceedToCheckOut(): Promise<void> {
    await this.checkOutButton.click();
  }

  public getpToCheckout(): ElementFinder {
    return this.checkOutButton;
  }
}
