import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 30000,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000,
    trace: 'on',
    video: 'on-first-retry',
    storageState: 'playwright-auth.json',
    slowMo: 1000  // Thêm độ trễ 1000ms (1 giây) giữa mỗi action
  },
  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  ],
  reporter: 'html',
  workers: 1,
  retries: 0
};

export default config;
