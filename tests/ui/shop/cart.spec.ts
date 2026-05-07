import { test, expect } from '@playwright/test'
import { LoginPage } from '../../../pages/shop/LoginPage'
import { CartPage } from '../../../pages/shop/CartPage'
import { SearchPage } from '../../../pages/shop/SearchPage'

const VALID_USER = {
  email: 'test@juice-shop.com',
  password: 'Test@123456'
}

test.describe('Adição de Itens ao Carrinho', () => {

  test('Adição de produto ao carrinho com sucesso', async ({ page }) => {
  })

  test('Adição de múltiplos produtos diferentes ao carrinho', async ({ page }) => {
  })

  test('Adição do mesmo produto múltiplas vezes incrementa a quantidade', async ({ page }) => {
  })

  test('Aumentar a quantidade de um item no carrinho', async ({ page }) => {
  })

  test('Diminuir a quantidade de um item no carrinho', async ({ page }) => {
  })

  test('Remover item do carrinho', async ({ page }) => {
  })

  test('Carrinho exibe valor total correto após adicionar produtos', async ({ page }) => {
  })

  test('Carrinho atualiza valor total ao alterar quantidade', async ({ page }) => {
  })
  
})
