// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addTransaction', (transaction) => {
    cy.get('#transaction > .button').click();
    cy.get('#description').type(transaction.description);
    cy.get('#amount').type(transaction.amount);
    cy.get('#date').type(transaction.date);
    cy.contains('button', 'Salvar').click();
    cy.get("tbody tr td.description").should("contain", transaction.description);
});

Cypress.Commands.add('cancelTransaction', (transaction) => {
    cy.get('#transaction > .button').click();
    cy.get('#description').type(transaction.description);
    cy.get('#amount').type(transaction.amount);
    cy.get('#date').type(transaction.date);
    cy.get('.actions > .button').contains('Cancelar').click();
    cy.get('#data-table tbody tr').should('have.length', 0);});