/// <reference types = "cypress"/>
export const doGetOrganizationPRDList = (auth_key) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getOrganizationPRDList'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};

export const doGenerateOrganizationPRD = (auth_key) => {
    return cy.fixture('api_generateOrganizationPRD.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: 'https://crowdbotics-slack-dev.crowdbotics.com/api/v1/prd/generate-prd/',
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doGetOrganizationPRDById = (auth_key, generatePrd_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getOrganizationPRDById1') + generatePrd_id + Cypress.env('getOrganizationPRDById2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};
export const doPutOrganizationPRD = (auth_key, generatePrd_id) => {
    return cy.fixture('api_putGenerateOrganizationPRD.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putOrganizationPRDById1') + generatePrd_id + Cypress.env('putOrganizationPRDById2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doPatchOrganizationPRD = (auth_key, generatePrd_id) => {
    return cy.fixture('api_patchGenerateOrganizationPRD.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchOrganizationPRDById1') + generatePrd_id + Cypress.env('patchOrganizationPRDById2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doDeleteOrganizationPRD = (auth_key, generatePrd_id) => {

    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteOrganizationPRD1') + generatePrd_id + Cypress.env('deleteOrganizationPRD2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};

