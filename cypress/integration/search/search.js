import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

// before(() => {
//     cy.loginViaUserInterface();
//   });

Given('User clicks on Find Patient App', () =>{
    //cy.get('.btn-user-info').should('exist');
    cy.loginViaUserInterface();
    cy.get(`#${CSS.escape('bahmni.registration')}`).click();
})

When('User enters existing {string} patient', (name) =>{
    cy.get('#name').type(name);
    cy.get('.search-seperator-r .reg-srch-btn').click();
})

Then('Return Search Results {string}', (status) => {
    // cy.wait(5000);
    if ('true' == status) {
        cy.get('.registraition-search-results-container').should('exist');
    }else if('false' == status){
        cy.get('.registraition-search-results-container').should('not.exist');
    }
})

  
