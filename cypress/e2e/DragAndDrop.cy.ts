import 'cypress-xpath';
import '@4tw/cypress-drag-drop'

describe('Drag and Drop Feature', () => {

    it('Should drag element successfully', () => {

        cy.visit('https://practice.qabrains.com/drag-drop')

        cy.xpath("//*[text()='Drag Me']").should('be.visible')
          .drag("//*[text()='Drop Here']")

        cy.contains('Dropped').should('be.visible')

    })

})