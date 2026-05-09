import { request } from '@playwright/test'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

async function globalSetup() {
  const baseURL = process.env.JUICE_SHOP_BASE_URL!
  const email = process.env.JUICE_SHOP_USER_EMAIL!
  const password = process.env.JUICE_SHOP_USER_PASSWORD!

  const api = await request.newContext({ baseURL })

  const response = await api.post('/api/Users/', {
    data: { email, password, passwordRepeat: password }
  })

  if (!response.ok() && response.status() !== 422) {
    throw new Error(`Falha ao criar usuário de teste: ${response.status()} ${await response.text()}`)
  }

  await api.dispose()
}

export default globalSetup
