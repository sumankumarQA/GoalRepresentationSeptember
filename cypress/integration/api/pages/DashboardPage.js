/// <reference types = "cypress"/>

export const doCteareApp = (auth_key, app_name) => {
    cy.readFile('cypress/fixtures/api_createApp.json').then((data) => {
        data.custom_name = app_name
        cy.writeFile('cypress/fixtures/api_createApp.json', JSON.stringify(data))
    })
    return cy.fixture('api_createApp.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createApp'),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const getNotification = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getNotification1') + app_id + Cypress.env('getNotification2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const searchApp = (auth_key, app_name) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('searchApp1') + app_name + Cypress.env('searchApp2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const appTypeList = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('appTypeList'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};


export const getAppListById = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('appTypeList1') + Cypress.env('appTypeList2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};


