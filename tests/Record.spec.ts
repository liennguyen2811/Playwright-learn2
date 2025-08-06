import { test, expect } from '@playwright/test';

test('intercept API to get phone data and log', async ({ page }) => {
  // --- Thiết lập Network Interception ---
  // Chặn tất cả các yêu cầu mạng và kiểm tra phản hồi JSON
  page.on('response', async response => {
    // Kiểm tra nếu response là JSON và có vẻ là dữ liệu sản phẩm
    const contentType = response.headers()['content-type'];
    if (contentType && contentType.includes('application/json') && response.url().includes('/api/')) {
      try {
        const data = await response.json();
        console.log(`\n--- API Response from ${response.url()} ---`);
        console.log(data); // In toàn bộ dữ liệu JSON ra console
        console.log('-------------------------------------------\n');

        // Nếu bạn biết cấu trúc, bạn có thể lọc ra tên điện thoại
        if (Array.isArray(data) && data.every(item => item.name && item.price)) {
          const phoneNames = data.map(item => item.name);
          console.log(`\n--- Tên điện thoại từ API: ---`);
          phoneNames.forEach(name => console.log(`- ${name}`));
          console.log('-------------------------------\n');
        }
      } catch (e) {
        // Bỏ qua lỗi nếu không phải JSON hợp lệ
      }
    }
  });

  // --- Các bước test của bạn ---
  await page.goto('https://rahulshettyacademy.com/angularpractice/shop');
  await page.getByRole('link', { name: 'iphone X' }).click();
  await page.locator('app-card').filter({ hasText: 'iphone X $24.99 Lorem ipsum' }).getByRole('button').click();
  await page.locator('app-card').filter({ hasText: 'iphone X $24.99 Lorem ipsum' }).getByRole('button').click();
  await page.getByText('Checkout ( 2 ) (current)').click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('textbox', { name: 'Please choose your delivery' }).click();
  await page.getByRole('textbox', { name: 'Please choose your delivery' }).fill('Inidia');
  await page.getByRole('button', { name: 'Purchase' }).click();
});
