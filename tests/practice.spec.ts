import { test, expect } from '@playwright/test';

test('Find Discount Price of Potato', async ({ page }) => {
  // Navigate to the URL
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');

  // Wait until the table is visible
  await page.waitForSelector('table.table-bordered');

  // Locate the row containing "Potato" and get the discount price
  const discountPrice = await page.locator('table.table-bordered tbody tr', { hasText: 'Tomato' }).locator('td').nth(2).innerText();

  console.log(`The discount price of Potato is: ${discountPrice}`);
});
