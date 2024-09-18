import { authenticator } from 'otplib';
/// <reference types = "cypress"/>
describe("Checkout flow", () => {
    let auth_key;
    let milestone_id;
    let task_id;
    let app_id;
    let payment_id;
    let quote_id;
    let attributes_id;
    const baseURL= "https://crowdbotics-slack-dev.herokuapp.com"
    before('POST request', () => {
        // ******************* LOGIN AND GET AUTH KEY ********************
        const token = authenticator.generate("574WTVJOJ562OOSF2FCFPBJM6FIKHQBR");
        cy.request({
            method: 'POST',
            url: baseURL+'/api/v2/totp-login/',
            body: { 'email': 'testsneh@crowdbotics.com', 'password': 'devstringx@123', 'token': token},
        }).then((response) => {
            expect(response.status).to.eq(200)
            auth_key = response.body.key
            cy.log('api auth key is generated ', auth_key)
        })
    })
    it("create an app", () => {
        let app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
        cy.request({
            method: 'POST',
            url: baseURL+'/api/v1/github-repos/',
            body: {
                "app_type": "mobile-app",
                "custom_name": app_name,
                "lang_framework": "react_native"
            },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            cy.log('api auth key is generated ' + response.body)
            expect(response.status).to.eq(201)
            app_id = response.body.id

            cy.log('App is created and app ID is ' + app_id)
        })
    })
    it("Add overview roles", () => {
        let user_roles = 'test';
        cy.request({
            method : 'POST',
            url : baseURL+ '/api/v1/prd_roles/?app=' + app_id ,
            body: {

                "app": app_id,
                "name": user_roles,
            },
                headers: {
                    // 'Content-Type': 'application/json',
                    // 'Accept': 'application/json',
                    'Authorization': 'Token ' + auth_key,    

                }    
            }).then((response) => {
                cy.log('api auth key is generated ' + response.body)
                expect(response.status).to.eq(201)

        })


    })
})