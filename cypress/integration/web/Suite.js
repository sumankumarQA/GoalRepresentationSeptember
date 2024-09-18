// /// <reference types = "cypress"/>
// import { doLogin } from '../pages/loginPage.js';
// import { getFiles, getEdges, getComponent, getUserList, getAuditLogList, getAttributes, doCreateAttributes, getNotification, getAppSupportType, getCertificateList, getSkills, appTypeList, appTypeUsingId, doCteareApp, searchApp, doCheckAppGeneration, getInvoice, searchInvoice, getAppLogs, getAppLogsUsingLogID } from '../pages/DashboardPage.js';
// import { doGetPrdAiUserType, doGetPrdActivityLog, doGetStatementOfWork, doGetUsefullLinks, doGetPaymentReceipt, doAddInstallerInstall, doGetStartOverPrdAi, doGetaAnalyzeRisks, doAddSuggestedFeatures, doGetCurrentPrdPdf, getCodeStateList, getRolesUsingId, getRoles, getAppPerformanceList, getPendingInvite, addPrdVersionStatus, getMilestoneStatusSummy, getMilestoneIndex, getCBCarePlanUsingId, getCurrentlyApprovedPrdVersion, getAllFeatureFromBacklog, getPrdAiCategories, prd_overview_tags, prd_overview_userRoles, prd_create_group, prd_get_group, prd_delete_group, prd_create_item, prd_get_Item, prd_delete_item, doPatchGroup, doPatchItem, doGetUserReposList, doApprovePrd, doUpdatePrdVersionStatus, doImportCatalog, doGetGroupUsingId, doPatchItemUpdateOrder, doGetItemsUsingId, doAddPrdRoles, doRemovePrdRoles, doAddPrdTag, doGetPrdTag, doGetPrdTagUsingId, doDeletePrdTag, doGetPrdVersions, doAddComment, doGetComment, doGetChangeCommentStatus, doGetViewInStudioPrd, doDeleteComment, doEditComment, doAddFeatureIntoPrd, doAddModuleIntoPrd, doAddArchetypeIntoPrd, doGetCodeStatusPrd } from '../pages/PrdPage.js';
// import { doGetCodePackage, app_name_update, doAddLibrary, doGetLibrary, doRemoveLibrary, doAddGcpPlatform, doGetRepoBranch, change_code_privacy_private_to_public, change_code_privacy_public_to_private, delete_app } from '../pages/SettingsPage.js';
// import { doCreateTask, doViewTask, doGetTaskById, doAddQuoteInTask, doDeleteTask, doDeleteSubTask, doAddMilestone, doGetAllMilestone, doGetAllSubTask, doGetMilestone, doUpdateMilestone, doDeleteMilestone, doAddTaskIntoMilestone, doUpdateTaskIntoMilestone, doUpdateSubTask, doUpdateOtherSubTask, doPublicTask, doApprovePricing, doUndoApprovePricing, doApprovePayment, doUndoApprovedPayment, doAddPaymentMilestone, doGetPaymentMilestone, doGetAllPaymentMilestone, doDeletePaymentMilestone, doAddQuote, doGetQuoteMilestone, doCheckoutWithAch, doGetJobType, doUpdateJobTypeRate, doGetTaskSharableStatus, doCreateBillingSchedule, doUpdateBillingSchedule, doGetBillingSchedule, doCreateSubTask, doCreateOtherSubTask, doMoveTask, doUpdateMilestoneCostHrs, doTaskIntoWishlist, doSearchTask } from '../pages/TasksPage.js';
// import { doAddCatalogFeature, doGetCatologFeature, doAddCatalogCategory, doGetCatologCategory, doAddCatalogModule, doGetCatologModule, doImportFeature, doImportModule, doGetArchetype, doAsset, doCatalogCodeModule, doGetEmbeddingSearch } from '../pages/CatalogPage.js';
// import { doAddDataModel, doGetDataModel } from '../pages/DataModelPage.js';
// import { doCreateConnector, doGetConnector, doGetConnectorUsingId, doEditConnector, doDeleteConnector } from '../pages/ConnectorsPage.js';
// import { change_plan } from '../pages/ChangePlanPage.js';
// import { doAddJobRequest, doGetJobRequest, doGetJobRequestUsingId, doEditJobRequest, doDeleteJobRequest } from '../pages/JobPage.js';
// import { doInviteMember, doGetTeamMember, doGetTeamMemberUsingId } from '../pages/TeamMemberPageAdmin.js';
// //--------------------Login Page Test------------------------
// let authKey;
// describe("Login flow", () => {
//     it('login request Flow', () => {
//         doLogin().then((response) => {
//             authKey = response.body.key;
//             expect(response.status, "Login Status code is not matching").to.eq(200)
//             cy.log("login response", response.body.key)
//         })
//     })
// })
// //--------------------Dashboard Page Test-----------------------------
// let appname;
// let log_id;
// let attribute_id;
// let app_id;
// describe("Dashboard Page", () => {
//     const app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
//     it('Create App Flow', () => {
//         doCteareApp(authKey, app_name).then((response) => {
//             appname = response.body.name;
//             app_id = response.body.id;
//             cy.log("login response", response.body)
//             expect(response.status).to.eq(201)
//             expect(response.body.name, "App name is not matching").to.eq(app_name)
//         })
//     })

//     it('Get Notification Flow', () => {
//         getNotification(authKey, app_id).then((response) => {
//             cy.log("login response", response.body)
//             expect(response.status).to.eq(200)
//         })
//     })


//     it('Search App Flow', () => {
//         searchApp(authKey, appname).then((response) => {
//             cy.log("login response", response.body)
//             expect(response.status).to.eq(200)
//         })
//     })

//     it('Apptype List Flow', () => {
//         appTypeList(authKey, appname).then((response) => {
//             cy.log("login response", response.body)
//             expect(response.status).to.eq(200)
//         })
//     })


//     it('Get Skill List Flow', () => {
//         getSkills(authKey).then((response) => {
//             cy.log("login response", response.body)
//             expect(response.status).to.eq(200)
//         })
//     })

//     it('Get Certificate List Flow', () => {
//         getCertificateList(authKey).then((response) => {
//             cy.log("login response", response.body)
//             expect(response.status).to.eq(200)
//         })
//     })

//     it('Get AppSupport Type Flow', () => {
//         getAppSupportType(authKey).then((response) => {
//             cy.log("login response", response.body)
//             expect(response.status).to.eq(200)
//         })
//     })

//     it('Check App Generation Flow', () => {
//         doCheckAppGeneration(authKey, app_id).then((response) => {
//             cy.log("Check App Generationresponse", response.body)
//             expect(response.status).to.eq(200)
//         })
//     })
//     it('Get Invoice Flow', () => {
//         getInvoice(authKey).then((response) => {
//             cy.log("Get Invoice response", response.body)
//             expect(response.status).to.eq(200)
//         })
//     })


//     it('Get User List Flow', () => {
//         getUserList(authKey, app_id).then((response) => {
//             cy.log("Get User Listresponse", response.body)
//             expect(response.status).to.eq(200)
//         })
//     })
//     it('Get Component Flow', () => {
//         getComponent(authKey, app_id).then((response) => {
//             cy.log("Get Component Listresponse", response.body)
//             expect(response.status).to.eq(200)
//         })
//     })

//     it('Get Edges Flow', () => {
//         getFiles(authKey, app_id).then((response) => {
//             cy.log("Get Edges Listresponse", response.body)
//             expect(response.status).to.eq(200)
//         })
//     })

//     it('Get Files Flow', () => {
//         getEdges(authKey, app_id).then((response) => {
//             cy.log("Get Files Listresponse", response.body)
//             expect(response.status).to.eq(200)
//         })
//     })
//     it('Search Invoice Flow', () => {
//         searchInvoice(authKey, app_id).then((response) => {
//             cy.log("login response", response.body)
//             expect(response.status).to.eq(200)
//         })
//     })

//     it('Get App Logs Flow', () => {
//         getAppLogs(authKey, app_id).then((response) => {
//             cy.log("login response", response.body)
//             log_id = response.body.results[0].id;
//             expect(response.status).to.eq(200)
//         })
//     })

//     it('Get App Logs Using Id Flow', () => {
//         getAppLogsUsingLogID(authKey, log_id).then((response) => {
//             cy.log("login response", response.body)
//             expect(response.status).to.eq(200)
//         })
//     })
//     it('Get Attributes Flow', () => {
//         getAttributes(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Attributes response", response.body)
//         })
//     })
// })
// //---------------------------------PRD Page Test------------------------------
// let app_name;
// let group_id;
// let group_name;
// let item_id;
// let tag_id;
// let role_id;
// let comment_id;
// let item_name;
// let added_items = [];
// let task_id = ["6120"];
// describe("PRD Page", () => {
//     app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
//     it('Create Tags Flow', () => {
//         prd_overview_tags(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(201)
//             cy.log("create tags response", response.body)
//         })
//     })

//     it('Get Prd Ai Categories Flow', () => {
//         getPrdAiCategories(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Prd Ai Categories response", response.body)
//         })
//     })

//     it('Get All Feature from Backlog Flow', () => {
//         getAllFeatureFromBacklog(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get All Feature from Backlog response", response.body)
//         })
//     })

//     it('Get Currently Approved Prd Version Flow', () => {
//         getCurrentlyApprovedPrdVersion(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Currently Approved Prd Version response", response.body)
//         })
//     })

//     it('Get CBCarePlan UsingId Flow', () => {
//         getCBCarePlanUsingId(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get CBCarePlan UsingId", response.body)
//         })
//     })

//     it('Get Milestone Index Flow', () => {
//         getMilestoneIndex(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Milestone Index response", response.body)
//         })
//     })

//     it('Get Milestone Status Summy Flow', () => {
//         getMilestoneStatusSummy(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Milestone Status Summy response", response.body)
//         })
//     })



//     it('Get Pending Invite FLow', () => {
//         getPendingInvite(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Pending Invite response", response.body)
//         })
//     })

//     it('Get App Performance List FLow', () => {
//         getAppPerformanceList(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get App Performance List response", response.body)
//         })
//     })


//     it('Get Roles FLow', () => {
//         getRoles(authKey).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Roles response", response.body)
//         })
//     })

//     it('Get Roles Using Id FLow', () => {
//         getRolesUsingId(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Roles Using Id response", response.body)
//         })
//     })

//     it('Get Code State List FLow', () => {
//         getCodeStateList(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Code State List  response", response.body)
//         })
//     })
//     it('Add Prd Tags Flow', () => {
//         doAddPrdTag(authKey, app_id, 'testaddtag' + app_id).then((response) => {
//             tag_id = response.body.id;
//             expect(response.status).to.eq(201)
//             cy.log("Add Prd Tags response", response.body)
//         })
//     })

//     it('Get Prd Tags Flow', () => {
//         doGetPrdTag(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Prd Tags response", response.body)
//         })
//     })

//     it('Get Prd Tags Using Id Flow', () => {
//         doGetPrdTagUsingId(authKey, tag_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Prd Tags Using Id response", response.body)
//         })
//     })


//     it('Create UserRoles Flow', () => {
//         prd_overview_userRoles(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(201)
//             cy.log("Create UserRoles response", response.body)
//         })
//     })

//     it('Add Prd Roles Flow', () => {
//         doAddPrdRoles(authKey, app_id, 'testaddrole' + app_id).then((response) => {
//             role_id = response.body.id;
//             expect(response.status).to.eq(201)
//             cy.log("Add Prd Roles response", response.body)
//         })
//     })

//     it('Create PrdGroup Flow', () => {
//         prd_create_group(authKey, app_id, 'PRD GROUP TEST' + app_id).then((response) => {
//             group_id = response.body.id;
//             group_name = response.body.name;
//             expect(response.status).to.eq(201)
//             cy.log("Create PrdGroup response", response.body)
//         })
//     })

//     it('Get PrdGroup Flow', () => {
//         prd_get_group(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get PrdGroup response", response.body)
//         })
//     })

//     it('Get PrdGroup Using Id Flow', () => {
//         doGetGroupUsingId(authKey, group_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get PrdGroup Using Id response", response.body)
//         })
//     })
//     it('Update Prd Using Id Flow', () => {
//         //R
//         doGetGroupUsingId(authKey, group_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get PrdGroup Using Id response", response.body)
//         })
//     })

//     it('Patch PrdGroup Flow', () => {
//         doPatchGroup(authKey, app_id, group_id, group_name).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Patch PrdGroup response", response.body)
//         })
//     })

//     it('Create PrdItem Flow', () => {
//         prd_create_item(authKey, app_id, group_id, 'PRD ITEM TEST' + app_id).then((response) => {
//             item_id = response.body.id;
//             const addedItemId = cy.wrap(response).its('body.id').then((id) => id);
//             addedItemId.then((id) => added_items.push(id));
//             added_items = added_items.sort(() => Math.random() - 0.5);
//             expect(response.status).to.eq(201)
//             cy.log("Create PrdItem response", response.body)
//         })
//     })

//     it('Add Suggested Features Flow', () => {
//         doAddSuggestedFeatures(authKey, app_id, app_name).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Add Suggested Features response", response.body)
//         })
//     })

//     it('Update Suggested Feature Flow', () => {
//         //R
//         doGetGroupUsingId(authKey, group_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get PrdGroup Using Id response", response.body)
//         })
//     })


//     it('Get Payment Receipt Flow', () => {
//         doGetPaymentReceipt(authKey, app_id, app_name).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Payment Receipt response", response.body)
//         })
//     })
//     it('Get UsefullLinks Flow', () => {
//         doGetUsefullLinks(authKey, app_id, app_name).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get UsefullLinks response", response.body)
//         })
//     })

//     it('Update Prd Using Id Flow', () => {
//         //R
//         doGetGroupUsingId(authKey, group_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get PrdGroup Using Id response", response.body)
//         })
//     })

//     it('Get Statement of Work Flow', () => {
//         doGetStatementOfWork(authKey, app_id, app_name).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Statement of Work response", response.body)
//         })
//     })



//     it('Get Prd Item Flow', () => {
//         prd_get_Item(authKey, group_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Prd Item response", response.body)

//         })
//     })

//     it('Patch Prd Using Id Flow', () => {
//         //R
//         doGetGroupUsingId(authKey, group_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get PrdGroup Using Id response", response.body)
//         })
//     })


//     it('Patch Item Update Order Flow', () => {
//         doPatchItemUpdateOrder(authKey, group_id, added_items).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Patch Item Update Order response", response.body)

//         })
//     })

//     it('Put Prd Using Id Flow', () => {
//         //R
//         doGetGroupUsingId(authKey, group_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get PrdGroup Using Id response", response.body)
//         })
//     })


//     it('Patch Prd Item Flow', () => {
//         doPatchItem(authKey, app_id, item_id, item_name).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Patch Prd Item response", response.body)

//         })
//     })

//     it('Update Prd Version Staus Flow', () => {
//         doUpdatePrdVersionStatus(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Update Prd Version Staus response", response.body)

//         })
//     })

//     it('Update Prd Version Flow', () => {
//         //R
//         doGetGroupUsingId(authKey, group_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get PrdGroup Using Id response", response.body)
//         })
//     })


//     it('Get Prd Version  Flow', () => {
//         doGetPrdVersions(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Prd Version response", response.body)

//         })
//     })

//     it('Import Catalog Flow', () => {
//         doImportCatalog(authKey, app_id, group_id, task_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Import Catalog response", response.body)

//         })
//     })

//     it('Add Comment Flow', () => {
//         doAddComment(authKey, app_id, 'Testcomment' + app_id, item_id).then((response) => {
//             comment_id = response.body.id;
//             expect(response.status).to.eq(201)
//             cy.log("Add Comment response", response.body)

//         })
//     })

//     it('Update Comment Flow', () => {
//         //R
//         doGetGroupUsingId(authKey, group_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get PrdGroup Using Id response", response.body)
//         })
//     })


//     it('Get Comment Flow', () => {
//         doGetComment(authKey, comment_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get comment response", response.body)

//         })
//     })

//     it('Edit Comment Flow', () => {
//         doEditComment(authKey, comment_id, app_id, 'NewTestComment' + app_id, item_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Edit comment response", response.body)

//         })
//     })

//     it('Get Chnage Comment Status Flow', () => {
//         doGetChangeCommentStatus(authKey, comment_id, app_id, 'resolved').then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Change comment Status response", response.body)

//         })
//     })

//     it('Delete Comment Flow', () => {
//         doDeleteComment(authKey, comment_id, app_id).then((response) => {
//             expect(response.status).to.eq(204)
//             cy.log("Delete Comment Response", response.body)
//         })

//     })

//     it('Get Comment After Deletion Flow', () => {
//         //R
//         doGetGroupUsingId(authKey, group_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get PrdGroup Using Id response", response.body)
//         })
//     })


//     it('Get View Instudio Prd Flow', () => {
//         doGetViewInStudioPrd(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get View Instudio Prd response", response.body)

//         })
//     })


//     it('Add Feature Into Prd Flow', () => {
//         doAddFeatureIntoPrd(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Add Feature Into Prd response", response.body)

//         })
//     })

//     it('Add Module Into Prd Flow', () => {
//         doAddModuleIntoPrd(authKey, app_id, group_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("AAdd Module Into Prd response", response.body)

//         })
//     })

//     it('Add Archetype Into Prd Flow', () => {
//         doAddArchetypeIntoPrd(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Add Archetype Into Prd response", response.body)

//         })
//     })

//     it('Get Prd Activity Log Flow', () => {
//         doGetPrdActivityLog(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Add Archetype Into Prd response", response.body)

//         })
//     })
//     it('Get Prd AI Usertype Flow', () => {
//         doGetPrdAiUserType(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Add Archetype Into Prd response", response.body)

//         })
//     })

//     it('Get Code Status Prd Flow', () => {
//         doGetCodeStatusPrd(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Code Status Prd response", response.body)

//         })
//     })


//     it('Delete PrdItem Flow', () => {
//         prd_delete_item(authKey, app_id, group_id, item_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Delete PrdItem Response", response.body)
//         })

//     })

//     it('Delete Prd Tags Flow', () => {
//         doDeletePrdTag(authKey, tag_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Delete Prd Tags Response", response.body)
//         })

//     })

//     it('Delete PrdGroup Flow', () => {
//         prd_delete_group(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Delete PrdGroup response", response.body)
//         })
//     })

//     it('Get Current Prd Pdf Flow', () => {
//         doGetCurrentPrdPdf(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(202)
//             cy.log("Delete PrdGroup response", response.body)
//         })
//     })



// })
// //-------------------------------Setting Page Test--------------------------
// let libraryIds;
// let libraryToBeAdded;
// describe("Settings Page", () => {
//     it('Update app name Flow', () => {
//         libraryIds = ["54488", "54489", "54490", "54491", "54492"];
//         libraryToBeAdded = libraryIds[Math.floor(Math.random() * libraryIds.length)];
//         app_name_update(authKey, app_name, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("update app name response", response.body)
//         })
//     })

//     it('Add Library Flow', () => {
//         doAddLibrary(authKey, app_id, libraryToBeAdded).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Add Library response", response.body)
//         })
//     })

//     it('Get Library Flow', () => {
//         doGetLibrary(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Library response", response.body)
//         })
//     })


//     it('Remove Library Flow', () => {
//         doRemoveLibrary(authKey, app_id, libraryToBeAdded).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Remove Library response", response.body)
//         })
//     })

//     it('Get Rep branch Flow', () => {
//         doGetRepoBranch(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Rep branch response", response.body)
//         })
//     })

//     it('Search App By Name Flow', () => {
//         //R
//         doGetRepoBranch(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Rep branch response", response.body)
//         })
//     })

//     it('Update app name Flow', () => {
//         //R
//         doGetRepoBranch(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Rep branch response", response.body)
//         })
//     })

//     it('Delete app Flow', () => {
//         //R
//         doGetRepoBranch(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Rep branch response", response.body)
//         })
//     })
//     it('Search App By ID Flow', () => {
//         //R
//         doGetRepoBranch(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Rep branch response", response.body)
//         })
//     })

//     it('Update app name Flow', () => {
//         //R
//         doGetRepoBranch(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Rep branch response", response.body)
//         })
//     })

//     it('Change code privacy private to public Flow', () => {
//         change_code_privacy_private_to_public(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Change code privacy private to public response", response.body)
//         })
//     })

//     it('Change code privacy public to private Flow', () => {
//         change_code_privacy_public_to_private(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Change code privacy public to private response", response.body)
//         })
//     })
//     it('Delete app Flow', () => {
//         //R
//         doGetRepoBranch(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Rep branch response", response.body)
//         })
//     })
// })
// //-----------------------------Task Page Test----------------------------
// let milestone_name = "milestone1";
// let updated_milestone_name = 'Milestone1Updated';
// let milestone_id;
// let task_name = "Task1";
// let task_hours = "2.0";
// let task_cost = "120.00";
// let payment_id;
// let fe_subtask_id;
// let milestone_wishlist_id;
// let task_wishlist_id;
// let wishlist_task_name = "taskwishlist";
// describe("Tasks Page", () => {

//     it('Add Milestone', () => {

//         doAddMilestone(authKey, app_id, milestone_name).then((response) => {
//             milestone_id = response.body.id;
//             milestone_name = response.body.title;
//             expect(response.status).to.eq(201)
//             cy.log("create milestone response", response.body)
//         })
//     })


//     it('Get Task SharableStatus Flow', () => {

//         doGetTaskSharableStatus(authKey).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Task SharableStatus response", response.body)
//         })
//     })

//     it('Get Milestone', () => {

//         doGetMilestone(authKey, app_id, milestone_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("create milestone response", response.body)
//         })
//     })
//     it('create User roles Flow', () => {
//         //R
//         doGetMilestone(authKey, app_id, milestone_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("create milestone response", response.body)
//         })
//     })

//     it('Add Sub Task Flow', () => {
//         //R
//         doGetMilestone(authKey, app_id, milestone_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("create milestone response", response.body)
//         })
//     })

//     it('Update Sub Task Flow', () => {
//         //R
//         doGetMilestone(authKey, app_id, milestone_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("create milestone response", response.body)
//         })
//     })
//     it('Edit Users roles Flow', () => {
//         //R
//         doGetMilestone(authKey, app_id, milestone_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("create milestone response", response.body)
//         })
//     })

//     it('Delete Task Flow', () => {
//         //R
//         doGetMilestone(authKey, app_id, milestone_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("create milestone response", response.body)
//         })
//     })

//     it('Create Users Flow', () => {
//         //R
//         doGetMilestone(authKey, app_id, milestone_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("create milestone response", response.body)
//         })
//     })

//     it('invite team member Flow', () => {
//         //R
//         doGetMilestone(authKey, app_id, milestone_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("create milestone response", response.body)
//         })
//     })

//     it('Resend Invite Flow', () => {
//         //R
//         doGetMilestone(authKey, app_id, milestone_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("create milestone response", response.body)
//         })
//     })

//     it('Get Team member Flow', () => {
//         //R
//         doGetMilestone(authKey, app_id, milestone_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("create milestone response", response.body)
//         })
//     })

//     it('update team member Flow', () => {
//         //R
//         doGetMilestone(authKey, app_id, milestone_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("create milestone response", response.body)
//         })
//     })


//     it('Upload the PDF Flow', () => {
//         //R
//         doGetMilestone(authKey, app_id, milestone_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("create milestone response", response.body)
//         })
//     })

//     it('Get the app list Flow', () => {
//         //R
//         doGetMilestone(authKey, app_id, milestone_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("create milestone response", response.body)
//         })
//     })

//     it('Delete The PDF Flow', () => {
//         //R
//         doGetMilestone(authKey, app_id, milestone_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("create milestone response", response.body)
//         })
//     })

//     it('Update Milestone', () => {

//         doUpdateMilestone(authKey, app_id, milestone_id, updated_milestone_name).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("create milestone response", response.body)
//         })
//     })

//     it('Create Task', () => {

//         doCreateTask(authKey, app_id, task_name, task_hours, task_cost).then((response) => {
//             task_id = response.body.id;
//             expect(response.status).to.eq(201)
//             cy.log("create milestone response", response.body)
//         })
//     })

//     it('Add Task into Milestone', () => {

//         doAddTaskIntoMilestone(authKey, app_id, milestone_id, task_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("create milestone response", response.body)
//         })
//     })

//     it('Public Task', () => {

//         doPublicTask(authKey, app_id, task_id, task_name).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("create milestone response", response.body)
//         })
//     })



//     it('View Task', () => {

//         doViewTask(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("create milestone response", response.body)
//         })
//     })

//     it('Add Payment Milestone FLow', () => {
//         const currentDate = new Date();
//         const year = currentDate.getFullYear();
//         const month = String(currentDate.getMonth() + 1).padStart(2, '0');
//         const day = String(currentDate.getDate()).padStart(2, '0');
//         const due_date = `${year}-${month}-${day}`;
//         const title = 'Payment mile' + app_id;
//         const amount = 1000.00
//         doAddPaymentMilestone(authKey, app_id, due_date, title, amount).then((response) => {
//             payment_id = response.body.id;
//             expect(response.status).to.eq(201)
//             cy.log("Add Payment Milestone response", response.body)
//         })
//     })

//     it('Get PaymentMilestone Flow', () => {

//         doGetPaymentMilestone(authKey, app_id, payment_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get PaymentMilestone response", response.body)
//         })
//     })


//     it('Get Billing Schedule Flow', () => {

//         doGetBillingSchedule(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Billing Schedule response", response.body)
//         })
//     })

//     it('Get All Payment Milestone Flow', () => {

//         doGetAllPaymentMilestone(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get All Payment Milestone response", response.body)
//         })
//     })



//     it('Get Billing Schedule After Update Billing', () => {

//         doGetBillingSchedule(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Billing Schedule response", response.body)
//         })
//     })

//     it('Approve Payment After Billing Schedule ', () => {

//         doApprovePayment(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Approve Payment response", response.body)
//         })
//     })


//     it('Get All Milestone', () => {

//         doGetAllMilestone(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("create milestone response" + response.body)
//         })
//     })
//     it('Get Job Type Flow', () => {

//         doGetJobType(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("create milestone response" + response.body)
//         })
//     })

//     it('Update Job Type Rate Flow', () => {

//         doUpdateJobTypeRate(authKey, app_id, true).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("create milestone response" + response.body)
//         })
//     })



//     it('Get All Milestone Flow', () => {

//         doGetAllMilestone(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("create milestone response" + response.body)
//         })
//     })


// })

// //---------------------Catalog Page Test---------------------------
// let feature_title;
// let feature_slug;
// let feature_description;
// let feature_id;
// let category_title;
// let category_id;
// let module_title;
// let module_slug;
// let module_description;
// let module_id;
// let archetype_id;
// let slug;
// describe("Catalog Page", () => {
//     it('Add Catalog Feature Flow', () => {
//         feature_title = "TestTitle" + app_id;
//         feature_slug = "TestSlug" + app_id;
//         feature_description = "TestDescription" + app_id;
//         doAddCatalogFeature(authKey, feature_title, feature_slug, feature_description).then((response) => {
//             feature_id = response.body.id;
//             expect(response.status).to.eq(201)
//             cy.log("Add Catalog Feature response", response.body)
//         })
//     })
//     it('Get Catolog Feature Flow', () => {
//         doGetCatologFeature(authKey, feature_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Catolog Feature response", response.body)
//         })
//     })

//     it('Add Catalog Category Flow', () => {
//         category_title = "TestTitle" + app_id;
//         doAddCatalogCategory(authKey, category_title).then((response) => {
//             category_id = response.body.id;
//             expect(response.status).to.eq(201)
//             cy.log("Add Catalog Category response", response.body)
//         })
//     })

//     it('Import Feature Flow', () => {
//         doImportFeature(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Import Feature response", response.body)
//         })
//     })


//     it('Get Archetype Flow', () => {
//         archetype_id = 19;
//         doGetArchetype(authKey, archetype_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Archetype response", response.body)
//         })
//     })

//     it('Asset Flow', () => {
//         doAsset(authKey).then((response) => {
//             expect(response.status).to.eq(201)
//             cy.log("Asset response", response.body)
//         })
//     })

//     it('Catalog Code Module Flow', () => {
//         slug = "TestSlug" + app_id;
//         doCatalogCodeModule(authKey, slug).then((response) => {
//             expect(response.status).to.eq(201)
//             cy.log("Catalog Code Module response", response.body)
//         })
//     })

//     it('Get Embedding Search Flow', () => {
//         doGetEmbeddingSearch(authKey).then((response) => {
//             // expect(response.status).to.eq(201)
//             cy.log("Get Embedding Search response", response.body)
//         })
//     })

// })
// //-----------------------------Datamodel Page Test-------------------------

// describe("DataModel Page", () => {


//     it('Get DataModel Flow', () => {
//         doGetDataModel(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get DataModel response", response.body)
//         })
//     })
// })

// //-----------------------------JOb Page Test----------------------------------
// let job_id;
// let project_description;
// describe("Job Page", () => {

//     it('Get Job Request Flow', () => {

//         doGetJobRequest(authKey, app_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("Get Job Request response", response.body)
//         })
//     })
// })
