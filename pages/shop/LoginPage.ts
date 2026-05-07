import { type Page, type Locator } from "@playwright/test";
import { BasePage } from "pages/BasePage";

export class LoginPage extends BasePage {
  readonly accountButton: Locator
  readonly loginButton: Locator
  readonly emailInput: Locator
  readonly passwordInput: Locator
  readonly rememberMeCheckbox: Locator
  readonly submitButton: Locator
  readonly buttonLoginWithGoogle: Locator
  readonly buttonGoToProfile: Locator

  constructor(page: Page) {
    super(page)
    this.accountButton = page.getByLabel('Show/hide account menu')
    this.loginButton = page.getByLabel('Go to login page')
    this.emailInput = page.getByLabel('Text field for the login email')
    this.passwordInput = page.getByLabel('Text field for the login password')
    this.submitButton = page.locator('button[aria-label="Login"]')
    this.rememberMeCheckbox = page.getByLabel('Checkbox to stay logged in or not logged in')
    this.buttonLoginWithGoogle = page.getByLabel('Login with Google')
    this.buttonGoToProfile = page.getByRole('menuitem', { name: 'Go to user profile' })
  }
}