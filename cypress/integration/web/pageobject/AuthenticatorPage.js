 class Authenticator
 {
    getAuthenticatorCode()
    {
        return cy.get('div.otp input').first();
    }
    getAuthenticationField()
    {
        return cy.get('div.otp input').first();
    }
 }
 export default Authenticator;