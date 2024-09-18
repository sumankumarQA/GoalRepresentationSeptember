
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

Cypress.Commands.add('callAPI', (method, endpoint, data) => {
  cy.log("this is callApi method")
    return cy.request({
      method,
      url: `${Cypress.env('baseUrl')}${endpoint}`,
      body: data
      // headers: {
      //   'Content-Type': 'application/json',
      //   // Add any authentication headers if needed
      // },
    }).then((response) => {
      // Add assertions to validate the response
      
      expect(response.status).to.eq(200); // Example: Check if the status code is 200
      // Add more assertions as needed based on your API response structure
  
      // Return the response object
      return response;
    });
  });

Cypress.Commands.add("enterText", (element1, element2) => {
    element1.type(element2)
});
Cypress.Commands.add("clickOnElement", (element1) => {
    element1.click({ force: true });
})

//..................................................................



// cypress/support/commands.js
import axios from 'axios';
Cypress.Commands.add('loginToKiwiTCMS', () => {
  // Wrap the asynchronous operation with cy.then()
  return cy.then(() => {
    const body = {
      jsonrpc: "2.0",
      method: "Auth.login",
      id: "jsonrpc",
      params: ['cbsneh', 'dssneh@123'],
    };

    // Make the API request and handle the response
    return axios.post(`http://cbtcms.herokuapp.com/json-rpc/`, body, {})
      .then(response => {
        if (response && response.data) {
          cy.log('Logged in successfully!');
          return response.data.result;
        } else {
          // Handle the case where response or response.data is undefined
          throw new Error('Invalid response received from the server');
        }
      })
      .catch(error => {
        // Handle errors, log them, or throw a custom error
        console.error('Error during login:', error);
        throw error;
      });
  });
});

// Rest of your commands...



Cypress.Commands.add('createTestRun', (testCasesToAdd) => {
  cy.loginToKiwiTCMS().then(sessionId => {
    const testRunData = {
      'plan': 8,
      'name': 'My Test Run',
      'build': 3,
      'manager': 'cbsneh',
      'summary': "This is run created by cypress automation"
    };

    const bodyCreateTestRun = {
      jsonrpc: "2.0",
      method: "TestRun.create",
      id: "jsonrpc",
      params: [testRunData],
    };

    const headers = {
      "Content-Type": "application/json",
      Cookie: 'sessionid=' + sessionId,
    };

    cy.request({
      method: 'POST',
      url: 'http://cbtcms.herokuapp.com/json-rpc/',
      body: bodyCreateTestRun,
      headers: headers,
    }).then(responseCreateTestRun => {
      const testRunId = responseCreateTestRun.body.result.id;
      cy.log('Test Run created successfully! ID:', testRunId);

      const bodyAddTestCases = {
        jsonrpc: "2.0",
        method: "TestRun.add_case",
        id: "jsonrpc",
        params: [testRunId, testCasesToAdd],
      };

      cy.request({
        method: 'POST',
        url: 'http://cbtcms.herokuapp.com/json-rpc/',
        body: bodyAddTestCases,
        headers: headers,
      }).then(responseAddTestCases => {
        cy.log('Test cases added to the test run:', responseAddTestCases.body);
      });
    });
  });
});
Cypress.Commands.add('resloveSyncIssue',()=>{
return cy.wait(4000);
})
