import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('[data-test="title"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/.*inventory\.html/);
    await expect(this.title).toHaveText('Products');
  }

  async addProductToCart(productName: string) {
    const product = this.page
      .locator('[data-test="inventory-item"]')
      .filter({ hasText: productName });

    await product.getByRole('button', { name: 'Add to cart' }).click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}
