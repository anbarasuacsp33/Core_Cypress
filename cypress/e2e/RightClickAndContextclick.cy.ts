import  'cypress-xpath';

describe('Right Click and Context Click Tests', () => {

    it('Right Click on an element', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.xpath("//*[text()='GUI Elements']").rightclick() // Right Click on the element
        cy.wait(2000);
    })  

        it('Double Click on an element', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.xpath("//*[text()='GUI Elements']").dblclick() // Double Click on the element
        cy.wait(2000);
    })  

    
        it('Mouse Over on an element', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.xpath("//*[text()='GUI Elements']").trigger('mouseover') // Mouse Over on the element
        cy.wait(2000);
    })  





})