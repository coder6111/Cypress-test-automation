import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
  supportFile: 'cypress/support/commands.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}'
  },
  env: {
    apiUrl: 'http://localhost:3002',
  }
})
