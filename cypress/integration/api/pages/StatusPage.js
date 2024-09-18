/// <reference types = "cypress"/>

export const doDeployTheApp = (auth_key, app_id, platform_id) => {

    return cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl') + Cypress.env('deployeApp1') + app_id + Cypress.env('deployeApp2') + platform_id + Cypress.env('deployeApp3'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doGetTheDeployApp = (auth_key, app_id, platform_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('GetDeployeApp1') + app_id + Cypress.env('GetDeployeApp2') + platform_id + Cypress.env('GetDeployeApp3'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};
export const doCreateApiStagingEnv = (auth_key, app_id) => {
    return cy.fixture('api_CreateApiStagingEnv.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createApiStagingEnv1') + app_id + Cypress.env('createApiStagingEnv2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};
export const doCancelAndroidDeploy = (auth_key, app_id, platform_id) => {

    return cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl') + Cypress.env('cancelAndroidDeploy1') + app_id + Cypress.env('cancelAndroidDeploy2') + platform_id + Cypress.env('cancelAndroidDeploy3'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};