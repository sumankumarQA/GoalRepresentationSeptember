///<reference types="cypress" />

export const getStudioScreen = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getStudioScreen1') + app_id + Cypress.env('getStudioScreen2'),
        headers: {

            'Authorization': 'Token ' + auth_key, app_id
        }

    }).then((response) => {
        return response;
    })
};
export const doGetStudioScreenEdge = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getStudioScreenEdge1') + app_id + Cypress.env('getStudioScreenEdge2'),
        headers: {
            'Authorization': 'Token ' + auth_key, app_id
        }
    }).then((response) => {
        return response;
    })
};
export const doPostCreateStudioScreen = (auth_key, app_id,screen_id) => {
    cy.readFile('cypress/fixtures/api_createStudio_Screen.json').then((data) => {
        data.screens[0].screen_id = screen_id;
        cy.writeFile('cypress/fixtures/api_createStudio_Screen.json', JSON.stringify(data));
    });
    return cy.fixture('api_createStudio_Screen.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('postCreateScreen1') + app_id + Cypress.env('postCreateScreen2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};
    export const doGetStudiopage = (auth_key, app_id) => {

        return cy.request({
            method: 'GET',
            url: Cypress.env('baseUrl') + Cypress.env('getStudiopage1') + app_id,
            headers: {
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            return response;
        })
    };

    export const doPostCLIFeedback = (auth_key) => {

        return cy.fixture('api_addCliFeedback.json').then((myFixture) => {
            cy.request({
                method: 'POST',
                url: Cypress.env('baseUrl') + Cypress.env('CreateCliFeedback'),
                headers: {
                    'Authorization': 'Token ' + auth_key
                },
                body: myFixture
            }).then((response) => {
                return response;
            })
        })
    }; 

