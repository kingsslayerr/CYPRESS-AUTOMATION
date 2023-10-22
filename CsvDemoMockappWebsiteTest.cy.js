

describe('CSV Demo Mockapp Website Test', () => {
    it('Should load the website properly', () => {
      cy.visit('https://csvdemomockappp.bundlewallet.com/');
  
      // Assertions for elements expected to be on the page
      cy.get('h1').should('be.visible');
      cy.get('#statement-file').should('be.enabled');
      cy.get('#statement-file').should('be.empty');
      cy.get('.btn').should('be.visible');
      cy.get('label').should('be.visible');
      cy.get('a').should('be.visible');
      cy.get('a').click() //when the "Click here" button was used, a file was downloaded as expected.
      cy.wait(7000);
    })

    it('should have expected string values',() =>{
        cy.visit('https://csvdemomockappp.bundlewallet.com/');
        
        cy.contains('Simple invoice generator, allows you to upload a CSV file and generate an invoice for clients using billable hour').should('exist');
        cy.contains('Random information not required').should('not.exist');
        cy.contains('Please select the CSV file with report to upload, in order to generate invoices. Click Here to download sample CSV file.').should('exist');
    })



})