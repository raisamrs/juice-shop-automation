import { test as base, expect } from "@playwright/test";
import { RegisterPage } from "./shop/RegisterPage";
import { LoginPage } from "./shop/LoginPage";

export { expect }

export const test = base.extend<{
  registerPage: RegisterPage
  loginPage: LoginPage
}>({
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page))
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  }
})