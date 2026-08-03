# ShopSure Test Strategy

## Project Scope

ShopSure is a Playwright TypeScript portfolio project that automates selected UI journeys on the public Sauce Demo shopping site.

## Testing Objectives

- Validate core login, cart and checkout behavior through repeatable browser tests.
- Demonstrate clean Page Object Model usage with reusable fixtures and test data.
- Keep the framework small, readable and suitable for portfolio review.

## UI and API Coverage

- UI coverage: login success, login failure, cart add/remove, multiple cart items, checkout validation, successful checkout and product name/price consistency.
- API coverage: DummyJSON product list, single product and missing product responses.

## Test Types

- End-to-end UI tests using Playwright and Chromium.
- API tests using Playwright's built-in request fixture.
- TypeScript static checking.

## Test Environment

- Target site: `https://www.saucedemo.com`
- Target API: `https://dummyjson.com`
- Browser: Chromium only
- Runtime: Node.js with npm
- Reports: Playwright HTML report

## Entry Criteria

- Dependencies installed with `npm ci` or `npm install`.
- Playwright Chromium installed.
- Sauce Demo is reachable.

## Exit Criteria

- All Playwright tests pass.
- TypeScript checking passes.
- GitHub Actions workflow YAML is present and syntactically parseable as YAML.

## Risks and Limitations

- Tests depend on a public third-party demo site.
- Test data and UI selectors may change outside this project.
- Only Chromium is covered.

## Out-of-Scope Testing

- API testing
- Mobile-app testing
- Cross-browser testing
- Performance testing
- Security testing
- Database testing
