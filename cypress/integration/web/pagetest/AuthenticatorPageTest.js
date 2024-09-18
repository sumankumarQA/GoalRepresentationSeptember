//import { functions } from "cypress/types/lodash";
import { describe } from "mocha";
import { authenticator } from 'otplib';
import LoginPage from "../pageobject/LoginPage";
import Authenticator from "../pageobject/AuthenticatorPage";
/// <reference types = "cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('Hooks',function()
{
    beforeEach(function()
    {
        
        cy.visit(Cypress.env('url')+"/dashboard/")
        cy.reload
    

//       cy.fixture('logincredentials'.then(function(data)
//       {
// this.data=data       
//       }))
    })
it("Varify the login functionality with valid userid and valid password and valid authcode",function()
{
const login=new LoginPage();
const auth=new Authenticator();
cy.clickOnElement(login.com_AllowButton());
cy.enterText(login.com_userName(),Cypress.env('username'));
cy.enterText(login.com_Password(),Cypress.env('password'));
cy.clickOnElement(login.com_SimpleLogin());
const token = authenticator.generate(Cypress.env('authenticationToken'));
cy.clickOnElement(auth.getAuthenticationField());
cy.enterText(auth.getAuthenticatorCode(),token);
cy.get('.page-title',{timeout:5000}).contains('Dashboard');
//cy.get(cy.title(),{timeout:5000}).contains('Crowdbotics | Dashboard');
})
})