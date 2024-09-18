/// <reference types = "cypress"/>
export const moduleInstall = (auth_key, app_id) => {
    return cy.fixture('api_add_module.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addmodules1') + app_id + Cypress.env('addmodules2'),
            body: myFixture,
            headers: {
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })}
    
    export const doGetapiPreinstallmodule = (auth_key,app_id,module_id) => {

       return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getpreinstallmodule2') + app_id + Cypress.env('getpreinstallmodule1')+module_id,
        headers: {
            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
    }

export const doGetmodulelist = (auth_key,app_id,module_id) => {

    return cy.request({
     method: 'GET',
     url: Cypress.env('baseUrl') + Cypress.env('getmoduleslist1') + app_id + Cypress.env('getmoduleslist2'),
     headers: {
         // 'Content-Type': 'application/json',
         // 'Accept': 'application/json',
         'Authorization': 'Token ' + auth_key,
     }
 }).then((response) => {
     return response;
 })
}
export const doCreateModules = (auth_key, app_id) => {
    return cy.fixture('api_post_Modules_Create.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('postCreatemodules1') + app_id + Cypress.env('postCreatemodules2'),
            body: myFixture,
            headers: {
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })}

    export const doGetModulesById = (auth_key,app_id, module_id) => {
        return cy.request({
            method: 'GET',
            url: Cypress.env('baseUrl') + Cypress.env('getmodulesbyID1')+app_id+Cypress.env('getmodulesbyID2')+module_id+Cypress.env('getmodulesbyID3'),
            headers: {
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            return response;
        })
    }

    export const doPatchModules = (auth_key,app_id, module_id) => {
        return cy.fixture('api_patchModules.json').then((myFixture) => {
            cy.request({
                method: 'PATCH',
                url: Cypress.env('baseUrl') + Cypress.env('patchmodulesbyID1')+app_id+Cypress.env('patchmodulesbyID2')+module_id+Cypress.env('patchmodulesbyID3'),
                headers: {
                    'Authorization': 'Token ' + auth_key
                },
                body: myFixture
            }).then((response) => {
                return response;
            })
        })
    }

    export const doPutModules = (auth_key,app_id,module_id) => {
      
        return cy.fixture('api_putModules.json').then((myFixture) => {
            cy.request({
                method: 'PUT',
                url: Cypress.env('baseUrl') + Cypress.env('putmodulesbyID1')+app_id+Cypress.env('putmodulesbyID2')+module_id+Cypress.env('putmodulesbyID3'),
                headers: {
                    'Authorization': 'Token ' + auth_key
                },
                body: myFixture
            }).then((response) => {
                return response;
            })
        })
    }
    
    export const doGetapireports = (auth_key,app_id) => {

        return cy.request({
         method: 'GET',
         url: Cypress.env('baseUrl') + Cypress.env('getReports1') + app_id + Cypress.env('getReports2'),
         headers: {
             // 'Content-Type': 'application/json',
             // 'Accept': 'application/json',
             'Authorization': 'Token ' + auth_key,
         }
     }).then((response) => {
         return response;
     })

    }