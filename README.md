# ShopSure

ShopSure is a lightweight QA automation portfolio project using Playwright with TypeScript. Phase 2 extends the original login and cart coverage against the public Sauce Demo shopping site.

## Demo Site

- URL: https://www.saucedemo.com
- Why: it is a stable public demonstration site built for login, inventory and shopping cart automation practice.

## Installation

```bash
npm install
npx playwright install chromium
```

## Test Commands

```bash
npm test
npm run test:headed
npm run report
```

## Project Structure

```text
ShopSure/
  fixtures/
    users.ts
  pages/
    CartPage.ts
    InventoryPage.ts
    LoginPage.ts
  test-data/
    customers.ts
    products.ts
  tests/
    cart.spec.ts
    login.spec.ts
  playwright.config.ts
  tsconfig.json
  package.json
```

## What To Learn From Each File

- `package.json`: defines the project scripts and keeps dependencies limited to Playwright and TypeScript.
- `playwright.config.ts`: configures Chromium only, the Sauce Demo base URL, HTML reporting and screenshots after failed tests.
- `tsconfig.json`: gives TypeScript strict checking for the test, page object and data files.
- `fixtures/users.ts`: stores reusable user credentials separately from test logic.
- `test-data/customers.ts`: stores reusable fictional checkout customer details separately from test logic.
- `test-data/products.ts`: stores reusable product names and prices separately from test logic.
- `pages/LoginPage.ts`: models login page actions and assertions in one reusable class.
- `pages/InventoryPage.ts`: models the product inventory page and cart entry point.
- `pages/CartPage.ts`: models cart assertions after products are added.
- `tests/login.spec.ts`: contains the successful and unsuccessful login scenarios.
- `tests/cart.spec.ts`: contains the shopping cart scenario using the page objects and test data.

## Test Coverage

Included:

- Successful login
- Unsuccessful login
- Add one product to the shopping cart
- Remove a product from the cart
- Add two products and verify both appear in the cart
- Complete a successful checkout using fictional customer information
- Validate required checkout fields when customer information is missing
- Verify product name and price remain consistent between the product page and cart

Not included yet:

- API testing
- CI/CD
- Docker
- AI features
- Databases
- Additional tests
