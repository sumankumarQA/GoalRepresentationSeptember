/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doModuleLogin } from '../pages/loginPage.js';
import { doGetapireports,doGetmodulelist, moduleInstall, doGetapiPreinstallmodule, doCreateModules,doGetModulesById,doPatchModules,doPutModules } from '../pages/ModulePage.js';


let authKey;
let app_id;
let app_name;
let module_id;
describe("Module Page", () => {
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Api_pre_install_module', () => {
        doModuleLogin().then((response) => {
            authKey = response.body.key;
            cy.log("login response", response.body)
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("App Create Response", response.body)
                app_id = response.body.id;
                app_name = response.body.name;
                module_id = 239;
                doGetapiPreinstallmodule(authKey, app_id, module_id).then((response) => {
                    expect(response.status).to.eq(200)

                })
            })
        })

    })
    // it('Add DataModel Flow', () => {
    //     cy.resloveSyncIssue();
    //     moduleInstall(authKey, app_id).then((response) => {
    //         expect(response.status).to.eq(202)
    //         cy.log("Module installation triggered", response.body)
    //     })
    // })

    it('Get Modules List', () => {
        doGetmodulelist(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Modules List", response.body)
        })
    })

    it('Create module', () => {
        doCreateModules(authKey, app_id).then((response) => {
            expect(response.status).to.eq(201)
            module_id = response.body.id;
            cy.log("Create Modules Status response", response.body)
        })
    })

    it('Get modules Id Flow', () => {
        doGetModulesById(authKey,app_id,module_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get module Using Id response", response.body)
        })
    })

    it('Patch modules Id Flow', () => {
        doPatchModules(authKey,app_id,module_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch modules response", response.body)
        })
    })

    it('Put modules Id Flow', () => {
        doPutModules(authKey,app_id,module_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put modules", response.body)
        })
    })
    it('Get Reports', () => {
        doGetapireports(authKey,app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Reports get result", response.body)
        })
    })
})
   
