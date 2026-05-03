import { type Page, type Locator } from "@playwright/test";
import { BasePage } from "pages/BasePage";

export class UserManagementPage extends BasePage {

  constructor(page: Page) {
    super(page)
  }
}
