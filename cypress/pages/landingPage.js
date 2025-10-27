class LandingPage {
  header() {
  cy.log('LandingPage header accessed')
  cy.get('.MuiToolbar-root').should('be.visible')
  cy.get('[data-test="nav-public-tab"]').should('contain.text', 'Everyone')
  cy.get('[data-test="nav-contacts-tab"]').should('contain.text', 'Friends')
  cy.get('[data-test="nav-personal-tab"]').should('contain.text', 'Mine')

  } 

  filters() {
    cy.log('LandingPage filters accessed')
    cy.get('[data-test="transaction-list-filter-date-range-button"]').should('be.visible')
    //cy.get('[data-test="transaction-list-filter-date-range-button"]').click()
    cy.get('[data-test="transaction-list-filter-amount-range-button"]').should('be.visible')
    //cy.get('[data-test="transaction-list-filter-amount-range-button"]').click()
  }

  visit() {
    cy.visit('/')
  }
}

export default new LandingPage()
