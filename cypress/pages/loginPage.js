  // Clean LoginPage page object for Cypress tests
  class LoginPage {
    visit() {
      cy.visit('/')
    }

    getSignInLink() {
      cy.contains('Sign In').should('be.visible')
    }

    usernameField() {
  return cy.getHealed('login.username')
    }

    passwordField() {
  return cy.getHealed('login.password')
    }

    submitButton() {
  return cy.getHealed('login.submit')
    }

    login(username, password) {
      this.usernameField().clear().type(username)
      this.passwordField().clear().type(password)
      this.submitButton().click()
    }

    programmaticLogin(username, password) {
      // the RWA app supports a signin URL that accepts username and password
      cy.visit(`/signin?username=${username}&password=${password}`)
    }
  }

  export default new LoginPage()
