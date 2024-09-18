// // <reference types = "cypress"/>
// import { doCteareApp } from '../pages/DashboardPage.js';
// import { doLogin,doLogout } from '../pages/loginPage.js';
// import { doPatchShareableComponent,doGetShareableComponentsById,doCreateShareableComponent,doGetShareableComponentsList,doGetCatalogPlatformList,doGetCatalogResourceList,doGetCatalogSectorList,doGetCatalogTaskList,doGetCatalogFeatureTypeList,doGetCatalogModuleTypeList,doGAddCatalogPlatformCustomDomain,doGetCatalogPlatformCustomDomain,doDeleteCatologModule,doUpdateWithPutCatologModule,doUpdateWithPatchCatologModule,doGetCatologModuleById,doDeleteCatalogArchetype, doUpdateWithPatchCatalogArchetype, doUpdateWithPutCatalogArchetype, doGetCatalogArchetypeById, doCreateCatalogArchetype, doDeleteCatalogAsset, doUpdateWithPatchCatalogAsset, doUpdateWithPutCatalogAsset, doGetCatalogAssetUsingId, doGetCatalogAssetList, doDeleteCatalogBaseType, doUpdateWithPatchCatalogBaseArchetype, doUpdateWithPutCatalogBaseArchetype, doCreateCatalogBaseArchetype, doGetCatalogBaseArchetypeList, doDeleteCatalogCategory, doUpdateWithPatchCatalogCategory, doUpdateWithPutCatalogCategory, doGetCatalogCategoryById, doDeleteCatalogModuleType, doUpdateWithPatchCatalogModuleType, doUpdateWithPutCatalogModuleType, doGetCatalogModuleTypeById, doCreateCatalogModuleType, doDeleteCatalogFeatureType, doUpdateWithPatchCatalogFeatureType, doUpdateWithPutCatalogFeatureType, doGetCatalogFeatureTypeById, doCreateCatalogFeatureType, doDeleteCatalogCodeModule, doUpdateWithPatchCatalogCodeModule, doUpdateWithPutCatalogCodeModule, doGetCatalogCodeModuleById, doDeleteCatalogTask, doUpdateWithPatchCatalogTask, doUpdateWithPutCatalogTask, doGetCatalogTaskById, doCreateCatalogTask, doDeleteCatalogSector, doUpdateWithPatchCatalogSector, doUpdateWithPutCatalogSector, doGetCatalogSectorById, doCreateCatalogSector, doDeleteCatalogResource, doUpdateWithPatchCatalogResource, doUpdateWithPutCatalogResource, doGetCatalogResourceById, doCreateCatalogResource, doDeleteCatalogPlatform, doUpdateWithPatchCatalogPlatform, doUpdateWithPutCatalogPlatform, doGetCatalogPlatformById, doAddCatalogPlatform, doGetSettingsFElist, doAddCatalogFeature, doGetCatologFeature, doAddCatalogCategory, doGetCatologCategoryList, doAddCatalogModule, doGetCatologModuleList, doImportFeature, doImportModule, doGetCatalogArchetypeList, doAddCatalogAsset, doCreateCatalogCodeModule, doGetEmbeddingSearch } from '../pages/CatalogPage.js';

// let authKey;
// let app_id;
// let app_name;
// let base_title;
// let base_id;
// let asset_id;
// let base_description;
// let feature_title;
// let feature_slug;
// let feature_description;
// let feature_id;
// let category_title;
// let category_id;
// let module_title;
// let archetype_title;
// let module_slug;
// let module_description;
// let module_id;
// let group_id;
// let archetype_id;
// let slug;
// let platform_slug;
// let platform_title;
// let platform_id;
// let resource_description;
// let resource_title;
// let archetype_slug;
// let resource_id;
// let sector_title;
// let sector_id;
// let task_title;
// let task_description;
// let task_id;
// let archtype_id;
// let domain_name;
// let token_id;
// let shareableComponent_id;
// describe("Catalog Page", () => {
//     app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
//     it('Add Catalog Feature Flow', () => {
//         doLogin().then((response) => {
//             authKey = response.body.key;
//             doCteareApp(authKey, app_name).then((response) => {
//                 cy.log("login response", response.body)
//                 expect(response.body.name, "App name is not matching").to.eq(app_name)
//                 app_id = response.body.id;
//                 app_name = response.body.name;
//                 token_id=0;
//                 feature_title = "TestTitle" + app_id;
//                 feature_slug = "TestSlug" + app_id;
//                 feature_description = "TestDescription" + app_id;
//                 localStorage.setItem('app_id', response.body.id);
//                 doAddCatalogFeature(authKey, feature_title, feature_slug, feature_description).then((response) => {
//                     feature_id = response.body.id;
//                     expect(response.status).to.eq(201)
//                     cy.log("Add Catalog Feature response", response.body)
//                 })
//                 doLogout(authKey,token_id).then((response) => {
//                     expect(response.status).to.eq(200)
//                     cy.log("Add Catalog Feature response", response.body)
//                 })
                
                
//             })
//         })
//     })

//     it('Add Catalog Feature Flow', () => {
//         app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
//         doLogin().then((response) => {
//             cy.wait(8000);
//             authKey = response.body.key;
//             doCteareApp(authKey, app_name).then((response) => {
//                 cy.log("login response", response.body)
//                 expect(response.body.name, "App name is not matching").to.eq(app_name)
//                 app_id = response.body.id;
//                 app_name = response.body.name;
//                 feature_title = "TestTitle" + app_id;
//                 feature_slug = "TestSlug" + app_id;
//                 feature_description = "TestDescription" + app_id;
//                 localStorage.setItem('app_id', response.body.id);
//                 doAddCatalogFeature(authKey, feature_title, feature_slug, feature_description).then((response) => {
//                     feature_id = response.body.id;
//                     expect(response.status).to.eq(201)
//                     cy.log("Add Catalog Feature response", response.body)
//                 })
//             })
//         })
//     })
// });