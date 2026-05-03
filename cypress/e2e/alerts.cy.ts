import 'cypress-xpath';


describe('Alert Handling', () => {

    it('Should handle alert successfully', () => { 
        
        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.xpath("//*[text()='Alerts & Popups']")
          .scrollIntoView()
          .should('be.visible')

        // Stub alert BEFORE clicking
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alert')
        })

        cy.contains('Simple Alert').click()

        // Verify alert text
        cy.get('@alert').should('have.been.calledWith', 'I am an alert box!')

    })

})

// JavaScript Alert
// JavaScript Confirm Alert
// JavaScript Prompt Alert
// Handling Browser Popups
// Handling customepopup and modales
// Handling Alert with in iframe