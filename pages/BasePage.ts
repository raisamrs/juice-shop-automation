import { type Page } from '@playwright/test'

export class BasePage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async goTo(baseURL: string, path: string = '') {
    await this.page.goto(baseURL + path, { waitUntil: 'load', timeout: 60000 })
  }

  /**
   * O Juice Shop abre banners de boas-vindas e cookies no primeiro acesso.
   * Esse helper fecha ambos caso estejam visíveis.
   */
  async dismissWelcomeBanners() {
    const dismissWelcome = this.page.getByRole('button', { name: 'Dismiss Welcome Banner' })
    const acceptCookies = this.page.getByLabel('Me want it!')

    if (await dismissWelcome.isVisible().catch(() => false)) {
      await dismissWelcome.click()
    }

    if (await acceptCookies.isVisible().catch(() => false)) {
      await acceptCookies.click()
    }
  }
}