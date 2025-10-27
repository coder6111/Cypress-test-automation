import LoginPage from '../pages/loginPage'
import LandingPage from '../pages/landingPage'

 beforeEach(() => {
      // ensure each test starts from the app and is logged in
      LoginPage.visit()
      LoginPage.login('Heath93', 's3cret')
      
    })

describe('Verify the landing page', () => {

 it('Verify that RWA logo is displayed properly', () => {
      LandingPage.header()
    })

  it('Verify that filters are displayed properly', () => {
      LandingPage.filters()
    })
}) 
    
