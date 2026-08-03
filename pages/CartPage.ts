import { expect, type Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async expectProductInCart(productName: string) {
    await expect(this.page).toHaveURL(/.*cart\.html/);
    await expect(this.page.locator('[data-test="inventory-item-name"]')).toHaveText(productName);
  }
}
