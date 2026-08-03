# Requirements Traceability Matrix

| Requirement ID | Requirement | Test-case ID | Automated test file | Current result |
| --- | --- | --- | --- | --- |
| REQ-001 | A valid user can log in and reach the inventory page. | TC-UI-001 | `tests/login.spec.ts` | Passed |
| REQ-002 | Invalid credentials show a clear login error. | TC-UI-002 | `tests/login.spec.ts` | Passed |
| REQ-003 | A user can add one product to the cart. | TC-UI-003 | `tests/cart.spec.ts` | Passed |
| REQ-004 | A user can remove a product from the cart. | TC-UI-004 | `tests/cart.spec.ts` | Passed |
| REQ-005 | A user can add two products and see both in the cart. | TC-UI-005 | `tests/cart.spec.ts` | Passed |
| REQ-006 | A user can complete checkout with fictional customer details. | TC-UI-006 | `tests/cart.spec.ts` | Passed |
| REQ-007 | Checkout blocks missing required customer information. | TC-UI-007 | `tests/cart.spec.ts` | Passed |
| REQ-008 | Product name and price stay consistent from inventory to cart. | TC-UI-008 | `tests/cart.spec.ts` | Passed |
| REQ-009 | Products list API returns available products. | TC-API-001 | `tests/api/products-api.spec.ts` | Passed |
| REQ-010 | Single product API returns product ID 1 with required fields. | TC-API-002 | `tests/api/products-api.spec.ts` | Passed |
| REQ-011 | Missing product API returns 404. | TC-API-003 | `tests/api/products-api.spec.ts` | Passed |
