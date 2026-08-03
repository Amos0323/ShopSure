import { expect, test } from '@playwright/test';

const apiBaseUrl = 'https://dummyjson.com';

test('GET /products returns status 200 and a non-empty products array', async ({ request }) => {
  const response = await request.get(`${apiBaseUrl}/products`);
  const body = await response.json();

  expect(response.status()).toBe(200);
  expect(Array.isArray(body.products)).toBe(true);
  expect(body.products.length).toBeGreaterThan(0);
});

test('GET /products/1 returns status 200, product ID 1 and required product fields', async ({ request }) => {
  const response = await request.get(`${apiBaseUrl}/products/1`);
  const product = await response.json();

  expect(response.status()).toBe(200);
  expect(product.id).toBe(1);
  expect(product.title).toEqual(expect.any(String));
  expect(product.description).toEqual(expect.any(String));
  expect(product.price).toEqual(expect.any(Number));
  expect(product.category).toEqual(expect.any(String));
});

test('GET /products/999999 returns status 404', async ({ request }) => {
  const response = await request.get(`${apiBaseUrl}/products/999999`);

  expect(response.status()).toBe(404);
});
