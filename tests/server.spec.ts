import { test, expect } from '@playwright/test';

test('health check endpoint', async ({ request }) => {
  const response = await request.get('/health');
  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  expect(body).toHaveProperty('status', 'healthy');
});

test('completion endpoint', async ({ request }) => {
  const response = await request.post('/v1/complete', {
    data: {
      prompt: 'test prompt'
    }
  });
  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  expect(body).toHaveProperty('status');
  expect(body).toHaveProperty('completion');
});
