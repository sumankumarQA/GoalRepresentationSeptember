/// <reference types = "cypress"/>
export const doGetOrganizationPRDList = (auth_key) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getOrganizationPRDList'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};

export const doGenerateOrganizationPRD = (auth_key) => {
    return cy.fixture('api_generateOrganizationPRD.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            // url: Cypress.env('baseUrl') + Cypress.env('generateOrganizationPRD'),
            url: 'https://crowdbotics-slack-dev.crowdbotics.com/api/v1/prd/generate-prd/',
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doGetOrganizationPRDById = (auth_key, generatePrd_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getOrganizationPRDById1') + generatePrd_id + Cypress.env('getOrganizationPRDById2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};
export const doPutOrganizationPRD = (auth_key, generatePrd_id) => {
    return cy.fixture('api_putGenerateOrganizationPRD.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putOrganizationPRDById1') + generatePrd_id + Cypress.env('putOrganizationPRDById2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doPatchOrganizationPRD = (auth_key, generatePrd_id) => {
    return cy.fixture('api_patchGenerateOrganizationPRD.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchOrganizationPRDById1') + generatePrd_id + Cypress.env('patchOrganizationPRDById2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doDeleteOrganizationPRD = (auth_key, generatePrd_id) => {

    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteOrganizationPRD1') + generatePrd_id + Cypress.env('deleteOrganizationPRD2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};

export const dogetOrganizationPRDEstimate = (auth_key, generatePrd_id) => {
    return cy.fixture('api_generateOrganizationPRD.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('getOrganizationPRDEstimate1') + generatePrd_id + Cypress.env('getOrganizationPRDEstimate2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doGetOrganizationPRDCategoryList = (auth_key, generatePrd_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getOrganizationPRDCategoryList1') + generatePrd_id + Cypress.env('getOrganizationPRDCategoryList2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};
export const doCreateOrganizationPRDCategory = (auth_key, generatePrd_id, tiltle, myPhaseId) => {
    cy.readFile('cypress/fixtures/api_CreateOrganizationPRDCategory.json').then((data) => {
        data.title = tiltle
        data.phase = myPhaseId
        cy.writeFile('cypress/fixtures/api_CreateOrganizationPRDCategory.json', JSON.stringify(data))
    })
    return cy.fixture('api_CreateOrganizationPRDCategory.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createOrganizationPRDCategory1') + generatePrd_id + Cypress.env('createOrganizationPRDCategory2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};
export const doGetOrganizationPRDCategoryUsingId = (auth_key, generatePrd_id, category_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getOrganizationPRDCategoryUsingId1') + generatePrd_id + Cypress.env('getOrganizationPRDCategoryUsingId2') + category_id + Cypress.env('getOrganizationPRDCategoryUsingId3'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};
export const doPutOrganizationPRDCategory = (auth_key, generatePrd_id, category_id, tiltle, myPhaseId) => {
    cy.readFile('cypress/fixtures/api_putOrganizationPRDCategoryUsingId.json').then((data) => {
        data.title = tiltle;
        data.phase = myPhaseId;
        cy.writeFile('cypress/fixtures/api_putOrganizationPRDCategoryUsingId.json', JSON.stringify(data))
    })
    return cy.fixture('api_putOrganizationPRDCategoryUsingId.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putOrganizationPRDCategoryUsingId1') + generatePrd_id + Cypress.env('putOrganizationPRDCategoryUsingId2') + category_id + Cypress.env('putOrganizationPRDCategoryUsingId3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doPatchOrganizationPRDCategory = (auth_key, generatePrd_id, category_id, tiltle, myPhaseId) => {
    cy.readFile('cypress/fixtures/api_patchOrganizationPRDCategoryUsingId.json').then((data) => {
        data.title = tiltle;
        data.phase = myPhaseId;
        cy.writeFile('cypress/fixtures/api_patchOrganizationPRDCategoryUsingId.json', JSON.stringify(data))
    })
    return cy.fixture('api_patchOrganizationPRDCategoryUsingId.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchOrganizationPRDCategoryUsingId1') + generatePrd_id + Cypress.env('patchOrganizationPRDCategoryUsingId2') + category_id + Cypress.env('patchOrganizationPRDCategoryUsingId3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doDeleteOrganizationPRDCategoryUsingId = (auth_key, generatePrd_id, category_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteOrganizationPRDCategoryUsingId1') + generatePrd_id + Cypress.env('deleteOrganizationPRDCategoryUsingId2') + category_id + Cypress.env('deleteOrganizationPRDCategoryUsingId3'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};
export const doMoveFetaureIntoCategoryOrganizationPRD = (auth_key, generatePrd_id, category_id) => {
    return cy.fixture('api_moveFeatureIntoCategory.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('moveFeatureIntoCategory1') + generatePrd_id + Cypress.env('moveFeatureIntoCategory2') + category_id + Cypress.env('moveFeatureIntoCategory3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};
export const doGetAllfeatureOrganizationPRD = (auth_key, generatePrd_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAllfeatureOrganizationPRD1') + generatePrd_id + Cypress.env('getAllfeatureOrganizationPRD1'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};
export const doCreatefeatureOrganizationPRD = (auth_key, generatePrd_id) => {
    return cy.fixture('api_createFeaturePRD.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createfeatureOrganizationPRD1') + generatePrd_id + Cypress.env('createfeatureOrganizationPRD1'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};
export const doGetfeatureUsingIdOrganizationPRD = (auth_key, generatePrd_id, feature_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getfeatureUsingIdOrganizationPRD1') + generatePrd_id + Cypress.env('getfeatureUsingIdOrganizationPRD2') + feature_id + Cypress.env('getfeatureUsingIdOrganizationPRD3'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};
export const doPutfeatureUsingIdOrganizationPRD = (auth_key, generatePrd_id, feature_id) => {
    return cy.fixture('api_PutfeatureUsingIdOrganizationPRD.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putfeatureUsingIdOrganizationPRD1') + generatePrd_id + Cypress.env('putfeatureUsingIdOrganizationPRD2') + feature_id + Cypress.env('putfeatureUsingIdOrganizationPRD3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};
export const doPatchfeatureUsingIdOrganizationPRD = (auth_key, generatePrd_id, feature_id) => {
    return cy.fixture('api_PatchfeatureUsingIdOrganizationPRD.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchfeatureUsingIdOrganizationPRD1') + generatePrd_id + Cypress.env('patchfeatureUsingIdOrganizationPRD2') + feature_id + Cypress.env('patchfeatureUsingIdOrganizationPRD3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doDeletefeatureUsingIdOrganizationPRD = (auth_key, generatePrd_id, feature_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deletefeatureUsingIdOrganizationPRD1') + generatePrd_id + Cypress.env('deletefeatureUsingIdOrganizationPRD2') + feature_id + Cypress.env('deletefeatureUsingIdOrganizationPRD3'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};
export const doAddModuleIntofeatureOrganizationPRD = (auth_key, generatePrd_id, feature_id) => {
    return cy.fixture('api_addModuleIntoFeatureOrganizationPRD.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addModuleIntoFeatureOrganizationPRD1') + generatePrd_id + Cypress.env('addModuleIntoFeatureOrganizationPRD2') + feature_id + Cypress.env('addModuleIntoFeatureOrganizationPRD3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doRemoveModuleIntoFeatureOrganizationPRD = (auth_key, generatePrd_id, feature_id) => {
    return cy.fixture('api_removeModuleIntoFeatureOrganizationPRD.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('removeModuleIntoFeatureOrganizationPRD1') + generatePrd_id + Cypress.env('removeModuleIntoFeatureOrganizationPRD2') + feature_id + Cypress.env('removeModuleIntoFeatureOrganizationPRD3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};
export const doGetAllPhaseOrganizationPRD = (auth_key, generatePrd_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAllPhaseOrganizationPRD1') + generatePrd_id + Cypress.env('getAllPhaseOrganizationPRD2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};
export const doCreatePhaseOrganizationPRD = (auth_key, generatePrd_id) => {
    return cy.fixture('api_add_PhaseOrganizationalUser.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addPhaseOrganizationPRD1') + generatePrd_id + Cypress.env('addPhaseOrganizationPRD2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};
export const doGetPhaseByIdOrganizationPRD = (auth_key, generatePrd_id, phase_id) => {
    return cy.request({
        method: 'GET',
        //url: Cypress.env('baseUrl') + Cypress.env('getPhaseByIdByoriganization1')+generatePrd_id+ Cypress.env('getPhaseByIdByoriganization2')+phase_id+Cypress.env('getPhaseByIdByoriganization3'), 
        url: Cypress.env('baseUrl') + "/api/v1/prd/" + generatePrd_id + "/phase/" + phase_id + "/",


        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};

export const doPutPhaseOrganizationPRD = (auth_key, generatePrd_id, phase_id) => {
    return cy.fixture('api_put_PhaseOrganizationalUser.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putPhaseByIdByoriganization1') + generatePrd_id + Cypress.env('putPhaseByIdByoriganization2') + phase_id + Cypress.env('putPhaseByIdByoriganization3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};
export const doPatchPhaseOrganizationPRD = (auth_key, generatePrd_id, phase_id) => {
    return cy.fixture('api_patch_PhaseOrganizationalUser.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchPhaseByIdByoriganization1') + generatePrd_id + Cypress.env('patchPhaseByIdByoriganization2') + phase_id + Cypress.env('patchPhaseByIdByoriganization3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};
export const doDeletePhaseByIdOrganizationPRD = (auth_key, generatePrd_id, phase_id) => {
    return cy.request({
        method: 'DELETE',
        //url: Cypress.env('baseUrl') + Cypress.env('getPhaseByIdByoriganization1')+generatePrd_id+ Cypress.env('getPhaseByIdByoriganization2')+phase_id+Cypress.env('getPhaseByIdByoriganization3'), 
        url: Cypress.env('baseUrl') + "/api/v1/prd/" + generatePrd_id + "/phase/" + phase_id + "/",


        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};
export const doGetAllUserRolesOrganizationPRD = (auth_key, generatePrd_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAllRolesOrganizationPRD1') + generatePrd_id + Cypress.env('getAllRolesOrganizationPRD2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};
export const doCreateUserRolesOrganizationPRD = (auth_key, generatePrd_id) => {
    return cy.fixture('api_add_RolesOrganizationalUser.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addUserRolesOrganizationPRD1') + generatePrd_id + Cypress.env('addUserRolesOrganizationPRD2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};
export const doGetUserRoleByIdOrganizationPRD = (auth_key, generatePrd_id, userRole_id) => {
    return cy.request({
        method: 'GET',
        //url: Cypress.env('baseUrl') + Cypress.env('getUserRolesByIdByoriganization1')+generatePrd_id+ Cypress.env('getUserRolesByIdByoriganization2')+userRole_id+Cypress.env('getUserRolesByIdByoriganization3'), 
        url: Cypress.env('baseUrl') + "/api/v1/prd/" + generatePrd_id + "/roles/" + userRole_id + "/",


        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};

export const doPutUserRoleOrganizationPRD = (auth_key, generatePrd_id, userRole_id) => {
    return cy.fixture('api_put_userRolesOrganizationalUser.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putUserRolesByIdByoriganization1') + generatePrd_id + Cypress.env('putUserRolesByIdByoriganization2') + userRole_id + Cypress.env('putUserRolesByIdByoriganization3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};
export const doPatchUserRoleOrganizationPRD = (auth_key, generatePrd_id, userRole_id) => {
    return cy.fixture('api_patch_userRolesOrganizationalUser.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchUserRolesByIdByoriganization1') + generatePrd_id + Cypress.env('patchUserRolesByIdByoriganization2') + userRole_id + Cypress.env('patchUserRolesByIdByoriganization3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};
export const doDeleteUserRoleByIdOrganizationPRD = (auth_key, generatePrd_id, userRole_id) => {
    return cy.request({
        method: 'DELETE',
        //url: Cypress.env('baseUrl') + Cypress.env('deleteUserRolesByIdByoriganization1')+generatePrd_id+ Cypress.env('deleteUserRolesByIdByoriganization2')+userRole_id+Cypress.env('deleteUserRolesByIdByoriganization3'), 
        url: Cypress.env('baseUrl') + "/api/v1/prd/" + generatePrd_id + "/roles/" + userRole_id + "/",


        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    }).then((response) => {
        return response;
    })
};



