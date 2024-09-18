/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doDatamodelLogin } from '../pages/loginPage.js';
import { doAddDataModel, doGetDataModel, doGetModels,doGetModelsByID } from '../pages/DataModelPage.js';

let authKey;
let app_id;
let app_name;
let models_id ;

describe("DataModel Page", () => {
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Get DataModel Flow', () => {
        doDatamodelLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                //  expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                app_name = response.body.name;
                localStorage.setItem('app_id', response.body.id);
                // doAddDataModel(authKey, app_id).then((response) => {
                //     expect(response.status).to.eq(400)
                doGetDataModel(authKey, app_id).then((response) => {
                    expect(response.status).to.eq(200)
                    cy.log("Get DataModel Flow response", response.body)
                })
            })
        })
    })
    it('Get DataModel Flow', () => {
        doGetDataModel(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get DataModel response", response.body)
        })
    })

    it('Get Models Flow', () => {
        doGetModels(authKey).then((response) => {
            cy.log("Get Appetizedevices response", response.body)
            models_id  = response.body.results[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Get Models Flow By ID', () => {
        doGetModelsByID(authKey, models_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Devloper Request Id response", response.body)
        })
    })
})