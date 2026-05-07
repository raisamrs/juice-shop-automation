import { test, expect } from '../../../pages/base'

const baseURL = process.env.JUICE_SHOP_BASE_URL as string
const loginPath = '/#/login'
const VALID_USER = {
  email: process.env.JUICE_SHOP_USER_EMAIL!,
  password: process.env.JUICE_SHOP_USER_PASSWORD!
}

test.describe('Login e Autenticação', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goTo(baseURL, loginPath)
    await loginPage.dismissWelcomeBanners()
  })

    test('Login com sucesso usando credenciais válidas', async ({ loginPage }) => {
      await loginPage.emailInput.fill(VALID_USER.email)
      await loginPage.passwordInput.fill(VALID_USER.password)
      await loginPage.submitButton.click()
      await loginPage.accountButton.click()
      await expect(loginPage.buttonGoToProfile).toBeVisible()
    })

    test('Login com sucesso marcando "Lembrar de mim"', async ({ loginPage }) => {
      // Verificar:
      // - Login funciona normalmente com o checkbox marcado
      // - Cookie/token de sessão persiste após fechar e reabrir o navegador
      //   (usar context.storageState() ou navegar novamente)
    })

    test('Login com Google (OAuth)', async ({ loginPage }) => {
      // Atenção: testes de OAuth real são frágeis e dependem de credenciais externas.
      // Boas práticas:
      // - Mockar a resposta do provedor com page.route() interceptando a chamada de callback
      // - OU usar uma conta de teste dedicada com 2FA desabilitado em ambiente de staging
      // - Nunca usar credenciais reais de produção
    })

    test('Logout com sucesso após login', async ({ loginPage }) => {
    })

    test('Tentativa de login com senha incorreta', async ({ loginPage }) => {
    })

    test('Tentativa de login com email não cadastrado', async ({ loginPage }) => {
    })

    test('Tentativa de login sem preencher email', async ({ loginPage }) => {
    })

    test('Tentativa de login sem preencher senha', async ({ loginPage }) => {
    })

    test('Tentativa de login sem preencher campo algum', async ({ loginPage }) => {
    })

    test('Tentativa de login com formato de email inválido', async ({ loginPage }) => {
    })
})