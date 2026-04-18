import * as faker from 'faker-br'

export const commonData = {

  generateUniqueEmail(): string {
    const timestamp = Date.now()
    const randomEmail = Math.random().toString(36).substring(2, 8)
    return `test.user.${timestamp}.${randomEmail}@mail.com`
  },

  generatePwd(): string {
    return faker.internet.password(12, false, /[A-Za-z0-9]/)
  },

    generateSecurityAnswer(): string {
    return faker.name.firstName().toLowerCase()
  },

  get firstName(): string {
    return faker.name.firstName()
},

  get lastName(): string {
    return faker.name.lastName()
  }

}