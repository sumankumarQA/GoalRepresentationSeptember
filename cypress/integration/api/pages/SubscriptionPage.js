/// <reference types = "cypress"/>

export const doChangeSubscription = (auth_key, app_id) => {

    return cy.fixture('api_subscriptionData.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('changeSubscription1') + app_id + Cypress.env('changeSubscription2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};