import 'cypress-xpath';

describe('Drop Down Feature', () => {

    it('Select Option From Drop Down', () => {
        cy.visit('https://www.ebay.com/')
        // DSelect Drop Down 
        cy.get('.gh-search-categories').select(5)// Index Based Selection
        cy.get('.gh-search-categories').select('267', {timeout: 10000})// Value
        cy.get('.gh-search-categories').select('Art',  {timeout: 10000})// Visible Text

    })

    

})