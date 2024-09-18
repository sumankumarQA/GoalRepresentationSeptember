import { authenticator } from 'otplib';
/// <reference types = "cypress"/>

export const app_name_update = (auth_key, app_name, app_id) => {

    cy.readFile('cypress/fixtures/api_appNameUpdate.json').then((data) => {
        data.custom_name = app_name + "1"
        cy.writeFile('cypress/fixtures/api_appNameUpdate.json', JSON.stringify(data))
    })
    return cy.fixture('api_appNameUpdate.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('updateAppName') + app_id + "/",
            body: myFixture,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })

}

export const change_code_privacy_private_to_public = (auth_key, app_id) => {
    return cy.fixture('api_change_code_pvt_to_pub.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('codePrivacyPrivateToPublic1') + app_id + Cypress.env('codePrivacyPrivateToPublic2'),
            body: myFixture,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })

}
export const doGetCodePackage = (auth_key, app_id) => {
   
      return  cy.request({
            method: 'GET',
            url: Cypress.env('baseUrl') + Cypress.env('getCodePackage1') + app_id + Cypress.env('getCodePackage2'),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    

}

export const doCreateCodePackage = (auth_key,packageName) => {
    cy.readFile('cypress/fixtures/api_addCodePackages.json').then((data) => {
        data.package_name=packageName;
        cy.writeFile('cypress/fixtures/api_addCodePackages.json', JSON.stringify(data))
    })
    return cy.fixture('api_addCodePackages.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addCodePacakge'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doGetCodePackageById = (auth_key, codepackage_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCodePackageById1')+Cypress.env('getCodePackageById2')+codepackage_id+Cypress.env('getCodePackageById3'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}

export const doPatchCodePackage = (auth_key,packageName,codepackage_id) => {
    cy.readFile('cypress/fixtures/api_patchCodePackages.json').then((data) => {
        data.package_name = packageName ;
        cy.writeFile('cypress/fixtures/api_patchCodePackages.json', JSON.stringify(data));
    });
    return cy.fixture('api_patchCodePackages.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchCodePackageById1')+Cypress.env('patchCodePackageById2')+codepackage_id+Cypress.env('patchCodePackageById3'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doPutCodePackage = (auth_key,packageName,codepackage_id) => {
    cy.readFile('cypress/fixtures/api_putCodePackages.json').then((data) => {
        data.package_name = packageName ;
        cy.writeFile('cypress/fixtures/api_putCodePackages.json', JSON.stringify(data));
    });
    return cy.fixture('api_putCodePackages.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putCodePackageById1')+Cypress.env('putCodePackageById2')+codepackage_id+Cypress.env('putCodePackageById3'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const change_code_privacy_public_to_private = (auth_key, app_id) => {
    return cy.fixture('api_change_code_pub_to_pvt.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('codePrivacyPublicToPrivate1') + app_id + Cypress.env('codePrivacyPublicToPrivate2'),
            body: myFixture,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })

}

export const delete_app = (auth_key, app_id) => {

    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteApp') + app_id + '/',

        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })


}

export const doAddLibrary = (auth_key, app_id, library_id) => {

    return cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl') + Cypress.env('addLibrary1') + app_id + Cypress.env('addLibrary2') + library_id + Cypress.env('addLibrary3'),

        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })


}

export const doGetLibrary = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getLibrary1') + app_id + Cypress.env('getLibrary2'),

        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
}

export const doRemoveLibrary = (auth_key, app_id, library_id) => {

    return cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl') + Cypress.env('removeLibrary1') + app_id + Cypress.env('removeLibrary2') + library_id + Cypress.env('removeLibrary3'),

        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
}

export const doGetRepoBranch = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getRepoBranch1') + app_id + Cypress.env('getRepoBranch2'),

        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
}

export const doAddIcons = (auth_key, project) => {
    return cy.fixture('api_addIcons.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            body: myFixture,
            url: Cypress.env('baseUrl') + Cypress.env('postIcons')+project,
            headers: {
                'Authorization': 'Token ' + auth_key
            },
        }).then((response) => {
            return response;
        })
    })
}