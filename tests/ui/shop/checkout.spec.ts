import { test, expect } from '@playwright/test'
import { LoginPage } from '../../../pages/shop/LoginPage'
import { CartPage } from '../../../pages/shop/CartPage'
import { CheckoutPage } from '../../../pages/shop/CheckoutPage'
import { SearchPage } from '../../../pages/shop/SearchPage'

const VALID_USER = {
  email: 'test@juice-shop.com',
  password: 'Test@123456'
}

test.describe('Fluxo de Checkout', () => {

  test('Checkout completo com sucesso', async ({ page }) => {
  })

  test('Tentativa de checkout com carrinho vazio', async ({ page }) => {
  })

  test('Tentativa de avançar sem selecionar endereço de entrega', async ({ page }) => {
  })

  test('Seleção de endereço de entrega cadastrado', async ({ page }) => {
  })

  test('Seleção de método de entrega', async ({ page }) => {
  })

  test('Aplicação de cupom de desconto inválido exibe mensagem de erro', async ({ page }) => {
  })

  test('Resumo do pedido exibe itens, valores e total corretos', async ({ page }) => {
  })

  test('Confirmação de pedido exibe número do pedido', async ({ page }) => {
  })

})
