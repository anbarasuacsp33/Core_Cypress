import  'cypress-xpath'

describe('File Upload Tests', () => {

    it('Upload a File', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.xpath("//*[@id='singleFileInput']").scrollIntoView() // Scroll to the element
        cy.get('#singleFileInput').selectFile('C:\\Users\\LENOVO\\OneDrive\\Desktop\\IMG-20170703-WA0041.jpg') // Upload a file
        cy.wait(2000);
    })

    // Mutipla file upload should be done by @karthik




})






