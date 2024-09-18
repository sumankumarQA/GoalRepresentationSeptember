/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doSettingLogin } from '../pages/loginPage.js';
import { doGetCodePackage,app_name_update, doAddLibrary, doGetLibrary, doRemoveLibrary, doAddGcpPlatform, doGetRepoBranch, change_code_privacy_private_to_public, change_code_privacy_public_to_private, delete_app, doCreateCodePackage, doGetCodePackageById, doPatchCodePackage, doPutCodePackage } from '../pages/SettingsPage.js';
let app_id;
let app_name;
let authKey;
let libraryIds;
let libraryToBeAdded;
let codepackage_id;
let  packageName;
describe("Settings Page", () => {
    packageName = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Update app name Flow', () => {
        doSettingLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                app_name = response.body.name;
                libraryIds = ["54488", "54489", "54490", "54491", "54492"];
                libraryToBeAdded = libraryIds[Math.floor(Math.random() * libraryIds.length)];
                app_name_update(authKey, app_name, app_id).then((response) => {
                    expect(response.status).to.eq(200)
                    cy.log("update app name response", response.body)
                })
            })
        })
    })

    it('Add Library Flow', () => {
        doAddLibrary(authKey, app_id, libraryToBeAdded).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Add Library response", response.body)
        })
    })

    it('Get Library Flow', () => {
        doGetLibrary(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Library response", response.body)
        })
    })

    it('Get CodePackage Flow', () => {
        doGetLibrary(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Library response", response.body)
        })
    })

    it('Add Code Packages Flow', () => {
        doCreateCodePackage(authKey,packageName).then((response) => {
            expect(response.status).to.eq(201)
            codepackage_id = response.body.id;
            cy.log("Added Code Packages Flow", response.body)
        })
    })
    
    it('Get Code Packages Id Flow', () => {
        doGetCodePackageById(authKey, codepackage_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Code Packages Using Id response", response.body)
        })
    })

    it('Patch Code Packages Id Flow', () => {
        doPatchCodePackage(authKey,packageName,codepackage_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch Code Packages response", response.body)
        })
    })

    it('Put Code Packages Id Flow', () => {
        doPutCodePackage(authKey,packageName,codepackage_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put Code Packages", response.body)
        })
    })


    it('Get CodePackage Flow', () => {
        doGetCodePackage(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get CodePackage response", response.body)
        })
    })
    it('Remove Library Flow', () => {
        doRemoveLibrary(authKey, app_id, libraryToBeAdded).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Remove Library response", response.body)
        })
    })

    it('Get Rep branch Flow', () => {
        doGetRepoBranch(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Rep branch response", response.body)
        })
    })

    it('Change code privacy private to public Flow', () => {
        change_code_privacy_private_to_public(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Change code privacy private to public response", response.body)
        })
    })

    it('Change code privacy public to private Flow', () => {
        change_code_privacy_public_to_private(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Change code privacy public to private response", response.body)
        })
    })


    it('delete App Flow', () => {
        delete_app(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("delete app response", response.body)
        })
    })
    
})