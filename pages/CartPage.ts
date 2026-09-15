import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async expectProductInCart(productName: string) {
    await expect(this.page).toHaveURL(/.*cart\.html/);
    await expect(this.productNames.filter({ hasText: productName })).toHaveCount(1);
  }

  async expectProductsInCart(productNames: string[]) {
    await expect(this.page).toHaveURL(/.*cart\.html/);
    await expect(this.productNames).toHaveText(productNames);
  }

  async expectProductPrice(productName: string, price: string) {
    await expect(this.productByName(productName).locator('[data-test="inventory-item-price"]')).toHaveText(price);
  }

  async removeProduct(productName: string) {
    await this.productByName(productName).getByRole('button', { name: 'Remove' }).click();
  }

  async expectProductNotInCart(productName: string) {
    await expect(this.productNames.filter({ hasText: productName })).toHaveCount(0);
  }

  async startCheckout() {
    await this.checkoutButton.click();
  }

  private get productNames() {
    return this.page.locator('[data-test="inventory-item-name"]');
  }

  private productByName(productName: string) {
    return this.page
      .locator('[data-test="inventory-item"]')
      .filter({ hasText: productName });
  }
}
