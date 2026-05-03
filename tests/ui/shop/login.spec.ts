import { test, expect } from '@playwright/test'
import { LoginPage } from '../../../pages/shop/LoginPage'

// Credenciais de teste — idealmente viriam de variáveis de ambiente (.env)
const VALID_USER = {
  email: 'test@juice-shop.com',
  password: 'Test@123456'
}

test.describe('Login e Autenticação', () => {

  test.beforeEach(async ({ page }) => {
  })

  test('Login com sucesso usando credenciais válidas', async ({ page }) => {
  })

  test('Tentativa de login com senha incorreta', async ({ page }) => {
  })

  test('Tentativa de login com email não cadastrado', async ({ page }) => {
  })

  test('Tentativa de login sem preencher email', async ({ page }) => {
  })

  test('Tentativa de login sem preencher senha', async ({ page }) => {
  })

  test('Tentativa de login sem preencher campo algum', async ({ page }) => {
  })

  test('Tentativa de login com formato de email inválido', async ({ page }) => {
  })

  test('Logout com sucesso após login', async ({ page }) => {
  })

})
