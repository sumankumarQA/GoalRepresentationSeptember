/// <reference types = "cypress"/>

import { doGetMobilebuilds,doPostresendverification,doGetSlides,doPostslides,doDeleteCertificationsid,doPatchCertificationsid,doputCertificationsid,dogetCertificationsid,doPostCertifications, dogetCertifications,doDeleteFile,doUpdateWithPatchFile,doUpdateWithPutFile,doGetFileById,doCreateFile,doDeleteComponent,doUpdateWithPatchComponent,doUpdateWithPutComponent,doGetComponentById,doCreateComponent,doGetComponentList,doDeleteBugTask,doUpdateWithPatchBugTask,doUpdateWithPutBugTask,doGetBugTaskById,doCreateBugTask,doGetBugTaskList,doGetAppetizeBuilds,getAppListById,dogGetFilesList,getEdges,getUserList,getAuditLogList,getAttributes,doCreateAttributes,getNotification, getAppSupportType, getCertificateList, doGetSkillsList, appTypeList, appTypeUsingId, doCteareApp, searchApp, doCheckAppGeneration, getInvoice, searchInvoice, getAppLogs, getAppLogsUsingLogID, getStatistics, getBuildstages, getCandidates, getFeedbacks, getFeedbacksCategories,getReports, doGetFeedbacksCategoriesByID,dogetcbusers,doPostcbusers,dogetcbusersbyId,doputcbusersbyId,dopatchcbusersbyId, doGetReportsByID,doGetDevloperrequest,doGetDevloperrequestByID, doGetResponses, doGetAppetizedevices, dogGetAPIspec, doGetAttributesById,doGetLogs,doGetLogsById, doPostDashboardfeedbacks, doGetMemberfeedback, doGetfeedbackmemberByID, doGetAddons, doGetAddonsByID, doGetScaffolds, doTOTPdevice, doGetSocialaccounts, doGetSettingsfe, doGetPeojectClones, doGetProjectClonesByID,doPostDashboardFeedack,doPostMagicLink,doPostOutGrow,doGetSocialApp,doGetSocialAppByID,doPostTotpDeviceRemove,doGetUser,doPutUser,doGetUsers,doGetUsersByID} from '../pages/DashboardPage.js';
import { doDashboardLogin } from '../pages/loginPage.js';

let component_id;
let appname;
let authKey;
let log_id;
let file_id;
let attribute_id;
let app_id;
let bugTask_id;
let app_type;
let Certifications_id;
let feedbacks_id;
let cb_usersid;
let reports_id;
let developerrequest_id;
let attributes_id ;
let logs_id;
let memberfeedback_id;
let addons_id;
let projectclones_id ;
let social_id = 1 ;
let users_id = 1;
describe("Dashboard Page", () => {
    const app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    const username = 'cbrahul' + (Math.random() + 1).toString(36).substring(7);
    it('Create App Flow', () => {
        doDashboardLogin().then((response) => {
            cy.log("login response", response.body.key)
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                appname = response.body.name;
                app_id = response.body.id;
                cy.log("login response", response.body)
                expect(response.status).to.eq(201)
                expect(response.body.name, "App name is not matching").to.eq(app_name)
            })
        })
    })
    
    it('Get Notification Flow', () => {
        getNotification(authKey, app_id).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Search App Flow', () => {
        searchApp(authKey, appname).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Apptype List Flow', () => {
        appTypeList(authKey).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get Appetize Builds Flow', () => {
        doGetAppetizeBuilds(authKey,app_id).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })
    
    it('Apptype List By Id Flow', () => {
        getAppListById(authKey).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })
   

    
    it('Get Skill List Flow', () => {
        doGetSkillsList(authKey).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })
    
    // *** Test case is not available on swagger
    // it('Get Bug Task List Flow', () => {
    //     doGetBugTaskList(authKey,app_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Bug Task List response", response.body)

    //     })
    // })

    // *** Test cases is not available on swagger
    // it('Create Bug Task  Flow', () => {
    //     doCreateBugTask(authKey,app_id).then((response) => {
    //         bugTask_id=response.body.id;
    //         expect(response.status).to.eq(201)
    //         cy.log("Create Bug Task response", response.body)

    //     })
    // })

    // *** Test cases is not available on swagger
    // it('Get Bug Task Using Id Flow', () => {
    //     doGetBugTaskById(authKey,app_id,bugTask_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Bug Task Using Id response", response.body)

    //     })
    // })

    // *** Test cases is not available on swagger
    // it('Put Bug Task Using Id Flow', () => {
    //     doUpdateWithPutBugTask(authKey,app_id,bugTask_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Put Bug Task Using Id response", response.body)

    //     })
    // })

    // *** Test cases is not available on swagger
    // it('Patch Bug Task Using Id Flow', () => {
    //     doUpdateWithPatchBugTask(authKey,app_id,bugTask_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Patch Bug Task Using Id response", response.body)

    //     })
    // })

    // *** Test cases is not available on swagger
    // it('Delete Bug Task Flow', () => {
    //     doDeleteBugTask(authKey,app_id,bugTask_id).then((response) => {
    //         expect(response.status).to.eq(204)
    //         cy.log("Delete Bug Task response", response.body)

    //     })
    // })
 
    it('Get Component List Flow', () => {
        doGetComponentList(authKey,app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Component List response", response.body)

        })
    })

    it('Create Component Flow', () => {
        doCreateComponent(authKey,app_id).then((response) => {
            component_id=response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create Component response", response.body)

        })
    })

    it('Get Component Using Id Flow', () => {
        doGetComponentById(authKey,app_id,component_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Component Using Id response", response.body)

        })
    })

    it('Put Component Using Id Flow', () => {
        doUpdateWithPutComponent(authKey,app_id,component_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put Component Using Id response", response.body)

        })
    })
    it('Patch Component Using Id Flow', () => {
        doUpdateWithPatchComponent(authKey,app_id,component_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch Component Using Id response", response.body)

        })
    })
    it('Delete Component Flow', () => {
        doDeleteComponent(authKey,app_id,component_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Component response", response.body)

        })
    })


    it('Get Certificate List Flow', () => {
        getCertificateList(authKey).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get AppSupport Type Flow', () => {
        getAppSupportType(authKey).then((response) => {
            cy.log("login response", response.body)
            // appsupport_id = response.body.results[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Check App Generation Flow', () => {
        doCheckAppGeneration(authKey, app_id).then((response) => {
            cy.log("Check App Generationresponse", response.body)
            expect(response.status).to.eq(200)
        })
    })
    it('Get Invoice Flow', () => {
        getInvoice(authKey).then((response) => {
            cy.log("Get Invoice response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    
     it('Get User List Flow', () => {
        getUserList(authKey, app_id).then((response) => {
            cy.log("Get User Listresponse", response.body)
            expect(response.status).to.eq(200)
        })
    })
    it('Get File List Flow', () => {
        dogGetFilesList(authKey, app_id).then((response) => {
            cy.log("Get File List response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Create File Flow', () => {
        doCreateFile(authKey,app_id).then((response) => {
            file_id=response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create File response", response.body)

        })
    })

    it('Get File Using Id Flow', () => {
        doGetFileById(authKey,app_id,file_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get File Using Id response", response.body)

        })
    })

    it('Put File Using Id Flow', () => {
        doUpdateWithPutFile(authKey,app_id,file_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put File Using Id response", response.body)

        })
    })
    it('Patch File Using Id Flow', () => {
        doUpdateWithPatchFile(authKey,app_id,file_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch File Using Id response", response.body)

        })
    })
    it('Delete File Flow', () => {
        doDeleteFile(authKey,app_id,file_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete File response", response.body)

        })
    })
    
    it('Get Edge List Flow', () => {
        getEdges(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Edge List response", response.body)
        })
    })
    it('Search Invoice Flow', () => {
        searchInvoice(authKey, app_id).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get App Logs Flow', () => {
        getAppLogs(authKey, app_id).then((response) => {
            cy.log("login response", response.body)
            log_id = response.body.results[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Get App Logs Using Id Flow', () => {
        getAppLogsUsingLogID(authKey, log_id).then((response) => {
            cy.log("login response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    //In swagger Getting an 500 Internal server error
    // it('Create Attributes Flow', () => {
    //     doCreateAttributes(authKey, app_id).then((response) => {
    //         attribute_id=response.body.id;
    //         expect(response.status).to.eq(201)
    //         cy.log("Create Attributes response", response.body)
    //     })
    // })

    it('Get Attributes Flow', () => {
        getAttributes(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Attributes response", response.body)
            attributes_id=response.body[0].id;
        })
    })
    
    it('Get Attributes Using Id Flow', () => {
        doGetAttributesById(authKey,app_id,attributes_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Attributes Using Id response", response.body)

        })
    })
    
    it('Get Audit Log List Flow', () => {
        getAuditLogList(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Attributes response", response.body)
        })
    })

    it('Get Certifications', () => {
        dogetCertifications(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Certifications", response.body)
        })
    })

    it('Post Certifications', () => {
        doPostCertifications(authKey,app_id).then((response) => {
            Certifications_id=response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Post Certifications id ", response.body)

        })
    })

    it('Get Certifications for id', () => {
        dogetCertificationsid(authKey, app_id,Certifications_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Certifications id", response.body)
        })
    })

    it('Put Certifications for id', () => {
        doputCertificationsid(authKey, app_id,Certifications_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put Certifications id", response.body)
        })
    })

    it('Patch Certifications for id', () => {
        doPatchCertificationsid(authKey,app_id,Certifications_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch Certifications for id", response.body)

        })
    })

    it('Delete Certifiations for id', () => {
        doDeleteCertificationsid(authKey,app_id,Certifications_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Certifications", response.body)

        })
    })

    it('Get Statistics Flow', () => {
        getStatistics(authKey).then((response) => {
            cy.log("Get Statistics response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get Build-Stages Flow', () => {
        getBuildstages(authKey).then((response) => {
            cy.log("Get Build-Stages response", response.body)
            expect(response.status).to.eq(200)
        })
    })
    
    it('Get Candidates Flow', () => {
        getCandidates(authKey).then((response) => {
            cy.log("Get Candidates response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get Feedbacks Flow', () => {
        getFeedbacks(authKey).then((response) => {
            cy.log("Get Feedbacks response", response.body)
            feedbacks_id =response.body[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Get FeedbacksCategories Flow', () => {
        getFeedbacksCategories(authKey).then((response) => {
            cy.log("Get FeedbacksCategories response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    // ** ID is not avialble in this test case ** //
    // it('GetFeedbacks Categories  Flow By ID', () => {
    //     doGetFeedbacksCategoriesByID(authKey, feedbacks_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Feedbacks categories Id response", response.body)
    //     })
    // })

    it('Get Reports Flow', () => {
        getReports(authKey).then((response) => {
            cy.log("Get Reports response", response.body)
            reports_id = response.body.results[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('GetReports Flow By ID', () => {
        doGetReportsByID(authKey, reports_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Reports Id response", response.body)
        })
    })

    it('Get Cb Users', () => {
        dogetcbusers(authKey).then((response) => {
            cy.log("Get Cb users response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Post Cb Users', () => {
        doPostcbusers(authKey).then((response) => {
            cb_usersid=response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create Cb users", response.body)

        })
    })
    
    it('Get Cb Users by Id', () => {
        dogetcbusersbyId(authKey,cb_usersid).then((response) => {
            cy.log("Get Cb users response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('do Put Users ', () => {
        doputcbusersbyId(authKey,cb_usersid,username).then((response) => {
            cy.log("Put Cb users response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('do Patch Users ', () => {
        dopatchcbusersbyId(authKey,cb_usersid,username).then((response) => {
            cy.log("Patch Cb users response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get Developer request Flow', () => {
        doGetDevloperrequest(authKey).then((response) => {
            cy.log("Get developer request response", response.body)
            developerrequest_id =response.body[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('GetDeveloper Request Flow By ID', () => {
        doGetDevloperrequestByID(authKey, developerrequest_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Devloper Request Id response", response.body)
        })
    })

    it('Get responses Flow', () => {
        doGetResponses(authKey).then((response) => {
            cy.log("Get developer request response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get Appetizedevices Flow', () => {
        doGetAppetizedevices(authKey).then((response) => {
            cy.log("Get Appetizedevices response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Create API Spec Flow', () => {
        dogGetAPIspec(authKey,app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Create API spec response", response.body)

        })
    })

    it('Get Logs Flow', () => {
        doGetLogs(authKey,app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Create Logs response", response.body)
            logs_id = response.body.results[0].id;

        })
    })

    it('Get logs  Flow By ID', () => {
        doGetLogsById(authKey,app_id,logs_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Create Bug Task response", response.body)

        })
    })

    it('Post Dashboard feedback', () => {
        doPostDashboardfeedbacks(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Post Dashboard feedback ", response.body)

        })
    })

    it('Get member feedback Flow', () => {
        doGetMemberfeedback(authKey).then((response) => {
            cy.log("Get Appetizedevices response", response.body)
            memberfeedback_id =response.body[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Get Member feedback Flow By ID', () => {
        doGetfeedbackmemberByID(authKey, memberfeedback_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Devloper Request Id response", response.body)
        })
    })

    it('Get Addons Flow', () => {
        doGetAddons(authKey).then((response) => {
            cy.log("Get Addons response", response.body)
            addons_id = response.body[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Get Addons Flow By ID', () => {
        doGetAddonsByID(authKey, addons_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Addons Id response", response.body)
        })
    })

    it('Get Scaffolds Flow', () => {
        doGetScaffolds(authKey).then((response) => {
            cy.log("Get Scaffolds response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get TOTP Device Flow', () => {
        doTOTPdevice(authKey).then((response) => {
            cy.log("Get ToTP Device response", response.body)
            expect(response.status).to.eq(201)
        })
    })

    it('Get Socialaccounts Flow', () => {
        doGetSocialaccounts(authKey).then((response) => {
            cy.log("Get Socialaccounts response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get Settingsfe Flow', () => {
        doGetSettingsfe(authKey).then((response) => {
            cy.log("Get Settingsfe response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get Poroject Clones Flow', () => {
        doGetPeojectClones(authKey).then((response) => {
            cy.log("Get Poroject Clones response", response.body)
            projectclones_id =  response.body[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Get Peoject Clones By ID', () => {
        doGetProjectClonesByID(authKey, projectclones_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Peoject Clones By response", response.body)
        })
    })

    it('Create Mobile Builds Flow', () => {
        doGetMobilebuilds(authKey,app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Create Mobile Builds response", response.body)

        })
    })

    it('Get Resend Verification Flow', () => {
        doPostresendverification(authKey).then((response) => {
            cy.log("Get Resend Verification response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Get slides', () => {
        doGetSlides(authKey,app_id).then((response) => {
            cy.log("Get slides of project", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Post Slides', () => {
        doPostslides(authKey,app_id).then((response) => {
            cy.log("Post slides of project", response.body)
            expect(response.status).to.eq(200)
        }) 
    })   

    it('post Dashboard Feedback', () => {
        doPostDashboardFeedack(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Post Dashboard Feedback", response.body)
        }) 
    })   

    it('post Magic Link', () => {
        doPostMagicLink(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Magic link sent successfully", response.body)
        }) 
    })

    it('post Out Grow', () => {
        doPostOutGrow(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Resend Verification response", response.body)
        })
    })

    it('get Social APP', () => {
        doGetSocialApp(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Social APP", response.body)
        })
    })

    
    it('get Social APP By ID', () => {
        doGetSocialAppByID(authKey, social_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Social APP Id response", response.body)
        })
    })

    it('post Remove Totp Device', () => {
        doPostTotpDeviceRemove(authKey).then((response) => {
            expect(response.status).to.eq(201)
            cy.log("Get 2FA disabled successfully", response.body)
        })
    })

    it('get check User', () => {
        doGetUser(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get User", response.body)
        })
    })

    it('do put check User ', () => {
        doPutUser(authKey).then((response) => {
            cy.log("Put user response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('get all Users', () => {
        doGetUsers(authKey,users_id).then((response) => {
            users_id=response.body.id;
            expect(response.status).to.eq(200)
            cy.log("Get User", response.body)
        })
    })

    it('get all Users By ID', () => {
        doGetUsersByID(authKey, users_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Social APP Id response", response.body)
        })
    })


})