/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doCatalogLogin } from '../pages/loginPage.js';
import { doGetSkill,doCreateSkill,dodeleteSkillByid,doGetSkillsById,doPatchSkill,doPutSkill,doGetEdges,dopostedge,doGetEdgesByid,doputedge,dopatchedge,dodeleteEdgesByid,doPatchShareableComponent,doGetShareableComponentsById,doCreateShareableComponent,doGetShareableComponentsList,doGetCatalogPlatformList,doGetCatalogResourceList,doGetCatalogSectorList,doGetCatalogTaskList,doGetCatalogFeatureTypeList,doGetCatalogModuleTypeList,doGAddCatalogPlatformCustomDomain,doGetCatalogPlatformCustomDomain,doDeleteCatologModule,doUpdateWithPutCatologModule,doUpdateWithPatchCatologModule,doGetCatologModuleById,doDeleteCatalogArchetype, doUpdateWithPatchCatalogArchetype, doUpdateWithPutCatalogArchetype, doGetCatalogArchetypeById, doCreateCatalogArchetype, doDeleteCatalogAsset, doUpdateWithPatchCatalogAsset, doUpdateWithPutCatalogAsset, doGetCatalogAssetUsingId, doGetCatalogAssetList, doDeleteCatalogBaseType, doUpdateWithPatchCatalogBaseArchetype, doUpdateWithPutCatalogBaseArchetype, doCreateCatalogBaseArchetype, doGetCatalogBaseArchetypeList, doDeleteCatalogCategory, doUpdateWithPatchCatalogCategory, doUpdateWithPutCatalogCategory, doGetCatalogCategoryById, doDeleteCatalogModuleType, doUpdateWithPatchCatalogModuleType, doUpdateWithPutCatalogModuleType, doGetCatalogModuleTypeById, doCreateCatalogModuleType, doDeleteCatalogFeatureType, doUpdateWithPatchCatalogFeatureType, doUpdateWithPutCatalogFeatureType, doGetCatalogFeatureTypeById, doCreateCatalogFeatureType, doDeleteCatalogCodeModule, doUpdateWithPatchCatalogCodeModule, doUpdateWithPutCatalogCodeModule, doGetCatalogCodeModuleById, doDeleteCatalogTask, doUpdateWithPatchCatalogTask, doUpdateWithPutCatalogTask, doGetCatalogTaskById, doCreateCatalogTask, doDeleteCatalogSector, doUpdateWithPatchCatalogSector, doUpdateWithPutCatalogSector, doGetCatalogSectorById, doCreateCatalogSector, doDeleteCatalogResource, doUpdateWithPatchCatalogResource, doUpdateWithPutCatalogResource, doGetCatalogResourceById, doCreateCatalogResource, doDeleteCatalogPlatform, doUpdateWithPatchCatalogPlatform, doUpdateWithPutCatalogPlatform, doGetCatalogPlatformById, doAddCatalogPlatform, doGetSettingsFElist, doAddCatalogFeature, doGetCatologFeature, doAddCatalogCategory, doGetCatologCategoryList, doAddCatalogModule, doGetCatologModuleList, doImportFeature, doImportModule, doGetCatalogArchetypeList, doAddCatalogAsset, doCreateCatalogCodeModule, doGetEmbeddingSearch, doGetCodeComponents, doCreateCodeComponents, doGetCodeComponentsById,doPutCodeComponent, doPatchCodeComponent, doGettCatologFeatureById,doPatchCatologFeature,doPutCatologFeature, dodeleteCatologFeatureByid } from '../pages/CatalogPage.js';

let edge_id;
let authKey;
let app_id;
let app_name;
let base_title;
let base_id;
let asset_id;
let base_description;
let feature_title;
let feature_slug;
let feature_description;
let feature_id;
let category_title;
let category_id;
let module_title;
let archetype_title;
let module_slug;
let module_description;
let module_id;
let group_id;
let archetype_id;
let slug;
let platform_slug;
let platform_title;
let platform_id;
let resource_description;
let resource_title;
let archetype_slug;
let resource_id;
let sector_title;
let sector_id;
let task_title;
let task_description;
let task_id;
let archtype_id;
let domain_name;
let shareableComponent_id;
let CodeComponents_id = 7;
let skills_id;

describe("Catalog Page", () => {
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Add Catalog Feature Flow', () => {
        doCatalogLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                app_name = response.body.name;
                feature_title = "TestTitle" + app_id;
                feature_slug = "TestSlug" + app_id;
                feature_description = "TestDescription" + app_id;
                localStorage.setItem('app_id', response.body.id);
                doAddCatalogFeature(authKey, feature_title, feature_slug, feature_description).then((response) => {
                    feature_id = response.body.id;
                    expect(response.status).to.eq(201)
                    cy.log("Add Catalog Feature response", response.body)
                })
            })
        })
    })
    it('Get Catolog Feature Flow', () => {
        doGetCatologFeature(authKey, feature_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catolog Feature response", response.body)
        })
    })

    it('Get Catalog feature Id Flow', () => {
        doGettCatologFeatureById(authKey,feature_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catalog feature Id response", response.body)
        })
    })

    it('Patch  Catalog feature Id Flow', () => {
        doPatchCatologFeature(authKey,feature_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch  Catalog feature  response", response.body)
        })
    })

    it('Put Catalog feature Id Flow', () => {
        doPutCatologFeature(authKey, feature_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("add Edge Screen", response.body)
        })
    })

    it('Delete Catalog feature Id Flow', () => {
        dodeleteCatologFeatureByid(authKey,feature_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Catalog feature response", response.body)
        })
    })
       
    it('Get Catolog Category List Flow', () => {
        doGetCatologCategoryList(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catolog Category response", response.body)
        })
    })

    it('Add Catalog Category Flow', () => {
        category_title = "TestTitle" + app_id;
        doAddCatalogCategory(authKey, category_title).then((response) => {
            category_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Add Catalog Category response", response.body)
        })
    })

    it('Get Catalog Category Using Id Flow', () => {
        doGetCatalogCategoryById(authKey, category_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("GEt Catalog Category Using Id response", response.body)
        })
    })

    it('Update With Put Catalog Category Using Id Flow', () => {
        category_title = "TestTitle" + app_id;
        doUpdateWithPutCatalogCategory(authKey, category_id, category_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Update with put Catalog Category response", response.body)
        })
    })

    it('Update With Patch Catalog Category Using Id Flow', () => {
        category_title = "TestTitle" + app_id;
        doUpdateWithPatchCatalogCategory(authKey, category_id, category_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Update with Patch Catalog Category response", response.body)
        })
    })

    it('Delete Catalog Category  Flow', () => {
        doDeleteCatalogCategory(authKey, category_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("GEt Catalog Category Using Id response", response.body)
        })
    })

    it('Get Catolog Module List Flow', () => {
        doGetCatologModuleList(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catolog Module List", response.body)
        })
    })

     it('Add Catalog Module', () => {
        module_title='_IunN' + (Math.random() + 1).toString(36).substring(7);
        module_slug="TestModuleSlug"+(Math.random() + 1).toString(36).substring(7);
        doAddCatalogModule(authKey, module_title,module_slug).then((response) => {
            module_id=response.body.id;
            expect(response.status).to.eq(201)
            cy.log("create userroles response", response.body)
        })
    })
    it('Get Catolog Module By Id Flow', () => {
        doGetCatologModuleById(authKey,module_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catolog Module By Id", response.body)
        })
    })

    it('Update Catalog Module Using Put Method Flow', () => {
        module_title='_IunNPut' + (Math.random() + 1).toString(36).substring(7);
        module_slug="TestModuleSlugPut"+(Math.random() + 1).toString(36).substring(7);
        doUpdateWithPutCatologModule(authKey, module_id,module_slug,module_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("'Update Catalog Module Using Put Method ", response.body)
        })
    })

    it('Update Catalog Module Using Patch Method Flow', () => {
        module_title='_IunNPatch' + (Math.random() + 1).toString(36).substring(7);
        module_slug="TestModuleSlugPatch"+(Math.random() + 1).toString(36).substring(7);
        doUpdateWithPatchCatologModule(authKey, module_id,module_slug,module_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("'Update Catalog Module Using Put Method ", response.body)
        })
    })

    it('Delete Catalog Module Flow', () => {
        doDeleteCatologModule(authKey,module_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Catalog Module ", response.body)
        })
    })


    it('Import Feature Flow', () => {
        doImportFeature(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Import Feature response", response.body)
        })
    })

    //**Need to fix */
    // it('Import Module', () => {
    //     group_id="PRD Group Test"+app_id;
    //     doImportModule(authKey, app_id,group_id).then((response) => {
    //         expect(response.status).to.eq(201)
    //         cy.log("create userroles response", response.body)
    //     })
    // })

    it('Get Archetype Flow', () => {
        doGetCatalogArchetypeList(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Archetype response", response.body)
        })
    })

    it('Create Catalog Archtype Flow', () => {
        archetype_slug = '_IunN' + (Math.random() + 1).toString(36).substring(7);
        archetype_title = 'MyTitle' + (Math.random() + 1).toString(36).substring(7);
        doCreateCatalogArchetype(authKey,archetype_slug,archetype_title).then((response) => {
            archtype_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create Catalog Archtype response", response.body)
        })
    })

    it('Get Catalog Archtype Using Id Flow', () => {
        doGetCatalogArchetypeById(authKey, archtype_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catalog Archtype Using Id response", response.body)
        })
    })
   
    it('Update Catalog Archtype Using Put Method Flow', () => {
        archetype_slug = '_IunNPUT' + (Math.random() + 1).toString(36).substring(7);
        archetype_title = 'MyTitlePut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPutCatalogArchetype(authKey, archtype_id, archetype_slug,archetype_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Update Catalog Archtype Using Put Method response", response.body)
        })
    })

    it('Update Catalog Archtype Using Patch Method Flow', () => {
        archetype_slug = '_IunNPATCH' + (Math.random() + 1).toString(36).substring(7);
        archetype_title = 'MyTitlePatch' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPatchCatalogArchetype(authKey, archtype_id,archetype_slug,archetype_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Update Catalog Archtype Using Patch Method response", response.body)
        })
    })


    it('Delete Catalog Archtype Flow', () => {
        doDeleteCatalogArchetype(authKey, archtype_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Catalog Archtype response", response.body)
        })
    })


    it('Get Catalog Asset List Flow', () => {
        doGetCatalogAssetList(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catalog Asset Listresponse", response.body)
        })
    })
    it('Create Catalog Asset Flow', () => {
        doAddCatalogAsset(authKey).then((response) => {
            asset_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create Catalog Asset response", response.body)
        })
    })


    it('Get Catalog Asset Using Id Flow', () => {
        doGetCatalogAssetUsingId(authKey, asset_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catalog Asset Using Id response", response.body)
        })
    })

    it('Update Catalog Asset Using Put Method Flow', () => {
        doUpdateWithPutCatalogAsset(authKey, asset_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Update Catalog Asset Using Put Method response", response.body)
        })
    })
    it('Update Catalog Asset Using Patch Method Flow', () => {
        doUpdateWithPatchCatalogAsset(authKey, asset_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Update Catalog Asset Using Patch Method response", response.body)
        })
    })

    it('Delete Catalog Asset Flow', () => {
        doDeleteCatalogAsset(authKey, asset_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Catalog Asset response", response.body)
        })
    })
    it('Create Catalog Code Module Flow', () => {
        slug = 'Mymoduleslug' + (Math.random() + 1).toString(36).substring(7);
        doCreateCatalogCodeModule(authKey, slug).then((response) => {
            module_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Catalog Code Module response", response.body)
        })
    })

    it('Get Catalog Code Module Using Id Flow', () => {
        doGetCatalogCodeModuleById(authKey, module_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Catalog Code Module response", response.body)
        })
    })

    it('Update with Put Catalog Code Module Flow', () => {
        slug = 'MymoduleslugWithPut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPutCatalogCodeModule(authKey, module_id, slug).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Catalog Code Module response", response.body)
        })
    })

    it('Update with Patch Catalog Code Module Flow', () => {
        slug = 'MymoduleslugWithPatch' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPatchCatalogCodeModule(authKey, module_id, slug).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Catalog Code Module response", response.body)
        })
    })
    it('Delete Catalog Code Module Flow', () => {
        doDeleteCatalogCodeModule(authKey, module_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Catalog Code Module response", response.body)
        })
    })
    //**Not avialble on swagger and app */
    // it('Get Embedding Search Flow', () => {
    //     doGetEmbeddingSearch(authKey).then((response) => {
    //          expect(response.status).to.eq(200)
    //         cy.log("Get Embedding Search response", response.body)
    //     })
    // })

    it('Get Catalog Platform List Flow', () => {
        doGetCatalogPlatformList(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catalog Platform List Response", response.body)
        })
    })

    it('Add Catalog Platform Flow', () => {
        platform_slug = 'TestPlatformSlug' + (Math.random() + 1).toString(36).substring(7);
        platform_title = 'My Platform title' + (Math.random() + 1).toString(36).substring(7);
        doAddCatalogPlatform(authKey, platform_slug, platform_title).then((response) => {
            expect(response.status).to.eq(201)
            platform_id = response.body.id;
            cy.log("Get Embedding Search response", response.body)
        })
    })
  
    //**Need to connect with dev */
    // it('Get Catalog Platform Custom Domain', () => {
    //     doGetCatalogPlatformCustomDomain(authKey, platform_id,app_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Catalog Platform Custom Domain", response.body)
    //     })
    // })
   
    //**Need to connect with dev*/
    // it('Add Catalog Platform Custom Domain Flow', () => {
    //     domain_name = 'TestPlatformSlug' + (Math.random() + 1).toString(36).substring(7);
    //     doGAddCatalogPlatformCustomDomain(authKey, platform_id,app_id,domain_name).then((response) => {
    //         expect(response.status).to.eq(201)
    //         cy.log("Get Embedding Search response", response.body)
    //     })
    // })
    it('Get Catalog Platform Using Id', () => {
        doGetCatalogPlatformById(authKey, platform_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Update Catalog Platform using put method Flow', () => {
        platform_slug = 'UpdateWithPutPlatformSlug' + (Math.random() + 1).toString(36).substring(7);
        platform_title = 'UpdateWithPut My Platform title' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPutCatalogPlatform(authKey, platform_id, platform_slug, platform_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Update Catalog Platform using patch method Flow', () => {
        platform_slug = 'UpdateWithPatchPlatformSlug' + (Math.random() + 1).toString(36).substring(7);
        platform_title = 'UpdateWithPatch My Platform title' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPatchCatalogPlatform(authKey, platform_id, platform_slug, platform_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Delete Catalog Platform Flow', () => {
        doDeleteCatalogPlatform(authKey, platform_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Get Catalog Resource List Flow', () => {
        doGetCatalogResourceList(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Create Catalog Resource Flow', () => {
        resource_description = 'MyResourceDescription' + (Math.random() + 1).toString(36).substring(7);
        resource_title = 'MyResourceTitle' + (Math.random() + 1).toString(36).substring(7);
        doCreateCatalogResource(authKey, resource_title, resource_description).then((response) => {
            resource_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Get Catalog Resource Using Id', () => {
        doGetCatalogResourceById(authKey, resource_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Update catalog Resource with Put Method Flow', () => {
        resource_description = 'MyResourceDescriptionWithPut' + (Math.random() + 1).toString(36).substring(7);
        resource_title = 'MyResourceTitleWithPut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPutCatalogResource(authKey, resource_id, resource_title, resource_description).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Update catalog Resource with Patch Method Flow', () => {
        resource_description = 'MyResourceDescriptionWithPatch' + (Math.random() + 1).toString(36).substring(7);
        resource_title = 'MyResourceTitleWithPatch' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPatchCatalogResource(authKey, resource_id, resource_title, resource_description).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Delete Catalog Resource Flow', () => {
        doDeleteCatalogResource(authKey, resource_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Get Catalog Sector List Flow', () => {
        doGetCatalogSectorList(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catalog Sector response", response.body)
        })
    })

    it('Create Catalog Sector Flow', () => {
        sector_title = 'MySectorTitle' + (Math.random() + 1).toString(36).substring(7);
        doCreateCatalogSector(authKey, sector_title).then((response) => {
            sector_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Get Catalog Sector By Id Flow', () => {
        doGetCatalogSectorById(authKey, sector_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Update catalog Sector with Put Method Flow', () => {
        sector_title = 'MySectorTitleWithPut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPutCatalogSector(authKey, sector_id, sector_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Update catalog Sector with Patch Method Flow', () => {
        sector_title = 'MySectorTitleWithPatch' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPatchCatalogSector(authKey, sector_id, sector_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Delete Catalog Sector Flow', () => {
        doDeleteCatalogSector(authKey, sector_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Get Catalog Task List Flow', () => {
        doGetCatalogTaskList(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catalog Task List", response.body)
        })
    })

    it('Create Catalog Task Flow', () => {
        task_title = 'MyTaskTitle' + (Math.random() + 1).toString(36).substring(7);
        task_description = 'MyTaskDescription' + (Math.random() + 1).toString(36).substring(7);
        doCreateCatalogTask(authKey, task_title, task_description).then((response) => {
            task_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Get Catalog Task By Id Flow', () => {
        doGetCatalogTaskById(authKey, task_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Update catalog Task with Put Method Flow', () => {
        task_title = 'MyTaskTitleWithPut' + (Math.random() + 1).toString(36).substring(7);
        task_description = 'MyTaskDescriptionWithPut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPutCatalogTask(authKey, task_id, task_title, task_description).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Update catalog Task with Patch Method Flow', () => {
        task_title = 'MyTaskTitleWithPut' + (Math.random() + 1).toString(36).substring(7);
        task_description = 'MyTaskDescriptionWithPut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPatchCatalogTask(authKey, task_id, task_title, task_description).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Delete Catalog Task Flow', () => {
        doDeleteCatalogTask(authKey, task_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Get Embedding Search response", response.body)
        })
    })
 
    it('Get Catalog Feature Type List Flow', () => {
        doGetCatalogFeatureTypeList(authKey, feature_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catalog Feature Type List Flow", response.body)
        })
    })
    it('Create Catalog FeatureType Flow', () => {
        feature_title = 'MyTaskTitle' + (Math.random() + 1).toString(36).substring(7);
        doCreateCatalogFeatureType(authKey, feature_title).then((response) => {
            feature_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Get Catalog Feature Type By Id Flow', () => {
        doGetCatalogFeatureTypeById(authKey, feature_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Update catalog Feature Type with Put Method Flow', () => {
        feature_title = 'MyFeatureTitleWithPut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPutCatalogFeatureType(authKey, feature_id, feature_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Update catalog Feature Type with Patch Method Flow', () => {
        feature_title = 'MyFeatureTitleWithPut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPatchCatalogFeatureType(authKey, feature_id, feature_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })
    it('Delete Catalog Feature Type Flow', () => {
        doDeleteCatalogFeatureType(authKey, feature_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Get Embedding Search response", response.body)
        })
    })

it('Get Catalog Module Type List Flow', () => {
    doGetCatalogModuleTypeList(authKey).then((response) => {
        expect(response.status).to.eq(200)
        cy.log("Get Catalog Module Type List", response.body)
    })
})
    it('Create Catalog ModuleType Flow', () => {
        module_title = 'MyModuleTitle' + (Math.random() + 1).toString(36).substring(7);
        doCreateCatalogModuleType(authKey, module_title).then((response) => {
            module_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Get Catalog Module Type By Id Flow', () => {
        doGetCatalogModuleTypeById(authKey, module_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Update catalog Module Type with Put Method Flow', () => {
        module_title = 'MyModuleTitleWithPut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPutCatalogModuleType(authKey, module_id, module_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })


    it('Update catalog Module Type with Patch Method Flow', () => {
        module_title = 'MyModuleTitleWithPut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPatchCatalogModuleType(authKey, module_id, module_title).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Delete Catalog Module Type Flow', () => {
        doDeleteCatalogModuleType(authKey, module_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Get Catalog Base Type List Flow', () => {
        doGetCatalogBaseArchetypeList(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Catalog Base Type List response", response.body)
        })
    })
    it('Create Catalog BaseType Flow', () => {
        base_title = 'MyBaseTitle' + (Math.random() + 1).toString(36).substring(7);
        base_description = 'MyBasedescription' + (Math.random() + 1).toString(36).substring(7);
        doCreateCatalogBaseArchetype(authKey, base_title, base_description).then((response) => {
            base_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Create Catalog BaseType response", response.body)
        })
    })

    it('Update Catalog BaseType Using Put Method Flow', () => {
        base_title = 'MyBaseTitlePut' + (Math.random() + 1).toString(36).substring(7);
        base_description = 'MyBasedescriptionPut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPutCatalogBaseArchetype(authKey, base_id, base_title, base_description).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Create Catalog BaseType response", response.body)
        })
    })

    it('Update Catalog BaseType Using Patch Method Flow', () => {
        base_title = 'MyBaseTitlePut' + (Math.random() + 1).toString(36).substring(7);
        base_description = 'MyBasedescriptionPut' + (Math.random() + 1).toString(36).substring(7);
        doUpdateWithPatchCatalogBaseArchetype(authKey, base_id, base_title, base_description).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Create Catalog BaseType response", response.body)
        })
    })

    it('Delete Catalog Base Type Flow', () => {
        doDeleteCatalogBaseType(authKey, base_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Catalog Base Type response", response.body)
        })
    })

    it('Get Settings FE List', () => {
        doGetSettingsFElist(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Embedding Search response", response.body)
        })
    })

    it('Get Edge', () => {
        doGetEdges(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Edge Screen", response.body)
        })
    })

    it('Post Edge', () => {
        const myEdge_id = 'Test' + (Math.random() + 1).toString(36).substring(7);
        dopostedge(authKey, app_id, myEdge_id).then((response) => {
            edge_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("add Edge Screen", response.body)
        })
    })

    it('Get Edge using id', () => {
        doGetEdgesByid(authKey, app_id, edge_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Edge Screen", response.body)
        })
    })

    it('Put Edge', () => {
        doputedge(authKey, app_id, edge_id).then((response) => {
            edge_id = response.body.id;
            expect(response.status).to.eq(200)
            cy.log("add Edge Screen", response.body)
        })
    })

    it('Patch Edge', () => {
        dopatchedge(authKey, app_id, edge_id).then((response) => {
            edge_id = response.body.id;
            expect(response.status).to.eq(200)
            cy.log("add Edge Screen", response.body)

        })
    })

    it('Delete Edge using id', () => {
        dodeleteEdgesByid(authKey, app_id, edge_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Get Edge Screen", response.body)
        })
    })

    //**Error: Bad Gateway */
    // it('Get Shareable Components List Flow', () => {
    //     doGetShareableComponentsList(authKey).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Shareable Components List response", response.body)
    //     })
    // })
    
    it('Create Shareable Components  Flow', () => {
        doCreateShareableComponent(authKey).then((response) => {
            expect(response.status).to.eq(201)
            shareableComponent_id=response.body.id;
            cy.log("Create Shareable Components response", response.body)
        })
    })
    
    it('Get Shareable Components Using Id Flow', () => {
        doGetShareableComponentsById(authKey,shareableComponent_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Shareable Components Using Id response", response.body)
        })
    })
     
    it('Patch Shareable Components Using Id Flow', () => {
        doPatchShareableComponent(authKey,shareableComponent_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch Shareable Components  response", response.body)
        })
    })

    it('Get Code Components List Flow', () => {
        doGetCodeComponents(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Shareable Components List response", response.body)
        })
    })

    it('Add Code Components Flow', () => {
        doCreateCodeComponents(authKey).then((response) => {
            expect(response.status).to.eq(201)
            cy.log("Add comonents code", response.body)
            cy.log(CodeComponents_id)
        })
    })

    it('Get Code Components Using Id Flow', () => {
        doGetCodeComponentsById(authKey,CodeComponents_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Code Components Using Id response", response.body)
        })
    })

    it('Patch Code Components Using Id Flow', () => {
        doPatchCodeComponent(authKey,CodeComponents_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch Code Components  response", response.body)
        })
    })

    it('Put Code Components', () => {
        doPutCodeComponent(authKey, CodeComponents_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put Code Components", response.body)
        })
    })
    
    it('Get skill List Flow', () => {
        doGetSkill(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Skill List response", response.body)
        })
    })

    it('Add Skill Flow', () => {
        doCreateSkill(authKey).then((response) => {
            expect(response.status).to.eq(201)
            skills_id = response.body.id;
            cy.log("Add Skills flow", response.body)
        })
    })

    it('Get Skill Using Id Flow', () => {
        doGetSkillsById(authKey, skills_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Code Components Using Id response", response.body)
        })
    })

    it('Patch Skill Using Id Flow', () => {
        doPatchSkill(authKey, skills_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch Code Components  response", response.body)
        })
    })

    it('Put Skill', () => {
        doPutSkill(authKey, skills_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put Code Components", response.body)
        })
    })

    it('Delete Skill Id Flow', () => {
        dodeleteSkillByid(authKey, skills_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Catalog feature response", response.body)
        })
    })


})