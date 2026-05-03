import { type Page, type Locator } from "@playwright/test";
import { BasePage } from "pages/BasePage";

export class LoginPage extends BasePage {

  constructor(page: Page) {
    super(page)
  }
}