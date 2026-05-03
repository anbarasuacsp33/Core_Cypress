import  'cypress-xpath';

describe('Windows and Tab Handling', () => {

    it('Should open new tab successfully', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen')
        })

        cy.contains('New Tab').click()

        cy.get('@windowOpen').should('have.been.calledWith', 'https://www.pavantestingtools.com/');

        cy.visit('https://www.pavantestingtools.com/');

    })

})

// Handle links opening in a new tab
//capture URL without navigation
//Visit a new Page Manually
// Handle window.open() method (Important) - Action on new tabs 
// Redirect new tab to same window
// cypress typescript - multiple tab handling