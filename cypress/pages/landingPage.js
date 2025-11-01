class LandingPage {
  header() {
  cy.log('LandingPage header accessed')
  cy.getHealed('nav.toolbar').should('be.visible')
  cy.getHealed('nav.publicTab').should('contain.text', 'Everyone')
  cy.getHealed('nav.contactsTab').should('contain.text', 'Friends')
  cy.getHealed('nav.personalTab').should('contain.text', 'Mine')

  } 

  filters() {
    cy.log('LandingPage filters accessed')
  cy.getHealed('filter.dateRange').should('be.visible')
    //cy.get('[data-test="transaction-list-filter-date-range-button"]').click()
  cy.getHealed('filter.amountRange').should('be.visible')
    //cy.get('[data-test="transaction-list-filter-amount-range-button"]').click()
  }

  visit() {
    cy.visit('/')
  }
}

export default new LandingPage()
