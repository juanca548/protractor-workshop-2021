import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private mailField: ElementFinder;

  private passwordField: ElementFinder;

  private signInButton: ElementFinder;

  constructor() {
    this.mailField = $('#email');
    this.passwordField = $('#passwd');
    this.signInButton = $('#SubmitLogin > span');
  }

  public async fillForm(email = '', password = ''): Promise<void[]> {
    return Promise.all([
      this.mailField.sendKeys(email),
      this.passwordField.sendKeys(password),
    ]);
  }

  public async signIn(): Promise<void> {
    return this.signInButton.click();
  }
}
