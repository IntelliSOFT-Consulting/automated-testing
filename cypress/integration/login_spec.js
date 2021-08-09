
/// <reference types="cypress" />

// describe('My First Test', () =>{
//     it('Log in', () => {
//       const username = Cypress.env('username')
//       const password = Cypress.env('password')

//       const token = window.btoa(`${username}:${password}`);

//       cy.request({
//         method: 'GET',
//         url: '/openmrs/ws/rest/v1/session',
//         headers: {
//             Authorization: `Basic ${token}`
//         },
//       })

//       cy.getCookie('JSESSIONID').should('exist')

//       cy.visit('bahmni/registration/index.html')
//     })
// })

describe ('Log in', function(){
   context('Resusable login custom command', function(){

    before(function(){
      cy.login()
      cy.server().mockSession()
    })

    beforeEach(() => {
      Cypress.Cookies.preserveOnce('JSESSIONID', 'reporting_session')
  })

    it('can visit /dashboard', function(){
      cy.visit('/bahmni/home/')
    })

  })
})

