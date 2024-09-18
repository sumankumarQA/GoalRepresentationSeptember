import { authenticator } from 'otplib';
/// <reference types = "cypress"/>

export const doLogin = () => {
    // ******************* LOGIN AND GET AUTH KEY ******************** //
    const tokenvalue = authenticator.generate("EQ2WUPX7QC3VIPGPMQ5M5AOYADH4XMHT");
    cy.readFile('cypress/fixtures/api_login.json').then((data) => {
        data.token = parseInt(tokenvalue);
        cy.writeFile('cypress/fixtures/api_login.json', JSON.stringify(data));
    });
    return cy.fixture('api_login.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('loginEndPoint'),
            retryOnStatusCodeFailure: true,
            body: myFixture
        }).then((response) => {
            return response;
        })
    })

}

export const doCatalogLogin = () => {
    const tokenvalue = authenticator.generate("Z24WO37GBZ6BEXCRZQXS73U5UE42XIEZ");
    cy.readFile('cypress/fixtures/api_CatalogLogin.json').then((data) => {
        data.token = parseInt(tokenvalue);
        cy.writeFile('cypress/fixtures/api_CatalogLogin.json', JSON.stringify(data));
    });
    return cy.fixture('api_CatalogLogin.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('loginEndPoint'),
            retryOnStatusCodeFailure: true,
            body: myFixture
        }).then((response) => {
            return response;
        })
    })

}

export const doConnectorLogin = () => {
    const tokenvalue = authenticator.generate("TPWNVW53DVA3XAQPDTPOIPKFS2QBG7EZ");
    cy.readFile('cypress/fixtures/api_ConnectorLogin.json').then((data) => {
        data.token = parseInt(tokenvalue);
        cy.writeFile('cypress/fixtures/api_ConnectorLogin.json', JSON.stringify(data));
    });
    return cy.fixture('api_ConnectorLogin.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('loginEndPoint'),
            retryOnStatusCodeFailure: true,
            body: myFixture
        }).then((response) => {
            return response;
        })
    })

}

export const doDashboardLogin = () => {
    const tokenvalue = authenticator.generate("WP465RPUQHEL744Z3EQJ5XNJ7F5NQKQT");
    cy.readFile('cypress/fixtures/api_DashboardLogin.json').then((data) => {
        data.token = parseInt(tokenvalue);
        cy.writeFile('cypress/fixtures/api_DashboardLogin.json', JSON.stringify(data));
    });
    return cy.fixture('api_DashboardLogin.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('loginEndPoint'),
            retryOnStatusCodeFailure: true,
            body: myFixture
        }).then((response) => {
            return response;
        })
    })

}
export const doDatamodelLogin = () => {
    const tokenvalue = authenticator.generate("ORECW7JFYJULJBRHYFLDQLZN4AFKNQJK");
    cy.readFile('cypress/fixtures/api_DatamodelLogin.json').then((data) => {
        data.token = parseInt(tokenvalue);
        cy.writeFile('cypress/fixtures/api_DatamodelLogin.json', JSON.stringify(data));
    });
    return cy.fixture('api_DatamodelLogin.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('loginEndPoint'),
            retryOnStatusCodeFailure: true,
            body: myFixture
        }).then((response) => {
            return response;
        })
    })

}
export const doJobLogin = () => {
    const tokenvalue = authenticator.generate("HDTXQQHIYCYUCFI6Y4E3JZAJZIWI5NMG");
    cy.readFile('cypress/fixtures/api_JobLogin.json').then((data) => {
        data.token = parseInt(tokenvalue);
        cy.writeFile('cypress/fixtures/api_JobLogin.json', JSON.stringify(data));
    });
    return cy.fixture('api_JobLogin.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('loginEndPoint'),
            retryOnStatusCodeFailure: true,
            body: myFixture
        }).then((response) => {
            return response;
        })
    })

}
export const doModuleLogin = () => {
    const tokenvalue = authenticator.generate("MATTN7GAZWPZTG5EH5OBVIXHMWGFEFPJ");
    cy.readFile('cypress/fixtures/api_moduleLogin.json').then((data) => {
        data.token = parseInt(tokenvalue);
        cy.writeFile('cypress/fixtures/api_moduleLogin.json', JSON.stringify(data));
    });
    return cy.fixture('api_moduleLogin.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('loginEndPoint'),
            retryOnStatusCodeFailure: true,
            body: myFixture
        }).then((response) => {
            return response;
        })
    })

}
export const doPrdLogin = () => {
    const tokenvalue = authenticator.generate("4GBW4YY73HZUBVFTRXQHSEK7ZQQRPAAG");
    cy.readFile('cypress/fixtures/api_PrdLogin.json').then((data) => {
        data.token = parseInt(tokenvalue);
        cy.writeFile('cypress/fixtures/api_PrdLogin.json', JSON.stringify(data));
    });
    return cy.fixture('api_PrdLogin.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('loginEndPoint'),
            retryOnStatusCodeFailure: true,
            body: myFixture
        }).then((response) => {
            return response;
        })
    })

}
export const doSettingLogin = () => {
    const tokenvalue = authenticator.generate("WS4RJTYO5VSFQV7ASH5YVWSNITUROJAP");
    cy.readFile('cypress/fixtures/api_SettingLogin.json').then((data) => {
        data.token = parseInt(tokenvalue);
        cy.writeFile('cypress/fixtures/api_SettingLogin.json', JSON.stringify(data));
    });
    return cy.fixture('api_SettingLogin.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('loginEndPoint'),
            retryOnStatusCodeFailure: true,
            body: myFixture
        }).then((response) => {
            return response;
        })
    })

}
export const doStudioLogin = () => {
    const tokenvalue = authenticator.generate("5WREQXQTNINRPVDV66RCYHO3XMLBPYYE");
    cy.readFile('cypress/fixtures/api_StudioLogin.json').then((data) => {
        data.token = parseInt(tokenvalue);
        cy.writeFile('cypress/fixtures/api_StudioLogin.json', JSON.stringify(data));
    });
    return cy.fixture('api_StudioLogin.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('loginEndPoint'),
            retryOnStatusCodeFailure: true,
            body: myFixture
        }).then((response) => {
            return response;
        })
    })

}
export const doTaskLogin = () => {
    const tokenvalue = authenticator.generate("PWHYKHZV52N7SEL2BPASSV5UF4JCBSJW");
    cy.readFile('cypress/fixtures/api_TaskLogin.json').then((data) => {
        data.token = parseInt(tokenvalue);
        cy.writeFile('cypress/fixtures/api_TaskLogin.json', JSON.stringify(data));
    });
    return cy.fixture('api_TaskLogin.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('loginEndPoint'),
            retryOnStatusCodeFailure: true,
            body: myFixture
        }).then((response) => {
            return response;
        })
    })

}
export const doTeammemberLogin = () => {
    const tokenvalue = authenticator.generate("2IQSEZQ7UHKSO2KW3JMOEQXPOEFSOYET");
    cy.readFile('cypress/fixtures/api_TeammemberLogin.json').then((data) => {
        data.token = parseInt(tokenvalue);
        cy.writeFile('cypress/fixtures/api_TeammemberLogin.json', JSON.stringify(data));
    });
    return cy.fixture('api_TeammemberLogin.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('loginEndPoint'),
            retryOnStatusCodeFailure: true,
            body: myFixture
        }).then((response) => {
            return response;
        })
    })

}
export const doNewPrdLogin = () => {
    const tokenvalue = authenticator.generate("EQ2WUPX7QC3VIPGPMQ5M5AOYADH4XMHT");
    cy.readFile('cypress/fixtures/api_login.json').then((data) => {
        data.token = parseInt(tokenvalue);
        cy.writeFile('cypress/fixtures/api_login.json', JSON.stringify(data));
    });
    return cy.fixture('api_login.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('loginEndPoint'),
            retryOnStatusCodeFailure: true,
            body: myFixture
        }).then((response) => {
            return response;
        })
    })

}

export const doLogout = (auth_key) => {
    // ******************* Logout ******************** //


    return cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl') + '/api/v2/logout/',
        headers: {

            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};

