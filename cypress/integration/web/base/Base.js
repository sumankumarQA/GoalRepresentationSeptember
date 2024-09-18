class Base
{
    openUrl()
    {
        return cy.visit("https://crowdbotics-slack-dev.herokuapp.com/dashboard/")
    }
}

export default Base