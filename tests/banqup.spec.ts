// playwright/auth.setup.ts
import { test as setup, expect } from '@playwright/test';
const fs = require('fs');

setup('login via QR and save auth state', async ({ page }) => {
  await page.goto('https://app.test.btx.banqup.com/home');
  // Tạm dừng để bạn quét QR code và đăng nhập thủ công
  await page.pause();
  // Sau khi đăng nhập, lưu trạng thái vào file
  await page.context().storageState({ path: 'playwright-auth.json' });

  const authState = JSON.parse(fs.readFileSync('playwright-auth.json', 'utf8'));

  // Tìm token trong mảng cookies
  const tokenCookie = authState.cookies.find(cookie => cookie.name === 'token');

  if (tokenCookie) {
    console.log('--- Auth Token Found ---');
    console.log(tokenCookie.value);
    console.log('------------------------');
  } else {
    console.error('Không tìm thấy cookie có tên "token".');
  }
});
