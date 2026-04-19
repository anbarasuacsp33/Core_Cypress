// Setup - Visiting Url , Load the data, Set the screenview // defaut waiting time 4sec

import 'cypress-xpath';

describe('Login Feature',()=>{

    it('Possitive Sign In', ()=>{
        cy.visit('https://practice.qabrains.com/')
        cy.get('#email').type('qa_testers@qabrains.com')
        cy.get('#password').type('Password123')
        cy.get("[type='submit']").click()
    })

    it('Negative Sign In WithOut data', ()=>{
        cy.visit('https://practice.qabrains.com/')
        cy.get('#email').type('qa_testers@qabrains.com')
        cy.get('#email').clear()
        cy.get("(//p[@class='text-red-500 text-sm mt-1'])[1]").should('be.visible');
        cy.get('#password').type('Password123')
        cy.get('#password').clear()
        cy.get("[type='submit']").click()

    })

})