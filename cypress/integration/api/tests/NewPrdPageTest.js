/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doNewPrdLogin } from '../pages/loginPage.js';
import {  doGetOrganizationPRDList,doGenerateOrganizationPRD,doGetOrganizationPRDById,doPutOrganizationPRD,doPatchOrganizationPRD,doDeleteOrganizationPRD,} from '../pages/NewPrdPage.js';


let authKey;
let generatePrd_id;
let app_name;
describe("New PRD Page", () => {
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Get all PRD List by organization User', () => {
        doNewPrdLogin().then((response) => {
            authKey = response.body.key;
            doGetOrganizationPRDList(authKey).then((response) => {
                expect(response.status).to.eq(200)
                cy.log("Get all PRD List by organization User response", response.body)
            })
        })
    })

    it('Generate PRD by organization User without app', () => {
        doGenerateOrganizationPRD(authKey).then((response) => {
            let ids = response.body.data.id;
            generatePrd_id = ids - 1;
            expect(response.status).to.eq(202)
            cy.log(ids);
            cy.log(generatePrd_id);
            cy.log("Generate PRD by organization User Response", response.body)
        })
    })
    it('Get generated PRD Using Id by organization User', () => {
        doGetOrganizationPRDById(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get generated PRD Using Id by organization User", response.body)

        })
    })
    it('Put generated PRD by organization User', () => {
        doPutOrganizationPRD(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put generated PRD by organization User response", response.body)
        })
    })
    it('Patch generated PRD by organization User', () => {
        doPatchOrganizationPRD(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch generated PRD by organization User response", response.body)
        })
    })

    it('Delete generated PRD by organization User', () => {
        doDeleteOrganizationPRD(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete generated PRD by organization User Response", response.body)
        })

    })
})

