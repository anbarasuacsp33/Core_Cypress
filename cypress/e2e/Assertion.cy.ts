import 'cypress-xpath'

describe('Assertion Tests', () => {

    it('Assert the Title of the Page', () => {  
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('.titlewrapper').should('exist')
        cy.get('.titlewrapper').should('be.visible')
        cy.get('.titlewrapper').should('have.text', 'Test Automation Practice')
        cy.get('.titlewrapper').should('contain.text', 'Test Automation')   
        cy.get('.titlewrapper').should('have.css', 'color', 'rgb(0, 0, 255)') // Assert the color of the element
        cy.get('.titlewrapper').should('have.css', 'font-size', '32px') // Assert the font size of the element
        cy.get('.titlewrapper').should('have.css', 'font-weight', '700') // Assert the font weight of the element
        cy.get('.titlewrapper').should('have.css', 'text-align', 'center') // Assert the text alignment of the element
        cy.get('.titlewrapper').should('have.css', 'text-decoration', 'none solid rgb(0, 0, 255)') // Assert the text decoration of the element
        cy.get('.titlewrapper').should('have.css', 'text-transform', 'none') // Assert the text transform of the element
        cy.get('.titlewrapper').should('have.css', 'text-shadow', 'none') // Assert the text shadow of the element
        cy.get('.titlewrapper').should('have.css', 'text-indent', '0px') // Assert the text indent of the element
        cy.get('.titlewrapper').should('have.css', 'text-overflow', 'clip') // Assert the text overflow of the element
        cy.get('.titlewrapper').should('have.css', 'text-decoration-color', 'rgb(0, 0, 255)') // Assert the text decoration color of the element
        cy.get('.titlewrapper').should('have.css', 'text-decoration-line', 'none') // Assert the text decoration line of the element
        cy.get('.titlewrapper').should('have.css', 'text-decoration-style', 'solid') // Assert the text decoration style of the element
        cy.get('.titlewrapper').should('have.css', 'text-decoration-thickness', 'auto') // Assert the text decoration thickness of the element
        cy.get('.titlewrapper').should('have.css', 'text-emphasis-color', 'rgb(0, 0, 255)') // Assert the text emphasis color of the element
    })

    it('Visibility/State Handling', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#name').should('be.visible') // Assert that the element is visible
        cy.get('#name').should('not.be.hidden') // Assert that the element is not hidden
        cy.get('#name').should('be.enabled') // Assert that the element is enabled
        cy.get('#name').should('not.be.disabled') // Assert that the element is not disabled
        cy.get('#name').should('be.focused') // Assert that the element is focused
        cy.get('#name').should('not.be.focused') // Assert that the element is not focused
        cy.get('#name').should('be.checked') // Assert that the element is checked
        cy.get('#name').should('not.be.checked') // Assert that the element is not checked
    })

    it('URL and Title Assertion',() => {

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.url().should('include', 'testautomationpractice') // Assert that the URL includes a specific string
        cy.url().should('eq', 'https://testautomationpractice.blogspot.com/') // Assert that the URL is exactly as expected
        cy.title().should('include', 'Test Automation Practice') // Assert that the title includes a specific string
        cy.title().should('eq', 'Test Automation Practice') // Assert that the title is exactly as expected


    })
})