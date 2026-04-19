import 'cypress-xpath';
import 'cypress-mochawesome-reporter/register';

describe('template spec', () => {

  it('passes', () => {
    cy.visit('/')
    cy.get('#nav-logo-sprites').should('be.visible')
    cy.xpath("//*[@id='twotabsearchtextbox']").type('laptop')
    cy.get('#nav-search-submit-button').click()
    
  })

})