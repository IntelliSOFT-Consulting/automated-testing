import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

beforeEach(() => {
  cy.loginViaUserInterface();
});

afterEach(() => {
  cy.end();
});

Given('User visits login page', () => {
  cy.visit('/bahmni/home/index.html#/login');
});

When('User enters {string} username', (username) => {
  if ('setupUser' == username) {
    cy.typeInPropertyIntoElement('login.username', '#username');
  } else {
    cy.get('#username').type(username);
  }
});

When('User enters {string} password', (password) => {
  if ('setupPass' == password) {
    cy.typeInPropertyIntoElement('login.password', '#password');
  } else {
    cy.get('#password').type(password);
  }
});

When('User Selects {string} Login Location', (location) => {
  cy.get('#location').select(location)
});

When('User Logs in', () => {
    cy.get('button').contains('Login').click();
});

Then('System Evaluates Login {string}', (status) => {
  if ('true' == status) {
    cy.get('.btn-user-info').should('exist');
    cy.visit('bahmni/registration/index.html')
  } else if ('false' == status) {
    cy.get('button').should('exist');
  }
});

// When('Setup user rightly logs in', () =>{

// });

// Then('System logs in user', () =>{

// })