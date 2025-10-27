import LoginPage from '../pages/loginPage'
import LandingPage from '../pages/landingPage'

beforeEach(() => {
  // load credentials from fixture and login before each test
  cy.fixture('user').then((user) => {
    LoginPage.visit()
    // prefer programmatic login if available
    if (Cypress.env('USE_PROGRAMMATIC_LOGIN') || true) {
      LoginPage.programmaticLogin(user.username, user.password)
    } else {
      LoginPage.login(user.username, user.password)
    }
  })
})

describe('Verify the landing page', () => {
  it('Verify that RWA logo is displayed properly', () => {
    LandingPage.header()
  })

  it('Verify that filters are displayed properly', () => {
    LandingPage.filters()
  })
})

