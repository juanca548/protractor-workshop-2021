import { $, ElementFinder } from 'protractor';

export class OrderSummaryStepPage {
  private confirmationMessage: ElementFinder;

  constructor(){
    this.confirmationMessage = $("#center_column > div > p > strong");
  }

  public async getConfirmationMessage(): Promise<string> {
    return this.confirmationMessage.getText();
  }
}
