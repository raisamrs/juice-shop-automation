import { test, expect } from "../../../pages/base";
import { data } from "../../../utils/juice-shop-data";

const baseURL = process.env.JUICE_SHOP_BASE_URL as string
const registerPath = '/#/register'

test.describe('Cadastro de Usuário', () => {

  test.beforeEach(async ({ registerPage }) => {
    await registerPage.goTo(baseURL, registerPath)
    await registerPage.dismissWelcomeBanners()
  })

  test('Cadastro de usuário com sucesso', async ({ registerPage }) => {
    const password = data.commonData.generatePwd()
    await registerPage.fillForm({
      email: data.commonData.generateUniqueEmail(),
      password,
      confirmPassword: password,
      securityQuestion: 'Your eldest siblings middle name?',
      securityAnswer: data.commonData.generateSecurityAnswer(),
    })
    await registerPage.signUpButton.click()
    await expect(registerPage.registrationSuccessMessage).toBeVisible()
  })

  test('Tentativa de cadastro de usuário sem email', async ({ registerPage }) => {
    const password = data.commonData.generatePwd()
    await registerPage.fillForm({
      password,
      confirmPassword: password,
      securityQuestion: 'Mother\'s maiden name?',
      securityAnswer: data.commonData.generateSecurityAnswer(),
    })
    await expect(registerPage.signUpButton).toBeDisabled()
  })

  test('Tentativa de cadastro de usuário sem senha', async ({ registerPage }) => {
    await registerPage.fillForm({
      email: data.commonData.generateUniqueEmail(),
      confirmPassword: data.commonData.generatePwd(),
      securityQuestion: 'Mother\'s birth date? (MM/DD/YY)',
      securityAnswer: data.commonData.generateSecurityAnswer(),
    })
    await expect(registerPage.signUpButton).toBeDisabled()
  })

  test('Tentativa de cadastro de usuário sem confirmação da senha', async ({ registerPage }) => {
    await registerPage.fillForm({
      email: data.commonData.generateUniqueEmail(),
      password: data.commonData.generatePwd(),
      securityQuestion: 'What\'s your favorite place to go hiking?',
      securityAnswer: data.commonData.generateSecurityAnswer(),
    })
    await expect(registerPage.signUpButton).toBeDisabled()
  })

  test('Tentativa de cadastro de usuário com senha e confirmação de senha diferentes', async ({ registerPage }) => {
    await registerPage.fillForm({
      email: data.commonData.generateUniqueEmail(),
      password: data.commonData.generatePwd(),
      confirmPassword: data.commonData.generatePwd(),
      securityQuestion: 'Your ZIP/postal code when you were a teenager?',
      securityAnswer: data.commonData.generateSecurityAnswer(),
    })
    await expect(registerPage.signUpButton).toBeDisabled()
  })

  test('Tentativa de cadastro de um usuário sem selecionar pergunta de segurança', async ({ registerPage }) => {
    const password = data.commonData.generatePwd()
    await registerPage.fillForm({
      email: data.commonData.generateUniqueEmail(),
      password,
      confirmPassword: password,
      securityAnswer: data.commonData.generateSecurityAnswer(),
    })
    await expect(registerPage.signUpButton).toBeDisabled()
  })

  test('Tentativa de cadastro de um usuário sem preencher resposta de segurança', async ({ registerPage }) => {
    const password = data.commonData.generatePwd()
    await registerPage.fillForm({
      email: data.commonData.generateUniqueEmail(),
      password,
      confirmPassword: password,
      securityQuestion: 'Your favorite book?',
    })
    await expect(registerPage.signUpButton).toBeDisabled()
  })

  test('Tentativa de cadastro de um usuário sem preencher campo algum', async ({ registerPage }) => {
    await expect(registerPage.signUpButton).toBeDisabled()
  })
})
