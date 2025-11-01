// Custom command: cy.getHealed(key)
// Caches locators fixture on first load, tries candidates sequentially, and records heal events.
let _locatorCache = null
Cypress.Commands.add('getHealed', (key, options) => {
  const ensureCache = () => {
    if (_locatorCache) return Cypress.Promise.resolve(_locatorCache)
    return cy.fixture('locators').then((locators) => {
      _locatorCache = locators
      return _locatorCache
    })
  }

  return ensureCache().then((locators) => {
    const candidates = locators[key]
    if (!candidates || !candidates.length) {
      throw new Error(`No locators found for key: ${key}`)
    }

    const trySelector = (index) => {
      const selector = candidates[index]
      if (!selector) {
        throw new Error(`No working selector found for ${key}. Tried: ${candidates.join(', ')}`)
      }

      return cy.get('body').then(($body) => {
        const found = $body.find(selector)
        if (found.length) {
          // report if not primary
          if (index > 0) {
            // ensure report array exists
            cy.window({log:false}).then((win) => {
              win.__healReports = win.__healReports || []
              win.__healReports.push({ key, used: selector, tried: candidates, timestamp: Date.now() })
            })
          }
          return cy.get(selector, options)
        }
        // try next
        return trySelector(index + 1)
      })
    }

    return trySelector(0)
  })
})
