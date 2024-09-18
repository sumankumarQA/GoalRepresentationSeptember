/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doPrdLogin} from '../pages/loginPage.js';
import { doGetattachmentslist,doGetOrganizationPRDList, doGenerateOrganizationPRD, doGetOrganizationPRDById, doPutOrganizationPRD, doPatchOrganizationPRD, doDeleteOrganizationPRD, doDeletefeature, doPatchFeature, doPutFeature, doPutCategories, doDeleteCategories, doCreateCategories, doApproveAllFeatures, doGetPRDAIfeatures, doGetPrdAiUserType, doGetPrdActivityLog, doGetStatementOfWork, doGetUsefullLinks,doPostUsefullLinks,doGetidUsefullLinks,doPutUsefullLinks,doPatchUsefullLinks,doDeleteUsefullLinks,doGetPaymentReceipt, doAddInstallerInstall, doGetStartOverPrdAi, doGetaAnalyzeRisks, doAddSuggestedFeatures, doGetCurrentPrdPdf, getCodeStateList, getRolesUsingId, getRoles, getAppPerformanceList, getPendingInvite, addPrdVersionStatus, getMilestoneStatusSummy, getMilestoneIndex, getCBCarePlanUsingId, getCurrentlyApprovedPrdVersion, getAllFeatureFromBacklog, getPrdAiCategories, prd_overview_tags, prd_overview_userRoles, prd_create_group, prd_get_group, prd_delete_group, prd_create_item, prd_get_Item, prd_delete_item, doPatchGroup, doPatchItem, doGetUserReposList, doApprovePrd, doUpdatePrdVersionStatus, doImportCatalog, doGetGroupUsingId, doPatchItemUpdateOrder, doGetItemsUsingId, doAddPrdRoles, doRemovePrdRoles, doAddPrdTag, doGetPrdTag, doGetPrdTagUsingId, doDeletePrdTag, doGetPrdVersions, doAddComment, doGetComment, doGetChangeCommentStatus, doGetViewInStudioPrd, doDeleteComment, doEditComment, doAddFeatureIntoPrd, doAddModuleIntoPrd, doAddArchetypeIntoPrd, doGetCodeStatusPrd, docreatePRDWithAI, doAddfeaturewithAI, doAddfeaturemanually,doGetSUserTypes, doCreateUserTypes, doGetSUserTypesByID, doPatchUserTypes,doPutUserTypes, dodeleteuserTypesByid,doGetRolesByID, doGetOpenAI,doGetDemoPhase,doGetDemoRoles,doGetDemoticket } from '../pages/PrdPage.js';


let authKey;
let app_id;
let app_name;
let group_id;
let group_name;
let categories_name;
let item_id;
let feature_id;
let tag_id;
let description_name;
let role_id;
let comment_id;
let categories_id
let title_name;
let item_name;
let added_items = [];
let task_id = ["6120"];
let generatePrd_id;
let useful_title;
let useful_url;
let usefullLinkId;
let usertypes_id;
let roles_id
describe("PRD Page", () => {
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Create Tags Flow', () => {
        doPrdLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                app_name = response.body.name;
                localStorage.setItem('app_id', response.body.id);
                //prd_overview_tags(authKey, app_id).then((response) => {
                    getPrdAiCategories(authKey, app_id).then((response) => {
                    expect(response.status).to.eq(200)
                    cy.log("create tags response", response.body)
                })
            })
        })
    })

    it('Get Prd Ai Categories Flow', () => {
        getPrdAiCategories(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Prd Ai Categories response", response.body)
        })
    })

    it('Get All Feature from Backlog Flow', () => {
        getAllFeatureFromBacklog(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get All Feature from Backlog response", response.body)
        })
    })

    it('Get Currently Approved Prd Version Flow', () => {
        getCurrentlyApprovedPrdVersion(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Currently Approved Prd Version response", response.body)
        })
    })

    it('Get CBCarePlan UsingId Flow', () => {
        getCBCarePlanUsingId(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get CBCarePlan UsingId", response.body)
        })
    })

    it('Get Milestone Index Flow', () => {
        getMilestoneIndex(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Milestone Index response", response.body)
        })
    })

    it('Get Milestone Status Summy Flow', () => {
        getMilestoneStatusSummy(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Milestone Status Summy response", response.body)
        })
    })

    // it('Add Prd Version Status Flow', () => {
    //     addPrdVersionStatus(authKey, app_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Add Prd Version Status response", response.body)
    //     })
    // })

    it('Get Pending Invite FLow', () => {
        getPendingInvite(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Pending Invite response", response.body)
        })
    })

    it('Get App Performance List FLow', () => {
        getAppPerformanceList(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get App Performance List response", response.body)
        })
    })


    it('Get Roles FLow', () => {
        getRoles(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Roles response", response.body)
            roles_id =  response.body[0].id;
        })
    })

    it('GetRoles Flow By ID', () => {
        doGetRolesByID(authKey, roles_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Devloper Request Id response", response.body)
        })
    })

    it('Get Code State List FLow', () => {
        getCodeStateList(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Code State List  response", response.body)
        })
    })
    // it('Add Prd Tags Flow', () => {
    //     doAddPrdTag(authKey, app_id, 'testaddtag' + app_id).then((response) => {
    //         tag_id = response.body.id;
    //         expect(response.status).to.eq(201)
    //         cy.log("Add Prd Tags response", response.body)
    //     })
    // })

    // it('Get Prd Tags Flow', () => {
    //     doGetPrdTag(authKey, app_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Prd Tags response", response.body)
    //     })
    // })

    // it('Get Prd Tags Using Id Flow', () => {
    //     doGetPrdTagUsingId(authKey, tag_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Prd Tags Using Id response", response.body)
    //     })
    // })


    it('Create UserRoles Flow', () => {
        prd_overview_userRoles(authKey, app_id).then((response) => {
            expect(response.status).to.eq(201)
            cy.log("Create UserRoles response", response.body)
        })
    })

    it('Add Prd Roles Flow', () => {
        doAddPrdRoles(authKey, app_id, 'testaddrole' + app_id).then((response) => {
            role_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Add Prd Roles response", response.body)
        })
    })

    it('Create PrdGroup Flow', () => {
        prd_create_group(authKey, app_id, 'PRD GROUP TEST' + app_id).then((response) => {
            group_id = response.body.id;
            group_name = response.body.name;
            expect(response.status).to.eq(201)
            cy.log("Create PrdGroup response", response.body)
        })
    })

    it('Get PrdGroup Flow', () => {
        prd_get_group(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get PrdGroup response", response.body)
        })
    })

    it('Get PrdGroup Using Id Flow', () => {
        doGetGroupUsingId(authKey, group_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get PrdGroup Using Id response", response.body)
        })
    })

    it('Patch PrdGroup Flow', () => {
        doPatchGroup(authKey, app_id, group_id, group_name).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch PrdGroup response", response.body)
        })
    })

    it('Create PrdItem Flow', () => {
        prd_create_item(authKey, app_id, group_id, 'PRD ITEM TEST' + app_id).then((response) => {
            item_id = response.body.id;
            const addedItemId = cy.wrap(response).its('body.id').then((id) => id);
            addedItemId.then((id) => added_items.push(id));
            added_items = added_items.sort(() => Math.random() - 0.5);
            expect(response.status).to.eq(201)
            cy.log("Create PrdItem response", response.body)
        })
    })

    // it('Add Suggested Features Flow', () => {
    //     doAddSuggestedFeatures(authKey, app_id, app_name).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Add Suggested Features response", response.body)
    //     })
    // })

    it('Get Payment Receipt Flow', () => {
        doGetPaymentReceipt(authKey, app_id, app_name).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Payment Receipt response", response.body)
        })
    })
    it('Get UsefullLinks Flow', () => {
        doGetUsefullLinks(authKey, app_id, app_name).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get UsefullLinks response", response.body)
        })
    })
    
    it('Post UsefullLinks Flow',() =>{
        doPostUsefullLinks(authKey, app_id,).then((response) => {
            usefullLinkId=response.body.id;
            expect(response.status).to.eq(201)
            cy.log("add Usefull Links", response.body)
        })

    })

    it('Get id UsefullLinks Flow', () => {
        doGetidUsefullLinks(authKey, app_id, usefullLinkId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get UsefullLinks id in  response", response.body)
        })
    })

    it('Put id UsefullLinks Flow', () => {
        doPutUsefullLinks(authKey, app_id, usefullLinkId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put UsefullLinks id in  response", response.body)
        })
    })

    it('Patch id UsefullLinks Flow', () => {
        doPatchUsefullLinks(authKey, app_id,useful_title,useful_url,usefullLinkId).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch UsefullLinks id in  response", response.body)
        })
    })
    
    it('Delete id UsefullLinks Flow', () => {
        doDeleteUsefullLinks(authKey, app_id, usefullLinkId).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete UsefullLinks id in  response", response.body)
        })
    })

    it('Get Statement of Work Flow', () => {
        doGetStatementOfWork(authKey, app_id, app_name).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Statement of Work response", response.body)
        })
    })
    //doGetStatementOfWork
    // it('Add InstallerInstall Flow', () => {
    //     doAddInstallerInstall(authKey,app_id, app_name).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Add InstallerInstall response", response.body)
    //     })
    // })
    //doAddInstallerInstall

    // it('Get Analyze Risk Flow', () => {
    //     doGetaAnalyzeRisks(authKey,app_id).then((response) => {
    //         expect(response.status).to.eq(202)
    //         cy.log("Get Analyze Risk response", response.body)
    //     })
    // })

    // it('Get Start OverPrdAi Flow', () => {
    //     doGetStartOverPrdAi(authKey, app_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Start OverPrdAi response", response.body)
    //     })
    // })

    it('Get Prd Item Flow', () => {
        prd_get_Item(authKey, group_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Prd Item response", response.body)

        })
    })

    it('Patch Item Update Order Flow', () => {
        doPatchItemUpdateOrder(authKey, group_id, added_items).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch Item Update Order response", response.body)

        })
    })


    // it('Get Prd Item Using Id Flow', () => {
    //     doGetItemsUsingId(authKey, item_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Prd Item Using Id response", response.body)

    //     })
    // })

    it('Patch Prd Item Flow', () => {
        doPatchItem(authKey, app_id, item_id, item_name).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch Prd Item response", response.body)

        })
    })

    it('Update Prd Version Staus Flow', () => {
        doUpdatePrdVersionStatus(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Update Prd Version Staus response", response.body)

        })
    })

    it('Get Prd Version  Flow', () => {
        doGetPrdVersions(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Prd Version response", response.body)

        })
    })

    it('Import Catalog Flow', () => {
        doImportCatalog(authKey, app_id, group_id, task_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Import Catalog response", response.body)

        })
    })

    // *************Not Available on Swagger*************

    // it('Add Comment Flow', () => {
    //     doAddComment(authKey, app_id, 'Testcomment' + app_id, item_id).then((response) => {
    //         comment_id = response.body.id;
    //         expect(response.status).to.eq(201)
    //         cy.log("Add Comment response", response.body)

    //     })
    // })

    // *************Not Available on Swagger*************

    // it('Get Comment Flow', () => {
    //     doGetComment(authKey, comment_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get comment response", response.body)

    //     })
    // })

  // *************Not Available on Swagger*************

    // it('Edit Comment Flow', () => {
    //     doEditComment(authKey, comment_id, app_id, 'NewTestComment' + app_id, item_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Edit comment response", response.body)

    //     })
    // })

      // *************Not Available on Swagger*************


    // it('Get Chnage Comment Status Flow', () => {
    //     doGetChangeCommentStatus(authKey, comment_id, app_id, 'resolved').then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Change comment Status response", response.body)

    //     })
    // })

      // *************Not Available on Swagger*************


    // it('Delete Comment Flow', () => {
    //     doDeleteComment(authKey, comment_id, app_id).then((response) => {
    //         expect(response.status).to.eq(204)
    //         cy.log("Delete Comment Response", response.body)
    //     })

    // })


    it('Get View Instudio Prd Flow', () => {
        doGetViewInStudioPrd(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get View Instudio Prd response", response.body)

        })
    })


    // it('Add Feature Into Prd Flow', () => {
    //     doAddFeatureIntoPrd(authKey, app_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Add Feature Into Prd response", response.body)

    //     })
    // })

    // it('Add Module Into Prd Flow', () => {
    //     doAddModuleIntoPrd(authKey, app_id, group_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("AAdd Module Into Prd response", response.body)

    //     })
    // })

    // it('Add Archetype Into Prd Flow', () => {
    //     doAddArchetypeIntoPrd(authKey, app_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Add Archetype Into Prd response", response.body)

    //     })
    // })

    // it('Get Prd Activity Log Flow', () => {
    //     doGetPrdActivityLog(authKey, app_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Prd Activity Log Flow response", response.body)

    //     })
    // })
    it('Get Prd AI Usertype Flow', () => {
        doGetPrdAiUserType(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Add Archetype Into Prd response", response.body)

        })
    })
    
    it('Get User types Flow', () => {
        doGetSUserTypes(authKey).then((response) => {
            cy.log("Get Connectors response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Add User types Prd Flow', () => {
        doCreateUserTypes(authKey).then((response) => {
            expect(response.status).to.eq(201)
            usertypes_id = response.body.id;
            cy.log("Add Archetype Into Prd response", response.body)

        })
    })

    it('Get User types Prd Flow By ID', () => {
        doGetSUserTypesByID(authKey, usertypes_id).then((response) => {
            cy.log("Get  User types response", response.body)
            expect(response.status).to.eq(200)
        })
    })

    it('Patch user Types Id Flow', () => {
        doPatchUserTypes(authKey, usertypes_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch user Types response", response.body)
        })
    })

    it('Put User Types', () => {
        doPutUserTypes(authKey, usertypes_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put  User Types", response.body)
        })
    })

    it('Delete user Types Id Flow', () => {
        dodeleteuserTypesByid(authKey, usertypes_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete user Typesresponse", response.body)
        })
    })

    //doGetPrdAiUserType
    it('Get Code Status Prd Flow', () => {
        doGetCodeStatusPrd(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Code Status Prd response", response.body)

        })
    })
    // it('Remove Prd Roles Flow', () => {
    //     doRemovePrdRoles(authKey, item_id, role_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Remove Prd Roles Response", response.body)
    //     })

    // })

    it('Delete PrdItem Flow', () => {
        prd_delete_item(authKey, app_id, group_id, item_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Delete PrdItem Response", response.body)
        })

    })

////**************Not avaialble on swagger**************/

    // it('Delete Prd Tags Flow', () => {
    //     doDeletePrdTag(authKey, tag_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Delete Prd Tags Response", response.body)
    //     })

    // })

    it('Delete PrdGroup Flow', () => {
        prd_delete_group(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Delete PrdGroup response", response.body)
        })
    })

    it('Get Current Prd Pdf Flow', () => {
        doGetCurrentPrdPdf(authKey, app_id).then((response) => {
            expect(response.status).to.eq(202)
            cy.log("Delete PrdGroup response", response.body)
        })
    })

    it('Get User Repos List Flow', () => {
        doGetUserReposList(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get PrdGroup response", response.body)
        })
    })
    it('Add Create PRD with AI', () => {
        docreatePRDWithAI(authKey, app_id, app_name).then((response) => {
            expect(response.status).to.eq(202)
            cy.log("Add Feature with AI", response.body)

        })
    })
    // it('Add Feature with AI', () => {
    //     doAddfeaturewithAI(authKey, app_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Add Feature with AI", response.body)

    //     })
    // })
    // it('Add Feature Manually', () => {
    //     doAddfeaturemanually(authKey, app_id, categories_id, feature_id).then((response) => {
    //         categories_id = response.body.id;
    //         feature_id = response.body.id;
    //         expect(response.status).to.eq(201)
    //         cy.log("Add Feature Manually", response.body)

    //     })
    // })
    // it('Put Feature', () => {
    //     title_name = 'MyTitleNamechange' + (Math.random() + 1).toString(36).substring(7);
    //     doPutFeature(authKey, app_id, categories_id, title_name, feature_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Put feature response", response.body)
    //     })
    // })
    // it('Patch Feature', () => {
    //     title_name = 'MyTitleNamechange' + (Math.random() + 1).toString(36).substring(7);
    //     doPatchFeature(authKey, app_id, categories_id, title_name, feature_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Patch feature response", response.body)
    //     })
    // })
    // it('Delete Feature', () => {
    //     doDeletefeature(authKey, app_id, feature_id).then((response) => {
    //         expect(response.status).to.eq(204)
    //         cy.log("Delete feature", response.body)
    //     })

    // })
    it('Get PRD AI Features', () => {
        doGetPRDAIfeatures(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get PRD AI Features response", response.body)
        })
    })

//     it('Approve All features', () => {
//         doApproveAllFeatures(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Approve All features", response.body)

//         })
//     })
//     it('Create Categories', () => {
//         doCreateCategories(authKey, app_id).then((response) => {
//             categories_id = response.body.id;
//             expect(response.status).to.eq(201)
//             cy.log("Create Categories", response.body)

//         })
//     })
//     it('Put Categories', () => {
//         title_name = 'MyTitleName' + (Math.random() + 1).toString(36).substring(7);
//         doPutCategories(authKey, app_id, categories_id, title_name).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Put categories response", response.body)
//         })
//     })
//     it('Get PRD List', () => {
//         doGetPRDList(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("apps prd list", response.body)

//         })
//     })
//     it('Get PRD Partial Update Status', () => {
//         doGetprdPartialUpdate(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("PRD Partial Update Status", response.body)

//         })
//     })
//     it('Delete Categories', () => {
//         doDeleteCategories(authKey, app_id, categories_id).then((response) => {
//             expect(response.status).to.eq(204)
//             cy.log("Delete categories", response.body)
//         })

//     })

//*******************Not available on Swagger********************/

// it('Get Attachments List', () => {
//     doGetattachmentslist(authKey, app_id).then((response) => {
//         expect(response.status).to.eq(200)
//         cy.log("Get PRD Attachments List", response.body)
//     })
// })

it('Get Open AI Flow', () => {
    doGetOpenAI(authKey).then((response) => {
        cy.log("Get Open AI response", response.body)
        expect(response.status).to.eq(200)
    })
})

it('get Demo phase Flow', () => {
    doGetDemoPhase(authKey).then((response) => {
        expect(response.status).to.eq(200)
        cy.log("Get Demo phase response", response.body)
    })
})

it('get Demo Roles Flow', () => {
    doGetDemoRoles(authKey).then((response) => {
        expect(response.status).to.eq(200)
        cy.log("Get Demo Roles response", response.body)
    })
})

it('get Demo Ticket Flow', () => {
    doGetDemoticket(authKey).then((response) => {
        expect(response.status).to.eq(200)
        cy.log("Get Demo ticket response", response.body)
    })
})

})
