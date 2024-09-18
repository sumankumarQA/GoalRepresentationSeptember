// <reference types = "cypress"/>
import { doCteareApp } from '../api/pages/DashboardPage.js';
import { doLogin } from '../api/pages/loginPage.js';
import { change_plan } from '../api/pages/ChangePlanPage.js';

let authKey;
let app_id;
let pro_id = 169;
let advanced_id = 170;
let community_id = 168;
let custom_id = 171;

describe("Change Plan Page", () => {
    it('community to pro test', () => {
        let app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
        doLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                app_name = response.body.name;
                localStorage.setItem('app_id', response.body.id);
                // const app_id = localStorage.getItem('app_id');
                change_plan(authKey, app_id, pro_id).then((response) => {
                    expect(response.status).to.eq(200)
                    cy.log("Community To Pro response", response.body)
                })
            })
        })
    })

    it('pro to advanced test', () => {

        change_plan(authKey, app_id, advanced_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Pro To advanced response", response.body)
        })
    })

    it('community to custom test', () => {

        change_plan(authKey, app_id, custom_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Community To Custom response", response.body)
        })
    })

})
