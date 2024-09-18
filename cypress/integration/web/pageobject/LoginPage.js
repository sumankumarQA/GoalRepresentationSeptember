class LoginPage
{
  com_AllowButton()
  {
    return cy.get('#hs-eu-confirmation-button');
  }  
  com_userName()
  {
    return cy.get('#__BVID__24');
  }
  com_Password()
  {
    return cy.get('.form-control#__BVID__25');
  }
  com_SimpleLogin()
  {
    return cy.get('.btn.big-round-button-common.login-button');
  }
  com_ValidationMessage()
  {
    return cy.get('div.beforelogin-row.mt-3.text-left.container-fluid.px-0>div');
  }
  com_GoogleLogin()
  {
    return cy.get('.btn.big-round-button-common.mt-3.github-button.btn-secondary.btn-outline');
  }
  com_GitLogin()
  {
    return cy.get('.btn.big-round-button-common.mt-2.github-button.btn-secondary.btn-outline')
  }
}

export default LoginPage;