import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByCheckButton: ElementFinder;

  constructor() {
    this.payByCheckButton = $("#HOOK_PAYMENT > div:nth-child(1) > div > p > a");
  }

  public async payByCheck(): Promise<void> {
    await this.payByCheckButton.click();
  }

}
