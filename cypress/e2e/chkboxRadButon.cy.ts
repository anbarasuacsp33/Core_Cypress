import 'cypress-xpath';

describe('Check Box and Radio Button Feature', () => {

    it('Check Box and Radio Button Interaction', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        // cy.scrollTo('bottom') // Scroll to end of the page or bottom of the page
        cy.get('#monday').scrollIntoView() // Scroll to the element
        cy.wait(2000)
        cy.get('#monday').check().should('be.checked') // Check Check Box
        cy.wait(2000)
        cy.get('#monday').uncheck().should('not.be.checked') // Uncheck Check Box

    })

    it('Select Multiple Check Boxes', () => {

    })

    it('Select Radio Button', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#male').scrollIntoView()
        cy.wait(2000)
        cy.get('#male').check().should('be.checked') // Check Radio Button   
    })


})