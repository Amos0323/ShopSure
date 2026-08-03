import { expect, test } from '@playwright/test';
import { users } from '../fixtures/users';
import { CartPage } from '../pages/CartPage';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';
import { products } from '../test-data/products';

test('add one product to the shopping cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);
  await inventoryPage.expectLoaded();

  await inventoryPage.addProductToCart(products.backpack);

  await expect(inventoryPage.cartBadge).toHaveText('1');

  await inventoryPage.openCart();
  await cartPage.expectProductInCart(products.backpack);
});
