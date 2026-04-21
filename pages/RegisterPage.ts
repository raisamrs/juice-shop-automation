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
    this.registrationSuccessMessage = page.getByText('Registration completed successfully. You can now log in.', { exact: true })
  }

  async register(email: string, password: string, securityQuestion: string, securityAnswer: string) {
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
    await this.confirmPasswordInput.fill(password)
    await this.securityQuestionSelect.click()
    await this.page.locator('mat-option', { hasText: securityQuestion }).click()
    await this.securityAnswerInput.fill(securityAnswer)
    await this.signUpButton.click()
  }
}
