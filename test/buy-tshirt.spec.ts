import { browser, ExpectedConditions } from 'protractor';
import {
  MenuContentPage,
  ProductListPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentStepPage,
  OrderSummaryStepPage,
} from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentStepPage: BankPaymentStepPage = new BankPaymentStepPage();
  const orderSummaryStepPage: OrderSummaryStepPage = new OrderSummaryStepPage();
  const EC = ExpectedConditions;

  describe('Open Page', () => {
    it('Open browser', async () => {
      await browser.get('http://automationpractice.com/');
    });
  });

  describe('Buy Tshirt', async () => {
    it('Open menu page', async () => {
      await browser.driver.manage().window().maximize();
      await browser.wait(EC.elementToBeClickable(menuContentPage.getgoToTshirtMenu()), 10000);
      await menuContentPage.goToTShirtMenu();
    });

    it('Select a tshirt and add to cart', async () => {
      await browser.wait(EC.elementToBeClickable(productListPage.getAddToCart()), 10000);
      await productListPage.clicAddToCart();
      await browser.wait(EC.elementToBeClickable(productAddedModalPage.getpToCheckout()), 10000);
      await productAddedModalPage.proceedToCheckOut();
    });

    it('Go to login', async () => {
      await summaryStepPage.proceedToCheckOut();
    });
  });

  describe('Login in the platform', () => {
    it('Complete login', async () => {
      await signInStepPage.fillForm('aperdomobo@gmail.com', 'WorkshopProtractor');
      await signInStepPage.signIn();
    });
  });

  describe('Select default address', () => {
    it('Accept default address', async () => {
      await addressStepPage.proceedToCheckOut();
    });

    it('Accept shipping', async () => {
      await shippingStepPage.checkTermsButton();
      await shippingStepPage.proceedToCheckOut();
    });
  });

  describe('Bank Payment', () => {
    it('Pay the cart', async () => {
      await paymentStepPage.payByCheck();
      await bankPaymentStepPage.confirmPayment();
    });

    it('Expect confirmation legal', async () => {
      await expect(orderSummaryStepPage.getConfirmationMessage())
        .toBe('Your order on My Store is complete.');
    });
  });
});
