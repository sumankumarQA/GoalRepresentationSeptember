//import { functions } from "cypress/types/lodash";
import { describe } from "mocha";
import { authenticator } from 'otplib';
import LoginPage from "../pageobject/LoginPage";
import DashboardPage from "../pageobject/DashboardPage";
import Authenticator from "../pageobject/AuthenticatorPage";
/// <reference types = "cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('Hooks', function () {
    let login = new LoginPage();
    let  auth = new Authenticator();
    let  dash = new DashboardPage();
    
    beforeEach(function () {

        cy.visit(Cypress.env('url') + "/dashboard/")
        cy.reload
        cy.clickOnElement(login.com_AllowButton());
        cy.enterText(login.com_userName(), Cypress.env('username'));
        cy.enterText(login.com_Password(), Cypress.env('password'));
        cy.clickOnElement(login.com_SimpleLogin());
        const token = authenticator.generate(Cypress.env('authenticationToken'));
        cy.clickOnElement(auth.getAuthenticationField());
        cy.enterText(auth.getAuthenticatorCode(), token);


        //       cy.fixture('logincredentials'.then(function(data)
        //       {
        // this.data=data       
        //       }))
    })
   
    it("Verify the create new app button is working or not (smoke,regression)",{tags: ['@smokeTag','@regressionTag']}, function () {

        cy.clickOnElement(dash.com_CreateAnApp());
        cy.get('h3', { timeout: 5000 }).contains('Create App');
    })

    // it("Verify the get an estimation button is working or not", function () {
    //     const login = new LoginPage();
    //     const auth = new Authenticator();
    //     const dash = new DashboardPage();
    //     cy.clickOnElement(login.com_AllowButton());
    //     cy.enterText(login.com_userName(), Cypress.env('username'));
    //     cy.enterText(login.com_Password(), Cypress.env('password'));
    //     cy.clickOnElement(login.com_SimpleLogin());
    //     const token = authenticator.generate(Cypress.env('authenticationToken'));
    //     cy.clickOnElement(auth.getAuthenticationField());
    //     cy.enterText(auth.getAuthenticatorCode(), token);
    //     cy.clickOnElement(dash.com_GetAnEstimation());
    //     cy.get('.cb-modal-header > .d-flex > div > .mb-0', { timeout: 10000 }).contains('Select or Create app');
        
    // })

    // it("Verify the get an estimation button is working or not", function () {
    //     const login = new LoginPage();
    //     const auth = new Authenticator();
    //     const dash = new DashboardPage();
    //     cy.clickOnElement(login.com_AllowButton());
    //     cy.enterText(login.com_userName(), Cypress.env('username'));
    //     cy.enterText(login.com_Password(), Cypress.env('password'));
    //     cy.clickOnElement(login.com_SimpleLogin());
    //     const token = authenticator.generate(Cypress.env('authenticationToken'));
    //     cy.clickOnElement(auth.getAuthenticationField());
    //     cy.enterText(auth.getAuthenticatorCode(), token);
    //     cy.clickOnElement(dash.com_HireDevelopers());
    //     cy.get('.cb-modal-header > .d-flex > div > h4', { timeout: 5000 }).contains('Select or Create app');
        
    // })
})