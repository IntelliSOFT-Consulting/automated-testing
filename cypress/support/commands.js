Cypress.Commands.overwrite('request', (originalFn, ...options) => {
    const optionsObject = options[0];
  
    // add default authorization header to all cy.request
    if (optionsObject === Object(optionsObject)) {
      optionsObject.headers = {
        authorization: 'Bearer ' + btoa(Cypress.env('username') + ':' + Cypress.env('password')),
        ...optionsObject.headers,
      };
  
      return originalFn(optionsObject);
    }
  
    return originalFn(...options);
  });

  Cypress.Commands.add('loginViaUserInterface', (
    username = Cypress.env('username'), 
    password = Cypress.env('password'),
    location = Cypress.env('location')
    ) => { 
        cy.visit('/bahmni/home/index.html#/login');
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('#location').select(location);
        cy.get('button').contains('Login').click();
});

Cypress.Commands.add('loginViaApi', (
    username = Cypress.env('username'), 
    password = Cypress.env('password')
    ) => { 
        const token = window.btoa(`${username}:${password}`);
        cy.request({
            method: 'GET',
            url: '/openmrs/ws/rest/v1/session',
            headers: {
                Authorization: `Basic ${token}`

            },
        })
});

Cypress.Commands.add('loginwithrestapi', () => {

    cy.request({
      method: 'POST',
      url: Cypress.env('apiServer') + '/ws/rest/v1/appui/session?v=ref',
      options: {
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': "application/json"
        }
      },
      body: {
        location: '6351fcf4-e311-4a19-90f9-35667d99a8af'
      }
    }).then( (response) => {
      expect(response.status).to.eq(200);
      expect(response.body.authenticated).to.eq(true);
    });
  
  });

Cypress.Commands.add("mockSession", () => {
    cy.server();
    cy.route({
      method: "GET",
      url: "/openmrs/ws/rest/v1/appui/session",
      response: "fixture:session.json",
      status: 200
    });
  });
