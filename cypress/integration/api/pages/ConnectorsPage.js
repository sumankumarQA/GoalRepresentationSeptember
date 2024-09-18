/// <reference types = "cypress"/>

export const doCreateConnector = (auth_key, app_id, connector_name) => {
    cy.readFile('cypress/fixtures/api_addConnectors.json').then((data) => {
        data.name = connector_name
        cy.writeFile('cypress/fixtures/api_addConnectors.json', JSON.stringify(data));
    });
    return cy.fixture('api_addConnectors.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createConnectors1') + app_id + Cypress.env('createConnectors2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doGetConnector = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getConnectors1') + app_id + Cypress.env('getConnectors2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doGetConnectorUsingId = (auth_key, app_id, connector_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getConnectorsUsingID1') + app_id + Cypress.env('getConnectorsUsingID2') + connector_id,
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doUpdateConnector = (auth_key, app_id, connector_name, connector_description, connector_id) => {
    cy.readFile('cypress/fixtures/api_addConnectors.json').then((data) => {
        data.name = connector_name;
        data.description = connector_description;
        cy.writeFile('cypress/fixtures/api_addConnectors.json', JSON.stringify(data));
    });
    return cy.fixture('api_addConnectors.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('appsConnectorUpdate1') + app_id + Cypress.env('appsConnectorUpdate2') + connector_id + Cypress.env('appsconnectorUpdate3'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doEditConnector = (auth_key, app_id, connector_description, connector_id) => {
    cy.readFile('cypress/fixtures/api_addConnectors.json').then((data) => {
        data.description = connector_description
        cy.writeFile('cypress/fixtures/api_addConnectors.json', JSON.stringify(data));
    });
    return cy.fixture('api_addConnectors.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('editConnectors1') + app_id + Cypress.env('editConnectors2') + connector_id,
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doDeleteConnector = (auth_key, app_id, connector_id) => {

    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteConnector1') + app_id + Cypress.env('deleteConnector2') + connector_id+Cypress.env('deleteConnector3'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doGetInstallerInstalComponent = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getInstallerInstalledComponents1') + app_id + Cypress.env('getInstallerInstalledComponents2') ,
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const getConnectors = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getConnectors'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetConnectorsByID = (auth_key, connectors_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getConnectorsByID1')+connectors_id+Cypress.env('getConnectorsByID2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}

export const getConnectorscategories = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getConnectorscategories'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetConnectorscategoriesByID = (auth_key, connectorscategoris_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getConnectorsCategoriesByID1')+connectorscategoris_id+Cypress.env('getConnectorsCategoriesByID2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}

export const doGetShareableConnectors = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getShareableConnectors'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}

export const doCreateShareableConnectors = (auth_key) => {
    return cy.fixture('api_addShareableconnectors.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addShareableConnectors'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doGetShareableConnectorsByID = (auth_key, shareableconnectors_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getShareableConnectorsById1')+Cypress.env('getShareableConnectorsById2')+shareableconnectors_id+Cypress.env('getShareableConnectorsById3'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}


export const doGetShareableDataModels = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getShareableDataModels'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}

export const doGetShareableDataModelsByID = (auth_key, shareabledatamodels_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getShareableDataModelsByID1')+Cypress.env('getShareableDataModelsByID2')+shareabledatamodels_id+Cypress.env('getShareableDataModelsByID3'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}