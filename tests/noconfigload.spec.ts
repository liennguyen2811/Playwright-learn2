const { chromium } = require('playwright'); // 1. Import trình duyệt mà bạn muốn dùng

(async () => {
  // 2. Tự launch browser
  const browser = await chromium.launch({
    headless: false, // Chạy chế độ headed để bạn có thể nhìn thấy
    devtools: true,
    slowMo: 500      // Thêm độ trễ để dễ quan sát
  });

  // 3. Tự tạo một context mới
  const context = await browser.newContext();

  // 4. Tự tạo một page mới
  const page = await context.newPage();

  // 5. Viết các hành động test của bạn
  await page.goto('https://rahulshettyacademy.com/angularpractice/shop');

  // Xác thực tiêu đề trang
  const title = await page.title();
  if (title === 'ProtoCommerce') {
    console.log('Test PASS: Tiêu đề trang chính xác.');
  } else {
    console.error(`Test FAIL: Tiêu đề trang là "${title}", nhưng mong muốn là "ProtoCommerce".`);
  }

  // 6. Đóng browser khi hoàn thành
  await browser.close();
})();
