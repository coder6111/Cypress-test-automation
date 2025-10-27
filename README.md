Cypress Real World App (RWA) - Test Automation Scaffold

This scaffold creates a minimal Cypress framework to run tests against the Cypress Real World App (RWA).

Prereqs
- Node.js (use the version in RWA's .node-version)
- Yarn Classic (or Corepack configured to use Yarn Classic)
- RWA app locally cloned and started (see https://github.com/cypress-io/cypress-realworld-app)

Quick start
1. Clone the RWA app elsewhere and run:

```bash
# in the rwa repo
yarn
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true yarn dev
```

This starts the frontend on http://localhost:3000 and backend on http://localhost:3001 by default.

2. In this scaffold folder install deps:

```bash
yarn
```

3. Open Cypress UI:

```bash
yarn cypress:open
```

4. Run headless:

```bash
yarn cypress:run
```

Notes
- Tests assume the app runs on ports 3000/3001. If you change ports in RWA, update `cypress.config.ts` accordingly.
- Example spec `cypress/e2e/example.cy.js` contains a simple login smoke test. Customize with additional flows from the RWA `cypress/tests` folder.
- To seed the RWA database use `yarn db:seed` from the RWA repo.
