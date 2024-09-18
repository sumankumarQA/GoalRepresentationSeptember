/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doNewPrdLogin } from '../pages/loginPage.js';
import { doDeleteUserRoleByIdOrganizationPRD, doPatchUserRoleOrganizationPRD, doPutUserRoleOrganizationPRD, doGetUserRoleByIdOrganizationPRD, doCreateUserRolesOrganizationPRD, doGetAllUserRolesOrganizationPRD, doGetPRDWishlist, doDeletePhaseByIdOrganizationPRD, doPutPhaseOrganizationPRD, doPatchPhaseOrganizationPRD, doCreatePhaseOrganizationPRD, doGetPhaseByIdOrganizationPRD, doGetAllPhaseOrganizationPRD, doRemoveModuleIntoFeatureOrganizationPRD, doAddModuleIntofeatureOrganizationPRD, doDeletefeatureUsingIdOrganizationPRD, doPatchfeatureUsingIdOrganizationPRD, doPutfeatureUsingIdOrganizationPRD, doGetfeatureUsingIdOrganizationPRD, doCreatefeatureOrganizationPRD, doGetAllfeatureOrganizationPRD, doMoveFetaureIntoCategoryOrganizationPRD, doDeleteOrganizationPRDCategoryUsingId, doPatchOrganizationPRDCategory, doPutOrganizationPRDCategory, doGetOrganizationPRDCategoryUsingId, doCreateOrganizationPRDCategory, doGetOrganizationPRDCategoryList, dogetOrganizationPRDEstimate, doGetOrganizationPRDList, doGenerateOrganizationPRD, doGetOrganizationPRDById, doPutOrganizationPRD, doPatchOrganizationPRD, doDeleteOrganizationPRD } from '../pages/NewPrdPage.js';

let app_name;
let app_id;
let authKey;
let generatePrd_id;
let category_id;
let feature_id;
let myPhaseId;
let userRoles_id;
describe("New PRD Page", () => {
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Get all PRD List by organization User', () => {
        doNewPrdLogin().then((response) => {
            authKey = response.body.key;
            doGetOrganizationPRDList(authKey).then((response) => {
                expect(response.status).to.eq(200)
                cy.log("Get all PRD List by organization User response", response.body)
            })
        })
    })
    // })

    it('Generate PRD by organization User without app', () => {
        doGenerateOrganizationPRD(authKey).then((response) => {
            let ids = response.body.data.id;
            generatePrd_id = ids - 1;
            expect(response.status).to.eq(202)
            cy.log(ids);
            cy.log(generatePrd_id);
            cy.log("Generate PRD by organization User Response", response.body)
        })
    })
    it('Get generated PRD Using Id by organization User', () => {
        doGetOrganizationPRDById(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get generated PRD Using Id by organization User", response.body)

        })
    })
    it('Put generated PRD by organization User', () => {
        doPutOrganizationPRD(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put generated PRD by organization User response", response.body)
        })
    })
    it('Patch generated PRD by organization User', () => {
        doPatchOrganizationPRD(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch generated PRD by organization User response", response.body)
        })
    })


    it('Get PRD Estimate by organization User', () => {
        dogetOrganizationPRDEstimate(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get PRD Estimate by organization User Response", response.body)
        })

    })
    it('Get PRD Category List by organization User', () => {
        doGetOrganizationPRDCategoryList(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Response Body:", JSON.stringify(response.body))
            cy.log("Get PRD Category List by organization User Response", response.body)
        })

    })


    it('Get All Phase from PRD for organization User', () => {
        doGetAllPhaseOrganizationPRD(authKey, generatePrd_id).then((response) => {
            cy.log("Response Body:", JSON.stringify(response.body));
            expect(response.status).to.eq(200);
        })
    })
    it('Create Phase by PRD organizational user', () => {
        doCreatePhaseOrganizationPRD(authKey, generatePrd_id).then((response) => {
            myPhaseId = response.body.id;
            expect(response.status).to.eq(201);
            cy.log("Response Body:", JSON.stringify(response.body));

        })
    })
    it('Get Phase by ID PRD organizational user', () => {
        doGetPhaseByIdOrganizationPRD(authKey, generatePrd_id, myPhaseId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Response Body:", JSON.stringify(response.body))

        })
    })
    it('Put Phase by ID PRD organizational user', () => {
        doPutPhaseOrganizationPRD(authKey, generatePrd_id, myPhaseId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Response Body:", JSON.stringify(response.body))

        })
    })
    it('Patch Phase by ID PRD organizational user', () => {
        doPatchPhaseOrganizationPRD(authKey, generatePrd_id, myPhaseId).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Response Body:", JSON.stringify(response.body))

        })
    })
    it('Get All User Roles from PRD for organization User', () => {
        doGetAllUserRolesOrganizationPRD(authKey, generatePrd_id).then((response) => {
            cy.log("Response Body:", JSON.stringify(response.body));
            expect(response.status).to.eq(200);
        })
    })
    it('Create User Roles  by PRD organizational user', () => {
        doCreateUserRolesOrganizationPRD(authKey, generatePrd_id).then((response) => {
            userRoles_id = response.body.id;
            expect(response.status).to.eq(201);
            cy.log("Response Body:", JSON.stringify(response.body));

        })
    })
    it('Get User Roles by ID PRD organizational user', () => {
        doGetUserRoleByIdOrganizationPRD(authKey, generatePrd_id, userRoles_id).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Response Body:", JSON.stringify(response.body))

        })
    })
    it('Put User Roles by ID PRD organizational user', () => {
        doPutUserRoleOrganizationPRD(authKey, generatePrd_id, userRoles_id).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Response Body:", JSON.stringify(response.body))

        })
    })
    it('Patch User Roles by ID PRD organizational user', () => {
        doPatchUserRoleOrganizationPRD(authKey, generatePrd_id, userRoles_id).then((response) => {
            expect(response.status).to.eq(200);
            cy.log("Response Body:", JSON.stringify(response.body))

        })
    })
    it('Delete User Roles by ID PRD organizational user', () => {
        doDeleteUserRoleByIdOrganizationPRD(authKey, generatePrd_id, userRoles_id).then((response) => {
            expect(response.status).to.eq(204);
            cy.log("Response Body:", JSON.stringify(response.body))

        })
    })

    it('Create PRD Category by organization User', () => {
        const tiltle = 'Cat' + (Math.random() + 1).toString(36).substring(7);
        doCreateOrganizationPRDCategory(authKey, generatePrd_id, tiltle, myPhaseId).then((response) => {
            category_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create PRD Category by organization User Response", response.body)
        })
    })
    it('Get category using Id for organization User', () => {
        doGetOrganizationPRDCategoryUsingId(authKey, generatePrd_id, category_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get category using Id for organization User Response", response.body)
        })
    })
    it('Put category using Id for organization User', () => {
        const tiltleput = 'CatPut' + (Math.random() + 1).toString(36).substring(7);
        doPutOrganizationPRDCategory(authKey, generatePrd_id, category_id, tiltleput, myPhaseId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put category using Id for organization User Response", response.body)
        })

    })
    it('Patch category using Id for organization User', () => {
        const tiltlepatch = 'CatPatch' + (Math.random() + 1).toString(36).substring(7);
        doPatchOrganizationPRDCategory(authKey, generatePrd_id, category_id, tiltlepatch, myPhaseId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch category using Id for organization User Response", response.body)
        })
    })

    // })
    // it('Move feature one category to another for organization User', () => {
    //     doMoveFetaureIntoCategoryOrganizationPRD(authKey, generatePrd_id,category_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Patch category using Id for organization User Response", response.body)
    //     })

    // })

    // it('Get all feature from category for organization User', () => {
    //     doGetAllfeatureOrganizationPRD(authKey, generatePrd_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get all feature from category for organization User Response", response.body)
    //     })

    // })
    // it('Create Feature into category for organization User', () => {
    //     doCreatefeaDtureOrganizationPRD(authKey, generatePrd_id).then((response) => {
    //         feature_id=response.body.id;
    //         expect(response.status).to.eq(201)
    //         cy.log("Create Feature into category for organization User Response", response.body)
    //     })

    // })

    // it('Get Feature using Id from category for organization User', () => {
    //     doGetfeatureUsingIdOrganizationPRD(authKey, generatePrd_id,feature_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Feature using Id from category for organization User Response", response.body)
    //     })

    // })
    // it('Put Feature using Id from category for organization User', () => {
    //     doPutfeatureUsingIdOrganizationPRD(authKey, generatePrd_id,feature_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Put Feature using Id from category for organization User Response", response.body)
    //     })

    // })
    // it('Patch Feature using Id from category for organization User', () => {
    //     doPatchfeatureUsingIdOrganizationPRD(authKey, generatePrd_id,feature_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Patch Feature using Id from category for organization User Response", response.body)
    //     })

    // })

    // it('Add Module into the feature for organization User', () => {
    //     doAddModuleIntofeatureOrganizationPRD(authKey, generatePrd_id,feature_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Add Module into the feature for organization User response", response.body)
    //     })

    // })
    // it('Remove Module into the feature for organization User', () => {
    //     doRemoveModuleIntoFeatureOrganizationPRD(authKey, generatePrd_id,feature_id).then((response) => {
    //         expect(response.status).to.eq(204)
    //         cy.log("Remove Module into the feature for organization User response", response.body)
    //     })

    // })
    // it('Delete Feature using Id from category for organization User', () => {
    //     doDeletefeatureUsingIdOrganizationPRD(authKey, generatePrd_id,feature_id).then((response) => {
    //         expect(response.status).to.eq(204)
    //         cy.log("Patch Feature using Id from category for organization User Response", response.body)
    //     })

    // })
    // it('Delete category using Id for organization User', () => {
    //     doDeleteOrganizationPRDCategoryUsingId(authKey, generatePrd_id,category_id).then((response) => {
    //         expect(response.status).to.eq(204)
    //         cy.log("Delete category using Id for organization User Response", response.body)
    //     })

    // })

    // it('Delete Phase by ID PRD organizational user', () => {
    //     doDeletePhaseByIdOrganizationPRD(authKey, generatePrd_id, myPhaseId).then((response) => {
    //         expect(response.status).to.eq(204);
    //         cy.log("Response Body:", JSON.stringify(response.body))

    //     })
    // })

    it('Delete generated PRD by organization User', () => {
        doDeleteOrganizationPRD(authKey, generatePrd_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete generated PRD by organization User Response", response.body)
        })

    })
})

