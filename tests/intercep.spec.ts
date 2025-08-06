import { test, expect } from '@playwright/test';

test('intercept Intercom API and log response', async ({ page }) => {
  // --- Bước 1: Thiết lập Network Interception cho API cụ thể ---
  const INTERCOM_API_URL = 'https://api-iam.eu.intercom.io/messenger/web/checklists/list';
  let apiResponseData: any; // Biến để lưu trữ dữ liệu phản hồi

  // Sử dụng Promise.all để chờ cả page.goto và response của API
  const [response] = await Promise.all([
    // Lắng nghe sự kiện response
    page.waitForResponse(response =>
      response.url().includes(INTERCOM_API_URL) && response.status() === 200
    ),
    // Điều hướng đến trang web
    page.goto('https://app.test.btx.banqup.com/home')
  ]);

  // Lấy dữ liệu JSON từ phản hồi API
  apiResponseData = await response.json();

  // --- Bước 2: In dữ liệu ra console ---
  console.log(`\n--- Intercepted Intercom API Response from ${INTERCOM_API_URL} ---`);
  console.log(JSON.stringify(apiResponseData, null, 2)); // In ra JSON đẹp mắt
  console.log('------------------------------------------------------------------\n');

  // --- Bước 3: Thực hiện các hành động test khác (nếu có) ---
  // Ví dụ: click vào một phần tử sau khi trang tải xong
  await page.getByTestId('btx-app-launcher-app-purchase-invoices').click();
  await expect(page).toHaveURL(/.*purchase-invoices/);
});
