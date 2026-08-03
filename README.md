# ShopSure

ShopSure is a compact QA automation portfolio project built with Playwright and TypeScript. It validates core web and REST API behaviours for public demo systems while demonstrating maintainable test architecture, clear test data, CI readiness and practical QA documentation.

## Problem Addressed

E-commerce workflows can fail in small but costly places: login access, product selection, cart accuracy, checkout validation and product detail consistency. ShopSure shows how those risks can be covered with a focused automation suite that is easy to review, run and extend.

## Test Coverage

### UI Tests

The UI suite runs against the public Sauce Demo site using Chromium:

- Successful login
- Unsuccessful login
- Add one product to the shopping cart
- Remove a product from the cart
- Add two products and verify both appear in the cart
- Complete checkout with fictional customer information
- Validate required checkout fields with missing customer information
- Verify product name and price consistency between inventory and cart

### REST API Tests

The API suite runs against the public DummyJSON API:

- `GET /products` returns status 200 and a non-empty products array
- `GET /products/1` returns status 200, product ID 1 and required product fields
- `GET /products/999999` returns status 404

## Framework Architecture

- `pages/` contains Page Object Model classes for login, inventory, cart and checkout screens.
- `fixtures/` stores reusable user data without hard-coded private credentials.
- `test-data/` stores reusable product and checkout data.
- `tests/` contains readable UI and API specs grouped by workflow.
- `docs/` contains QA documentation: test strategy, test cases and requirements traceability.
- `playwright.config.ts` defines Chromium execution, HTML reporting and failure screenshot behaviour.
- `.github/workflows/playwright.yml` runs the suite in GitHub Actions.

## Technologies

- Playwright Test
- TypeScript
- Chromium
- Node.js and npm
- GitHub Actions

## Folder Structure

```text
ShopSure/
  .github/
    workflows/
      playwright.yml
  docs/
    requirements-traceability.md
    test-cases.md
    test-strategy.md
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
  .gitignore
  package.json
  playwright.config.ts
  tsconfig.json
```

## Installation

```bash
npm install
npx playwright install chromium
```

## Commands

Run the complete suite:

```bash
npm test
```

Run only UI tests:

```bash
npm run test:ui
```

Run only REST API tests:

```bash
npm run test:api
```

Run TypeScript type-checking:

```bash
npm run typecheck
```

## HTML Reporting

The Playwright configuration generates an HTML report in `playwright-report/` after test execution.

Open the latest local report with:

```bash
npm run report
```

The report folder is intentionally excluded from git because it is generated output.

## Test Results Summary

Latest local verification:

| Check | Result |
| --- | --- |
| Complete Playwright suite | 11 passed |
| UI tests | 8 passed |
| REST API tests | 3 passed |
| TypeScript type-check | Passed |
| Lint | Not configured |

## GitHub Actions CI

The workflow in `.github/workflows/playwright.yml` runs on pushes and pull requests. It checks out the repository, installs dependencies with `npm ci`, installs Chromium with Playwright system dependencies, runs `npx playwright test`, and uploads the HTML report only when the workflow fails.

The workflow does not require secrets and does not reference local machine paths.

## Documentation

- [Test strategy](docs/test-strategy.md)
- [Test cases](docs/test-cases.md)
- [Requirements traceability](docs/requirements-traceability.md)

## Security And Cleanliness

- `.env` files, dependency folders, Playwright reports, test results, logs, coverage and build artifacts are excluded from git.
- The framework does not store private API keys or private credentials.
- Sauce Demo credentials are public demo data. The standard-user password is read from the Sauce Demo login page at runtime instead of being stored in this repository.

## Limitations

- UI tests depend on `https://www.saucedemo.com` being available and stable.
- API tests depend on `https://dummyjson.com` being available and stable.
- Chromium is the only configured browser.
- Mobile, performance, security and database testing are out of scope for this compact portfolio framework.

## Portfolio Disclaimer

ShopSure is a learning and portfolio project. It is not affiliated with Sauce Labs, Sauce Demo or DummyJSON.
