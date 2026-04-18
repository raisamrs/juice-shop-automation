import { type Locator, type Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegisterPage extends BasePage {
  readonly emailInput: Locator
  readonly passwordInput: Locator
  readonly confirmPasswordInput: Locator
  readonly securityQuestionSelect: Locator
  readonly securityAnswerInput: Locator
  readonly signUpButton: Locator
  readonly registrationSuccessMessage: Locator


  constructor(page: Page) {
    super(page)
    this.emailInput = page.getByLabel('Email address field')
    this.passwordInput = page.getByLabel('Field for the password')
    this.confirmPasswordInput = page.getByLabel('Field to confirm the password')
    this.securityQuestionSelect = page.getByLabel('Selection list for the security question')
    this.securityAnswerInput = page.getByLabel('Field for the answer to the security question')
    this.signUpButton = page.getByLabel('Button to complete the registration')
    this.registrationSuccessMessage = page.getByText('Registration completed successfully')

  }
}
