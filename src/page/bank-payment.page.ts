import { $, ElementFinder } from 'protractor';

export class BankPaymentStepPage{
  private confirmButton: ElementFinder;

  constructor() {
    this.confirmButton = $("#cart_navigation > button> span");
  }

  public async confirmPayment(): Promise<void> {
    await this.confirmButton.click();
  }
}
