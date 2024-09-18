/// <reference types = "cypress"/>
export const change_plan = (auth_key, app_id, plan_id) => {
    cy.readFile('cypress/fixtures/api_change_plan.json').then((data) => {
        data.id = plan_id;
        cy.writeFile('cypress/fixtures/api_change_plan.json', JSON.stringify(data));
    });
    return cy.fixture('api_change_plan.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('changePlan1') + app_id + Cypress.env('changePlan2'),
            body: myFixture,
            headers: {
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })

}