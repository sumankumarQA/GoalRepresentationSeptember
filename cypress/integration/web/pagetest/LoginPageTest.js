//import { functions } from "cypress/types/lodash";
import { describe } from "mocha";
import LoginPage from "../../pageobject/LoginPage";
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
it("Varify the login username validation message (smoke)",{tags: ['@smokeTag']},function()
{
const login=new LoginPage()
login.com_AllowButton().click()
//cy.enterText(login.getuserName(),Cypress.env('username'))
//login.getuserName().type(Cypress.env('username'))
login.com_Password().type(Cypress.env('password'))
login.com_SimpleLogin().click()
//cy.wait(login.getValidationMessage().text) 
//login.getValidationMessage().should('have.value', 'The email field is required')
//expect(login.getValidationMessage().text).to.match('required')
cy.get('.beforelogin-row.mt-3 > .validation-error').contains('The email field is required')
})

it("Varify the login password validation message (smoke,regression)",{tags: ['@smokeTag','@regressionTag']},function()
{
const login=new LoginPage()
login.com_AllowButton().click()
login.com_userName().type("anish")
//login.getPassword().type("")
login.com_SimpleLogin().click()
//cy.wait(login.getValidationMessage().text) 
//login.getValidationMessage().should('have.value', 'The email field is required')
//expect(login.getValidationMessage().text).to.match('required')
cy.get('.beforelogin-row.mt-0 > .validation-error').contains('The password field is required')
})

// it("Varify the google login is working or not",function()
// {
// const login=new LoginPage()
// login.com_AllowButton().click()
// cy.clickOnElement(login.com_GoogleLogin())
// cy.title().should('eq', cy.title())
// // cy.title().contains('Sign in - Google Accounts')
// })

})