import { defineConfig, devices } from '@playwright/test'

import dotenv from 'dotenv'
import path from 'path'

const rootDir = typeof __dirname !== 'undefined' ? __dirname : process.cwd()
dotenv.config({ path: path.resolve(rootDir, '.env') })


export default defineConfig({
  testDir: './tests/ui',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI
    ? [['html'], ['json', { outputFile: 'test-results/results.json' }], ['junit', { outputFile: 'test-results/junit.xml' }]]
    : 'html',
  timeout: 60000,
  use: {
    baseURL: process.env.JUICE_SHOP_BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
})
