class DashboardPage
{
    com_CreateAnApp()
    {
        return cy.get('#dashboard-createapp-panel h4');
    }
    com_GetAnEstimation()
    {
        return cy.get('#dashboard-get-estimate-panel h4');
    }
    com_HireDevelopers()
    {
        return cy.get('#dashboard-hire-developer-panel h4');
    }
}
export default DashboardPage;