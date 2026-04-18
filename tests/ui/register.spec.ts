import {test, expect} from "../../pages/base";
import { data } from "../../utils/juice-shop-data";

const baseURL = process.env.JUICE_SHOP_BASE_URL as string
const registerPath = '/#/register'

test.describe('Registro de Usuário', () => {

  test('Cadastra um usuário com sucesso', async ({ registerPage }) => {
    const email = data.commonData.generateUniqueEmail()
    const password = data.commonData.generatePwd()
    const securityAnswer = data.commonData.generateSecurityAnswer()
    const securityQuestion = 'Your eldest siblings middle name?'

    await registerPage.goTo(baseURL, registerPath)
    await registerPage.register(email, password, securityQuestion, securityAnswer)
    await expect(registerPage.registrationSuccessMessage).toBeVisible()
  })
})
