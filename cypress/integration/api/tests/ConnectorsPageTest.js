/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doConnectorLogin } from '../pages/loginPage.js';
import { doCreateConnector, doGetConnector, doGetInstallerInstalComponent, doGetConnectorUsingId, doUpdateConnector, doEditConnector, doDeleteConnector, getConnectors, getConnectorscategories,doGetShareableConnectors, doCreateShareableConnectors, doGetShareableConnectorsByID, doGetShareableDataModels, doGetShareableDataModelsByID, doGetConnectorscategoriesByID, doGetConnectorsByID } from '../pages/ConnectorsPage.js';

let authKey;
let app_id;
let app_name;
let connector_name;
let connector_description;
let connector_id;
let shareableconnectors_id;
let shareabledatamodels_id;
let connectors_id;
let connectorscategoris_id;

describe("Connectors Page", () => {
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Create Connectors Flow', () => {
        doConnectorLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                app_name = response.body.name;
                localStorage.setItem('app_id', response.body.id);
                connector_name = "Testconnectors" + app_id;
                connector_description = 'TestDesc' + app_id;
                doCreateConnector(authKey, app_id, connector_name).then((response) => {
                    connector_id = response.body.id;
                    expect(response.status).to.eq(201)
                    cy.log("Create Connectors response", response.body)
                })
            })
        })
    })
    it('Get Connectors Flow', () => {
        doGetConnector(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Connectors response", response.body)
        })
    })

    it('Update Apps Connectors', () => {
        connector_name = connector_name + 1;
        connector_description = connector_description + 1;
        doUpdateConnector(authKey, app_id, connector_name, connector_description, connector_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Update Apps Connector response", response.body)
        })
    })

    it('Edit Connectors Flow', () => {
        connector_description = connector_description + 1;
        doEditConnector(authKey, app_id, connector_description, connector_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Edit Connectors response", response.body)
        })
    })


    it('Get Connectors Flow', () => {
        doGetConnector(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Connectors response", response.body)
        })
    })

    it('Get Connectors Using Id Flow', () => {
        doGetConnectorUsingId(authKey, app_id, connector_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Connectors Using Id response", response.body)
        })
    })
    it('Delete Connector Flow', () => {
        doDeleteConnector(authKey, app_id, connector_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Connector response", response.body)
        })
    })
    it('Get Installer Installed Components', () => {
        doGetInstallerInstalComponent(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get installed Components with Status response", response.body)
        })
    })

    it('Get Connectors Flow', () => {
        getConnectors(authKey).then((response) => {
            cy.log("Get Connectors response", response.body)
            connectors_id = response.body.results[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Get Connectors Flow By ID', () => {
        doGetConnectorsByID(authKey, connectors_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Connectors Id response", response.body)
        })
    })
    
    it('Get Connectorscategories Flow', () => {
        getConnectorscategories(authKey).then((response) => {
            cy.log("Get Connectorscategories response", response.body)
            connectorscategoris_id = response.body.results[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Get Connectors categories Flow By ID', () => {
        doGetConnectorscategoriesByID(authKey, connectorscategoris_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Connectors categories Id response", response.body)
        })
    })

    it('Get Shareable Connectors Flow', () => {
        doGetShareableConnectors(authKey).then((response) => {
            cy.log("Get Connectors response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Add Shareable Connectors Flow', () => {
        doCreateShareableConnectors(authKey).then((response) => {
            expect(response.status).to.eq(201)
            shareableconnectors_id = response.body.id;
            cy.log("AddShareable Connectors", response.body)
        })
    })

    it('Get Shareable Connectors Flow', () => {
        doGetShareableConnectorsByID(authKey, shareableconnectors_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Code Components Using Id response", response.body)
        })
    })
    
    it('Get Shareable Data Models Flow', () => {
        doGetShareableDataModels(authKey).then((response) => {
            cy.log("Get Shareable Data Models response", response.body)
            shareabledatamodels_id = response.body.results[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Get Shareable Data Models Flow By ID', () => {
        doGetShareableDataModelsByID(authKey, shareabledatamodels_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Shareable Data Models Id response", response.body)
        })
    })

})
