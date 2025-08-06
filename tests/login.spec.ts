import { test, expect } from '@playwright/test';

test('complete shopping flow - login, select iPhone X and checkout', async ({ page }) => {
  // Step 1: Login
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await expect(page).toHaveTitle(/LoginPage Practise/);

  await page.locator('#username').fill('rahulshettyacademy');
  await page.locator('#password').fill('learning');
  await page.locator('#signInBtn').click();

  // Wait for navigation to shop page
  await page.waitForURL('**/angularpractice/shop');
  await expect(page).toHaveURL(/.*shop/);


  // Step 2: Select iPhone X
  // Wait for products to load
  const products = page.locator('.card-body');
  await products.first().waitFor();

  // Find iPhone X and add to cart
  const cardCount = await products.count();
  for (let i = 0; i < cardCount; i++) {
    const card = products.nth(i);
    // First wait for the card content to be visible
    await card.waitFor({ state: 'visible' });


    // Get the heading text directly
    const heading = card.locator('h4');
    const headingText = await heading.textContent();
    console.log('Product heading:', headingText);  // For debugging

    if (headingText && headingText.toLowerCase().includes('iphone x')) {
      // Click Add button using XPath that finds button in card containing iPhone
      const xpath = " //app-card[.//h4/a[contains(text(), 'iphone X')]]//button[contains(text(), 'Add')]";
      await page.locator(xpath).scrollIntoViewIfNeeded();
      await page.locator(xpath).click({ force: true });

      await page.locator(xpath).click({
        timeout: 30000,
        force: true
      });

      await page.waitForTimeout(1000); // Wait a bit after click
      break;
    }
  }  // Wait for item to be added to cart
  // await page.waitForSelector('a.nav-link.btn-primary');

  // Step 3: Go to Checkout
  // Click on Checkout button
  await page.locator('a.nav-link.btn-primary').click();
  await page.waitForTimeout(1000);

  // Verify product in cart
  const cartProduct = page.locator('h4.media-heading a');
  await expect(cartProduct).toContainText('iphone X');

  // Verify price
  const price = page.locator('tr td:nth-child(4) strong');
  await expect(price).toBeVisible();

  // Click Checkout button
  await page.locator('.btn-success').click();

  // Step 4: Fill delivery details
  await page.locator('input[class*="form-control"]').nth(0).fill('India'); // Country
  //await page.locator('input[class*="form-control"]').nth(1).fill('12345'); // Postal Code

  // Step 5: Complete purchase
  await page.locator('input[type="submit"]').click();

  // Verify success message
  await expect(page.locator('.alert-success')).toContainText('Success');
});
