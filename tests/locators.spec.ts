const { test, expect } = require('@playwright/test');

test('add specific product to cart', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/angularpractice/shop');

  // Tìm tất cả các card sản phẩm
  const allProducts = page.locator('div.card');
  const count = await allProducts.count();

  // Lặp qua từng sản phẩm
  for (let i = 0; i < count; i++) {
    const product = allProducts.nth(i);
    const productName = await product.locator('.card-title a').textContent();

    console.log(productName);

    // Nếu tên sản phẩm là "iphone X", click vào nút "Add"
    if (productName.includes('iphone X')) {
      await product.locator('button').click();
      console.log('Đã thêm iphone X vào giỏ hàng.');
      break; // Thoát vòng lặp sau khi tìm thấy
    }
  }

  // Kiểm tra xem giỏ hàng đã có sản phẩm chưa (ví dụ: nút "Checkout" có số 1)
  const cartButton = page.locator('li.nav-item.active a.nav-link');
  await expect(cartButton).toContainText('1');

  await page.waitForTimeout(5000); //
});
