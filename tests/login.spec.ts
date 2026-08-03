import { test } from '@playwright/test';
import { users } from '../fixtures/users';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';

test('successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await inventoryPage.expectLoaded();
});

test('unsuccessful login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(users.invalid.username, users.invalid.password);

  await loginPage.expectLoginError('Username and password do not match');
});
