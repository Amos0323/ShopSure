# ShopSure

ShopSure is a compact Playwright TypeScript QA automation portfolio project for the public Sauce Demo shopping site. It shows how to structure reliable UI automation with page objects, reusable fixtures and clear test data.

## QA Problem

The project validates common e-commerce risks: login access, cart accuracy, checkout validation and product detail consistency. It keeps the framework small enough to review quickly while still showing professional QA habits.

## Skills Demonstrated

- Playwright UI automation with TypeScript
- Page Object Model design
- Reusable fixtures and test data
- Clear assertions and readable test scenarios
- GitHub Actions test execution
- QA documentation and traceability

## Technology Stack

- TypeScript
- Playwright Test
- Chromium
- Node.js and npm
- GitHub Actions

## Project Structure

```text
ShopSure/
  .github/workflows/playwright.yml
  docs/
    test-strategy.md
    test-cases.md
    requirements-traceability.md
  fixtures/
    users.ts
  pages/
    CartPage.ts
    CheckoutPage.ts
    InventoryPage.ts
    LoginPage.ts
  test-data/
    customers.ts
    products.ts
  tests/
    api/
      products-api.spec.ts
    cart.spec.ts
    login.spec.ts
```

## UI Test Coverage

- Successful login
- Unsuccessful login
- Add one product to the shopping cart
- Remove a product from the cart
- Add two products and verify both appear in the cart
- Complete checkout with fictional customer information
- Validate required checkout fields with missing customer information
- Verify product name and price consistency between inventory and cart

## API Test Coverage

- GET `/products` returns status 200 and a non-empty products array
- GET `/products/1` returns status 200, product ID 1 and required product fields
- GET `/products/999999` returns status 404

## Local Setup

```bash
npm install
npx playwright install chromium
```

## Test Commands

```bash
npm test
npm run test:ui
npm run test:api
npm run typecheck
```

Open the latest HTML report:

```bash
npm run report
```

## GitHub Actions

The workflow in `.github/workflows/playwright.yml` runs on pushes and pull requests. It installs dependencies with `npm ci`, installs Chromium with Playwright system dependencies, runs all Playwright tests and uploads the HTML report only when tests fail.

## Documentation

- [Test strategy](docs/test-strategy.md)
- [Test cases](docs/test-cases.md)
- [Requirements traceability](docs/requirements-traceability.md)

## Limitations

- Tests depend on `https://www.saucedemo.com` being online and stable.
- API tests depend on `https://dummyjson.com` being online and stable.
- Chromium is the only configured browser.
- Mobile-app, performance, security and database testing are out of scope.

## Future Improvements

- Add tagged smoke/regression suites.
- Add cross-browser testing when the portfolio scope expands.

## Portfolio Disclaimer

ShopSure is a learning and portfolio project. It is not affiliated with Sauce Labs or the Sauce Demo website.
