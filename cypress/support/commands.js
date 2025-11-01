// Custom command: cy.getHealed(key)
// Tries multiple selectors from the locators fixture until one matches, then returns the element.
Cypress.Commands.add('getHealed', (key, options) => {
  return cy.fixture('locators').then((locators) => {
    const candidates = locators[key]
    if (!candidates || !candidates.length) {
      throw new Error(`No locators found for key: ${key}`)
    }

    // Helper to try selectors sequentially
    const trySelector = (index) => {
      const selector = candidates[index]
      if (!selector) {
        throw new Error(`No working selector found for ${key}. Tried: ${candidates.join(', ')}`)
      }

      return cy.get('body').then(($body) => {
        const found = $body.find(selector)
        if (found.length) {
          return cy.get(selector, options)
        }
        // try next
        return trySelector(index + 1)
      })
    }

    return trySelector(0)
  })
})
