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
    const dismissWelcome = this.page.getByLabel('Close Welcome Banner')
    const acceptCookies = this.page.getByText('Me want it!')
    const welcomeBanner = this.page.locator('div.mat-mdc-dialog-surface')

    await dismissWelcome.waitFor({ state: 'visible', timeout: 3000 }).catch(() => null)
    if (await dismissWelcome.isVisible()) {
      await dismissWelcome.click()
      await welcomeBanner.waitFor({ state: 'hidden' })
    }

    await acceptCookies.waitFor({ state: 'visible', timeout: 3000 }).catch(() => null)
    if (await acceptCookies.isVisible()) {
      await acceptCookies.click()
      await acceptCookies.waitFor({ state: 'hidden' })
    }
  }
}