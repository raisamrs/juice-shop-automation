import { type Page, type Locator } from "@playwright/test";
import { BasePage } from "pages/BasePage";

export class AdminLoginPage extends BasePage {

  constructor(page: Page) {
    super(page)
  }
}
