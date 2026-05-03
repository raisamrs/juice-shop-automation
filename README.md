# 🧃 Juice Shop Automation

Automação de testes End-to-End (E2E) da aplicação [OWASP Juice Shop](https://github.com/juice-shop/juice-shop), construída com **Playwright + TypeScript**.

Este projeto faz parte do meu portfólio como QA em transição para automação de testes.

---

## 🎯 Objetivo

Praticar e demonstrar habilidades de automação de testes E2E em uma aplicação web real, aplicando boas práticas como:

- Page Object Model (POM)
- Organização modular de testes
- Uso de fixtures e hooks do Playwright
- Seletores robustos e estáveis
- Relatórios de execução

---

## 🛠️ Stack

| Ferramenta | Uso |
|---|---|
| [Playwright](https://playwright.dev/) | Framework de automação E2E |
| TypeScript | Linguagem dos testes |
| Node.js | Runtime |
| OWASP Juice Shop | Aplicação sob teste (SUT) |

---

## 📂 Estrutura do projeto

```
juice-shop-automation/
├── tests/              # Casos de teste organizados por funcionalidade
├── pages/              # Page Objects (POM)
├── fixtures/           # Dados e configurações reutilizáveis
├── utils/              # Funções auxiliares
├── playwright.config.ts
├── package.json
└── README.md
```

> A estrutura segue o padrão Page Object Model para separar a lógica dos testes da interação com a UI, facilitando manutenção.

---

## ▶️ Como rodar

### Pré-requisitos

- Node.js 18 ou superior
- Juice Shop rodando localmente (`http://localhost:3000`) **ou** apontando para uma instância online

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/juice-shop-automation.git
cd juice-shop-automation

# Instale as dependências
npm install

# Instale os navegadores do Playwright
npx playwright install
```

### Executando os testes

```bash
# Roda todos os testes (modo headless)
npx playwright test

# Roda com interface gráfica (modo headed)
npx playwright test --headed

# Roda em modo debug
npx playwright test --debug

# Roda um teste específico
npx playwright test tests/login.spec.ts

# Abre o modo UI do Playwright
npx playwright test --ui
```

### Visualizando o relatório

```bash
npx playwright show-report
```

---

## ✅ Cenários cobertos

- [x] Login e autenticação
- [x] Cadastro de usuário
- [x] Busca de produtos
- [x] Adição de itens ao carrinho
- [x] Fluxo de checkout
- [ ] *(adicione/remova conforme seus testes)*

---

## 📚 O que aprendi

- Estruturação de um projeto de automação do zero com Playwright
- Aplicação prática do padrão Page Object Model em TypeScript
- Estratégias de seletores para reduzir flakiness
- Geração e análise de relatórios de execução

---

## 📌 Próximos passos

- Integrar com CI (GitHub Actions)
- Adicionar testes de API (Playwright `request`)
- Adicionar testes visuais (screenshots comparativos)

---

## 👤 Autor

**Raisinha** — Analista de QA em transição para automação de testes
[LinkedIn](https://linkedin.com/in/seu-perfil) · [GitHub](https://github.com/seu-usuario)
