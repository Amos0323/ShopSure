import { expect, type Locator, type Page } from '@playwright/test';

type CustomerInformation = {
  firstName: string;
  lastName: string;
  postalCode: string;
};

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly errorMessage: Locator;
  readonly completeHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.errorMessage = page.locator('[data-test="error"]');
    this.completeHeader = page.locator('[data-test="complete-header"]');
  }

  async fillCustomerInformation(customer: CustomerInformation) {
    await this.firstNameInput.fill(customer.firstName);
    await this.lastNameInput.fill(customer.lastName);
    await this.postalCodeInput.fill(customer.postalCode);
  }

  async continueCheckout() {
    await this.continueButton.click();
  }

  async expectRequiredFieldError(message: string) {
    await expect(this.errorMessage).toContainText(message);
  }

  async expectProductInOverview(productName: string) {
    await expect(this.page.locator('[data-test="inventory-item-name"]')).toContainText(productName);
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async expectCheckoutComplete() {
    await expect(this.page).toHaveURL(/.*checkout-complete\.html/);
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }
}
