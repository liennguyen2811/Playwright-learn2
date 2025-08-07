import { test, expect } from '@playwright/test';

test('navigate to purchase invoices and check content', async ({ page }) => {
  // Vì đã dùng storageState, trang đã ở trạng thái đăng nhập
  // Bạn có thể đi thẳng đến trang purchase-invoices
  await page.goto('');

  // Xác thực rằng bạn đã ở đúng trang
  await expect(page).toHaveURL(/.*purchase-invoices/);

  // Xác thực một phần tử chỉ hiển thị khi đã đăng nhập
  // (ví dụ: một tiêu đề hoặc một nút đặc trưng)
  const pageTitle = page.getByText('Purchase Invoices');
  await expect(pageTitle).toBeVisible();

  // Tiếp tục các bước test khác
  // ...
});
