import { request } from '@playwright/test'

async function globalSetup() {
  const baseURL = process.env.JUICE_SHOP_BASE_URL!
  const email = process.env.JUICE_SHOP_USER_EMAIL!
  const password = process.env.JUICE_SHOP_USER_PASSWORD!

  console.log(`\n[global-setup] Criando usuário de teste: ${email}`)

  const api = await request.newContext({ baseURL })

  const response = await api.post('/api/Users/', {
    data: { email, password, passwordRepeat: password }
  })

  const status = response.status()
  const body = await response.text()

  console.log(`[global-setup] Resposta: ${status} — ${body}`)

  if (status === 201) {
    console.log('[global-setup] Usuário criado com sucesso.')
  } else if (status === 200 || status === 422) {
    console.log('[global-setup] Usuário já existe, seguindo em frente.')
  } else {
    throw new Error(`[global-setup] Falha ao criar usuário: ${status} — ${body}`)
  }

  await api.dispose()
}

export default globalSetup
