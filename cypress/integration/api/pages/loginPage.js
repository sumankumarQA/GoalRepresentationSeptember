import { authenticator } from 'otplib';
/// <reference types = "cypress"/>

export const doLogin = () => {
    const tokenvalue = authenticator.generate("EQ2WUPX7QC3VIPGPMQ5M5AOYADH4XMHT");
    cy.readFile('cypress/fixtures/api_login.json').then((data) => {
        data.token = parseInt(tokenvalue);
        cy.writeFile('cypress/fixtures/api_login.json', JSON.stringify(data));
    });
    return cy.fixture('api_login.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('loginEndPoint'),
            retryOnStatusCodeFailure: true,
            body: myFixture
        }).then((response) => {
            return response;
        })
    })

}
export const doDashboardLogin = () => {
    return cy.fixture('api_DashboardLogin.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('normallogin'),
            retryOnStatusCodeFailure: true,
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
	

}

export const doNewPrdLogin = () => {
    return cy.fixture('api_DashboardLogin.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('normallogin'),
            retryOnStatusCodeFailure: true,
            body: myFixture
        }).then((response) => {
            return response;
        })
    })

}

export const doLogout = (auth_key) => {
    // ******************* Logout ******************** //


    return cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl') + '/api/v2/logout/',
        headers: {

            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};

