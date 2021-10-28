import { $, ElementFinder } from 'protractor';

export class AddressStepPage{
  private checkOutButton: ElementFinder;

  constructor(){
    this.checkOutButton = $("#center_column > form > p > button > span");
  }

  public async proceedToCheckOut(): Promise<void> {
    await this.checkOutButton.click();
  }
}
