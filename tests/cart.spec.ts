import { expect, test, type Page } from '@playwright/test';
import { users } from '../fixtures/users';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';
import { products } from '../test-data/products';
import { customers } from '../test-data/customers';

async function loginAsStandardUser(page: Page) {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, await loginPage.getPublicDemoPassword());
  await inventoryPage.expectLoaded();

  return inventoryPage;
}

test('add one product to the shopping cart', async ({ page }) => {
  const inventoryPage = await loginAsStandardUser(page);
  const cartPage = new CartPage(page);

  await inventoryPage.addProductToCart(products.backpack.name);

  await expect(inventoryPage.cartBadge).toHaveText('1');

  await inventoryPage.openCart();
  await cartPage.expectProductInCart(products.backpack.name);
});

test('remove a product from the cart', async ({ page }) => {
  const inventoryPage = await loginAsStandardUser(page);
  const cartPage = new CartPage(page);

  await inventoryPage.addProductToCart(products.backpack.name);
  await expect(inventoryPage.cartBadge).toHaveText('1');
  await inventoryPage.openCart();

  await cartPage.removeProduct(products.backpack.name);

  await cartPage.expectProductNotInCart(products.backpack.name);
  await expect(inventoryPage.cartBadge).toHaveCount(0);
});

test('add two products and verify both appear in the cart', async ({ page }) => {
  const inventoryPage = await loginAsStandardUser(page);
  const cartPage = new CartPage(page);
  const selectedProducts = [products.backpack.name, products.bikeLight.name];

  await inventoryPage.addProductToCart(products.backpack.name);
  await inventoryPage.addProductToCart(products.bikeLight.name);

  await expect(inventoryPage.cartBadge).toHaveText('2');

  await inventoryPage.openCart();
  await cartPage.expectProductsInCart(selectedProducts);
});

test('complete a successful checkout using fictional customer information', async ({ page }) => {
  const inventoryPage = await loginAsStandardUser(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await inventoryPage.addProductToCart(products.backpack.name);
  await inventoryPage.openCart();
  await cartPage.startCheckout();
  await checkoutPage.fillCustomerInformation(customers.standardCheckout);
  await checkoutPage.continueCheckout();
  await checkoutPage.expectProductInOverview(products.backpack.name);
  await checkoutPage.finishCheckout();

  await checkoutPage.expectCheckoutComplete();
});

test('validate required checkout fields using missing customer information', async ({ page }) => {
  const inventoryPage = await loginAsStandardUser(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await inventoryPage.addProductToCart(products.backpack.name);
  await inventoryPage.openCart();
  await cartPage.startCheckout();
  await checkoutPage.continueCheckout();

  await checkoutPage.expectRequiredFieldError('First Name is required');
});

test('verify product name and price remain consistent between the product page and cart', async ({ page }) => {
  const inventoryPage = await loginAsStandardUser(page);
  const cartPage = new CartPage(page);

  await inventoryPage.expectProductPrice(products.backpack.name, products.backpack.price);
  await inventoryPage.addProductToCart(products.backpack.name);
  await inventoryPage.openCart();

  await cartPage.expectProductInCart(products.backpack.name);
  await cartPage.expectProductPrice(products.backpack.name, products.backpack.price);
});
