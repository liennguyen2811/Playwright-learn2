import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('zerostep example', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  // An object with page and test must be passed into every call
  const aiArgs = { page, test };
  await ai('Enter "rahulshettyacademy" as Username', aiArgs);
  await ai('Enter "learning" as Password', aiArgs);
  await ai('Click Sign In', aiArgs);
  await page.waitForTimeout(8_000);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await ai('Click Add button associated with "Iphone X"', aiArgs);
  await page.evaluate(() => window.scrollTo(0, 0));
  await ai('Go to the checkout page', aiArgs);
  //await page.waitForTimeout(8_000);
  //await ai('Click Checkout button on screen checkout product', aiArgs);
  await page.locator('.btn-success').click();
  await page.waitForTimeout(8_000);
  //await ai('Enter India in input', aiArgs);
  await page.locator('input[class*="form-control"]').nth(0).fill('India');

  await page.waitForTimeout(8_000);
  //await ai('Select India from dropdown', aiArgs);
  // await ai('Click Terms and Conditions checkbox', aiArgs);

  //await ai('Select the checkbox', aiArgs);
  await ai('Click Purchase button', aiArgs);
  const bool = await ai('Confirm that success confirmation text is displayed', aiArgs);
  expect(bool).toEqual(true);
});
