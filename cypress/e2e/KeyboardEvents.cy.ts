import  'cypress-xpath'

describe('Keyboard Events Tests', () => {

    it('Type Text in an Input Field', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#name').type('kjghkhdghdgkjhdlkjhlkjdhglkjdhgkjfdhglkjfdhgkjfdhgkfdhgkjfdhglkjdfhgkjfdhgkjdhglkjdhglkjfdghkj') // Type text in the input field
        cy.wait(5000);
        cy.get('#name').type('{ctrl}a')// Press Tab key
        cy.wait(2000);
        cy.get('#name').clear().should('have.value', '') // Clear the input field
        cy.wait(2000);
        cy.get('#name').type('{enter}') // Press Enter key
        cy.wait(2000);
        cy.xpath("//*[@class='start']").click()// Press Tab key

        cy.wait(3000);
    })



})