import { test as base, expect } from "@playwright/test";
import { RegisterPage } from "./shop/RegisterPage";

export { expect }

export const test = base.extend<{
  registerPage: RegisterPage
}>({
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page))
  }
})