/// <reference types = "cypress"/>

//-------Create Prd Tags------
export const prd_overview_tags = (auth_key, app_id) => {

    cy.readFile('cypress/fixtures/api_createPRDTags.json').then((data) => {
        data.app = app_id
        cy.writeFile('cypress/fixtures/api_createPRDTags.json', JSON.stringify(data))
    })
    return cy.fixture('api_createPRDTags.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createTags') + app_id,
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};

//------Add Prd Version Status--------
export const addPrdVersionStatus = (auth_key, app_id) => {

    cy.readFile('cypress/fixtures/api_addPrdVersionStatus.json').then((data) => {
        data.app = app_id
        cy.writeFile('cypress/fixtures/api_addPrdVersionStatus.json', JSON.stringify(data))
    })
    return cy.fixture('api_addPrdVersionStatus.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createPrdVersionStatus'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};

//------Get Prd AI Categories--------
export const getPrdAiCategories = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getPrdAiCategories1') + app_id + Cypress.env('getPrdAiCategories2'),
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
//-------Get Pending Invite-----
export const getPendingInvite = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getPendingInvite1') + app_id + Cypress.env('getPendingInvite2'),
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
//-----Get App Performance list--------------
export const getAppPerformanceList = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAppPerformanceList1') + app_id + Cypress.env('getAppPerformanceList2'),
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
//-------------Get Code State List-------------
export const getCodeStateList = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCodestateList') + app_id,
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

//-------Get Roles----------------
export const getRoles = (auth_key) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getRoles'),
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
//***This is the invalid test cases this test case already having in the scricpt */
// export const getRolesUsingId = (auth_key, app_id) => {

//     return cy.request({
//         method: 'GET',
//         url: Cypress.env('baseUrl') + Cypress.env('getRoles'),
//         headers: {

//             // 'Content-Type': 'application/json',
//             // 'Accept': 'application/json',
//             'Authorization': 'Token ' + auth_key,
//         }

//     }).then((response) => {
//         return response;
//     })
// };

export const doGetRolesByID = (auth_key, roles_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getRolesByID1')+roles_id+Cypress.env('getRolesByID2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}
//----------Get All Feature From Backlog--------------
export const getAllFeatureFromBacklog = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAllFeatureFromBacklog1') + app_id + Cypress.env('getAllFeatureFromBacklog2'),
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};


//-----------Get Currently Approved Prd Version---------------
export const getCurrentlyApprovedPrdVersion = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCurrentlyApprovedPrdVersion') + app_id,
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
//----------------Get CB Care Plan Using Id-------------------
export const getCBCarePlanUsingId = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCBCarePlanUsingId') + app_id,
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

//-----------Get Milestone Index--------------------
export const getMilestoneIndex = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getMilestoneIndex1') + app_id + Cypress.env('getMilestoneIndex2'),
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
//----------------Get Milestone Status Summury----------------
export const getMilestoneStatusSummy = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getMilestoneSummy1') + app_id + Cypress.env('getMilestoneSummy2'),
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};



//------Prd Overview User ROles-------
export const prd_overview_userRoles = (auth_key, app_id) => {

    cy.readFile('cypress/fixtures/api_createPRDUserRoles.json').then((data) => {
        data.app = app_id
        cy.writeFile('cypress/fixtures/api_createPRDUserRoles.json', JSON.stringify(data))
    })
    return cy.fixture('api_createPRDUserRoles.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createUserRoles') + app_id,
            body: myFixture,
            headers: {

                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//---Done----
export const prd_create_group = (auth_key, app_id, group_name) => {

    cy.readFile('cypress/fixtures/api_createPRDGroup.json').then((data) => {
        data.app = app_id
        data.name = group_name
        cy.writeFile('cypress/fixtures/api_createPRDGroup.json', JSON.stringify(data))
    })
    return cy.fixture('api_createPRDGroup.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createprdGroup') + app_id,
            body: myFixture,
            headers: {

                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//---Done---
export const prd_get_group = (auth_key, app_id) => {


    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getprdGroup') + app_id,
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
//---Done----
export const prd_delete_group = (auth_key, app_id) => {


    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('deleteprdGroup') + app_id,
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
//----Done-----
export const prd_create_item = (auth_key, app_id, group_id, item_name) => {

    cy.readFile('cypress/fixtures/api_createPRDItem.json').then((data) => {
        data.name = item_name
        data.group = group_id
        cy.writeFile('cypress/fixtures/api_createPRDItem.json', JSON.stringify(data))
    })
    return cy.fixture('api_createPRDItem.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createprdItem') + app_id,
            body: myFixture,
            headers: {

                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//-----Done-----
export const prd_get_Item = (auth_key, group_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getprdItem') + group_id,
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
export const doPatchItem = (auth_key, app_id, item_id, item_name) => {

    cy.readFile('cypress/fixtures/api_patchGroupItem.json').then((data) => {
        data.name = item_name;
        cy.writeFile('cypress/fixtures/api_patchGroupItem.json', JSON.stringify(data))
    })
    return cy.fixture('api_patchGroupItem.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchItem1') + item_id + Cypress.env('patchItem2') + app_id,
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//------Done------
export const prd_delete_item = (auth_key, app_id, group_id, item_id) => {

    cy.readFile('cypress/fixtures/api_deleteprdItem.json').then((data) => {
        data.group_ids = [group_id];
        data.item_ids = [item_id];
        cy.writeFile('cypress/fixtures/api_deleteprdItem.json', JSON.stringify(data))
    })
    return cy.fixture('api_deleteprdItem.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('deleteprdItem') + app_id,
            body: myFixture,
            headers: {

                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//---done----
export const doPatchGroup = (auth_key, app_id, group_id, group_name) => {

    cy.readFile('cypress/fixtures/api_patchGroupItem.json').then((data) => {
        data.name = group_name;
        cy.writeFile('cypress/fixtures/api_patchGroupItem.json', JSON.stringify(data))
    })
    return cy.fixture('api_patchGroupItem.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchGroup1') + group_id + Cypress.env('patchGroup2') + app_id,
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};


//-----not implemented in python-----------
export const doApprovePrd = (auth_key, app_id) => {

    cy.readFile('cypress/fixtures/api_approvePrd.json').then((data) => {
        data.app = [app_id];
        cy.writeFile('cypress/fixtures/api_approvePrd.json', JSON.stringify(data))
    })
    return cy.fixture('api_approvePrd.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('approvePrd'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};

export const doUpdatePrdVersionStatus = (auth_key, app_id) => {

    cy.readFile('cypress/fixtures/api_approvePrd.json').then((data) => {
        data.app = app_id;
        cy.writeFile('cypress/fixtures/api_approvePrd.json', JSON.stringify(data))
    })
    return cy.fixture('api_approvePrd.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('updatePrdVersionStatus'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};

export const doImportCatalog = (auth_key, app_id, group_id, task_id) => {

    cy.readFile('cypress/fixtures/api_importCatalog.json').then((data) => {
        data.tasks_ids = task_id;
        cy.writeFile('cypress/fixtures/api_importCatalog.json', JSON.stringify(data))
    })
    return cy.fixture('api_importCatalog.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('importCatalog1') + group_id + Cypress.env('importCatalog2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};

export const doGetGroupUsingId = (auth_key, group_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getGroupUsingId') + group_id,
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doPatchItemUpdateOrder = (auth_key, group_id, item_name) => {

    cy.readFile('cypress/fixtures/api_reorderPrdItems.json').then((data) => {
        data.new_order = item_name;
        cy.writeFile('cypress/fixtures/api_reorderPrdItems.json', JSON.stringify(data))
    })
    return cy.fixture('api_reorderPrdItems.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchItemUpdateOrder1') + group_id + Cypress.env('patchItemUpdateOrder2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};

export const doGetItemsUsingId = (auth_key, item_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getItemUsingId') + item_id,
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doAddPrdRoles = (auth_key, app_id, role_name) => {

    cy.readFile('cypress/fixtures/api_addPrdRole.json').then((data) => {
        data.app = app_id;
        data.name = role_name;
        cy.writeFile('cypress/fixtures/api_addPrdRole.json', JSON.stringify(data))
    })
    return cy.fixture('api_addPrdRole.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addPrdRoles'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};

export const doRemovePrdRoles = (auth_key, item_id, role_id) => {

    cy.readFile('cypress/fixtures/api_removePrdRole.json').then((data) => {
        data.role_id = role_id;
        cy.writeFile('cypress/fixtures/api_removePrdRole.json', JSON.stringify(data))
    })
    return cy.fixture('api_removePrdRole.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('removePrdRoles1') + item_id + Cypress.env('removePrdRoles2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};

export const doAddPrdTag = (auth_key, app_id, tag_name) => {

    cy.readFile('cypress/fixtures/api_addPrdTag.json').then((data) => {
        data.app = app_id;
        data.name = tag_name;
        cy.writeFile('cypress/fixtures/api_addPrdTag.json', JSON.stringify(data))
    })
    return cy.fixture('api_addPrdTag.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addPrdTag'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};

export const doGetPrdTag = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getPrdTag') + app_id,
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doGetPrdTagUsingId = (auth_key, tag_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getPrdTagUsingId') + tag_id,
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doDeletePrdTag = (auth_key, tag_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deletePrdTag') + tag_id,
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doGetPrdVersions = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getPrdVersion') + app_id,
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doAddComment = (auth_key, app_id, comment, added_item_id) => {

    cy.readFile('cypress/fixtures/api_addPrdTtemComment.json').then((data) => {
        data.body = comment;
        data.item = added_item_id;
        cy.writeFile('cypress/fixtures/api_addPrdTtemComment.json', JSON.stringify(data))
    })
    return cy.fixture('api_addPrdTtemComment.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addComment') + app_id,
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};

export const doGetComment = (auth_key, comment_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getComment') + comment_id,
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doGetChangeCommentStatus = (auth_key, comment_id, app_id, status) => {

    cy.readFile('cypress/fixtures/api_prdChangeCommentStatus.json').then((data) => {
        data.status = status;
        cy.writeFile('cypress/fixtures/api_prdChangeCommentStatus.json', JSON.stringify(data))
    })
    return cy.fixture('api_prdChangeCommentStatus.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('getChangeCommentStatus1') + comment_id + Cypress.env('getChangeCommentStatus2') + app_id,
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};

export const doGetViewInStudioPrd = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getViewInStudioPrd1') + app_id + Cypress.env('getViewInStudioPrd2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doDeleteComment = (auth_key, comment_id, app_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteComment1') + comment_id + Cypress.env('deleteComment2') + app_id,
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
//----Done----
export const doEditComment = (auth_key, comment_id, app_id, comment, added_item_id) => {

    cy.readFile('cypress/fixtures/api_addPrdTtemComment.json').then((data) => {
        data.body = comment;
        data.item = added_item_id;
        cy.writeFile('cypress/fixtures/api_addPrdTtemComment.json', JSON.stringify(data))
    })
    return cy.fixture('api_addPrdTtemComment.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('editComment1') + comment_id + Cypress.env('editComment2') + app_id,
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};

export const doAddSuggestedFeatures = (auth_key, app_id, app_name) => {

    cy.readFile('cypress/fixtures/api_addSuggestedFeatures.json').then((data) => {
        data.app_name = app_name;
        cy.writeFile('cypress/fixtures/api_addSuggestedFeatures.json', JSON.stringify(data))
    })
    return cy.fixture('api_addSuggestedFeatures.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addSuggestedFeatures1') + app_id + Cypress.env('addSuggestedFeatures1'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//----Done-----
export const doAddFeatureIntoPrd = (auth_key, app_id) => {
    return cy.fixture('api_addPrdImportFeature.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addFeatureIntoPrd') + app_id,
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//----Done----
export const doAddModuleIntoPrd = (auth_key, app_id, prd_custom_feature_id) => {
    return cy.fixture('api_addPrdImportModule.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addModuleIntoPrd1') + prd_custom_feature_id + Cypress.env('addModuleIntoPrd2') + app_id,
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//----Done----
export const doAddArchetypeIntoPrd = (auth_key, app_id) => {
    return cy.fixture('api_addPrdImportArchetype.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addArchetypeIntoPrd') + app_id,
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
//---Done-----
export const doGetCodeStatusPrd = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCodeStatusPrd') + app_id,
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
export const doGetStartOverPrdAi = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getStratOverPrdAi1') + app_id + Cypress.env('getStratOverPrdAi2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doGetPaymentReceipt = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getPaymentReceipt1') + app_id + Cypress.env('getPaymentReceipt2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
export const doGetUsefullLinks = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getUsefullLinks1') + app_id + Cypress.env('getUsefullLinks2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doPostUsefullLinks = (auth_key, app_id) =>{
    return cy.fixture('api_addUsefullinks.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('postUsefulLinks1') + app_id + Cypress.env('postUsefulLinks2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

    }).then((response) => {
            return response;
    })
    })
};

export const doGetidUsefullLinks = (auth_key, app_id, usefullLinkId) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getidUsefulllinks1') + app_id + Cypress.env('getidUsefulllinks2') + usefullLinkId + Cypress.env('getidUsefulllinks3'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doPutUsefullLinks = (auth_key, app_id, usefullLinkId) => {

    return cy.fixture('api_putUsefullinks.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putidUsefullLinks1') + app_id + Cypress.env('putidUsefullLinks2') + usefullLinkId + Cypress.env('putidUsefullLinks3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doPatchUsefullLinks = (auth_key, app_id,useful_title,useful_url, usefullLinkId,) => {
    cy.readFile('cypress/fixtures/api_patchUsefullinks.json').then((data) => {
        data.title = useful_title;
        data.url = useful_url;
        data.id = usefullLinkId;
        cy.writeFile('cypress/fixtures/api_patchUsefullinks.json', JSON.stringify(data))
    })
    return cy.fixture('api_patchUsefullinks.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchidUsefullLinks1') + app_id + Cypress.env('patchidUsefullLinks2') + usefullLinkId + Cypress.env('patchidUsefullLinks3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doDeleteUsefullLinks = (auth_key, app_id, usefullLinkId) => {
        return cy.request({
            method: 'DELETE',
            //url: Cypress.env('baseUrl') + Cypress.env('deleteidUsefulllinks1') + app_id + Cypress.env('deleteidUdefulllinks2') + usefullLinkId + Cypress.env('deleteidUdefulllinks3'),
            url: "https://crowdbotics-slack-dev.crowdbotics.com/api/v2/apps/"+app_id+"/useful-links/"+usefullLinkId+"/",
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
};

export const doGetStatementOfWork = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        //url: Cypress.env('baseUrl') + Cypress.env('getStatementOfWork1') + app_id+Cypress.env('getStatementOfWork2'),
        url: Cypress.env('baseUrl') + '/api/v2/apps/' + app_id + '/code_packages/',

        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
// export const doAddInstallerInstall = (auth_key, app_id) => {
//     return cy.request({
//         method: 'POST',
//         url: Cypress.env('baseUrl') + Cypress.env('installerInstall1') + app_id+Cypress.env('installerInstall2'),
//         headers: {
//             'Authorization': 'Token ' + auth_key,
//         }

//     }).then((response) => {
//         return response;
//     })
// };

// export const doGetaAnalyzeRisks = (auth_key, app_id) => {
//     return cy.request({
//         method: 'GET',
//         url: Cypress.env('baseUrl') + Cypress.env('getAnalyzeRisk1') +app_id+Cypress.env('getAnalyzeRisk2'),
//         headers: {
//             'Authorization': 'Token ' + auth_key,
//         }

//     }).then((response) => {
//         return response;
//     })
// };
export const doGetCurrentPrdPdf = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCurrentPrdPdf1') + app_id + Cypress.env('getCurrentPrdPdf2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
export const doGetUserReposList = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getUserReposList'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doGetPrdActivityLog = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getPrdActivityLog1')+app_id+Cypress.env('getPrdActivityLog2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doGetPrdAiUserType = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getPrdAiUserType1') + app_id + Cypress.env('getPrdAiUserType2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
export const docreatePRDWithAI = (auth_key, app_id, app_name1) => {
    cy.readFile('cypress/fixtures/api_add_PrdwithAI.json').then((data) => {
        data.app_name = app_name1;
        cy.writeFile('cypress/fixtures/api_add_PrdwithAI.json', JSON.stringify(data))
    })
    return cy.fixture('api_add_PrdwithAI.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createprdai1') + app_id + Cypress.env('createprdai2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
export const doAddfeaturewithAI = (auth_key, app_id) => {
    return cy.fixture('api_addFeaturewithAI.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addFeaturewithAI1') + app_id + Cypress.env('addFeaturewithAI2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
export const doAddfeaturemanually = (auth_key, app_id, categories_id, feature_id) => {
    cy.readFile('cypress/fixtures/api_addFeaturemanually.json').then((data) => {
        data.body = categories_id;
        data.id = feature_id;
        cy.writeFile('cypress/fixtures/api_addFeaturemanually.json', JSON.stringify(data))
    })
    return cy.fixture('api_addFeaturemanually.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addFeaturemanually1') + app_id + Cypress.env('addFeaturemanually2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
export const doGetPRDAIfeatures = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getprdfeatures1') + app_id + Cypress.env('getprdaifeatures2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
export const doApproveAllFeatures = (auth_key, app_id) => {
    return cy.fixture('api_approveallfeatures.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('approveallfeatures1') + app_id + Cypress.env('approveallfeatures2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
export const doCreateCategories = (auth_key, app_id, categories_id) => {
    cy.readFile('cypress/fixtures/api_addcategories.json').then((data) => {
        data.body = categories_id;
        cy.writeFile('cypress/fixtures/api_addcategories.json', JSON.stringify(data))
    })
    return cy.fixture('api_addcategories.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createcategories1') + app_id + Cypress.env('createcategories2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};
export const doDeleteCategories = (auth_key, app_id, categories_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deletecategories1') + app_id + Cypress.env('deletecategories2') + categories_id + '/',
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })

};
export const doPutCategories = (auth_key, app_id, categories_id, title_name) => {

    cy.readFile('cypress/fixtures/api_putcategories.json').then((data) => {
        data.id = categories_id,
            data.title = title_name;
        cy.writeFile('cypress/fixtures/api_putcategories.json', JSON.stringify(data))
    })
    return cy.fixture('api_putcategories.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putcreatecategories1') + app_id + Cypress.env('putcreatecategories2') + categories_id + '/',
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};
export const doPutFeature = (auth_key, app_id, categories_id, title_name, feature_id) => {

    cy.readFile('cypress/fixtures/api.putfeature.json').then((data) => {
        data.id = categories_id,
            data.title = title_name;
        data.id = feature_id;
        cy.writeFile('cypress/fixtures/api.putfeature.json', JSON.stringify(data))
    })
    return cy.fixture('api.putfeature.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putFeature1') + app_id + Cypress.env('putFeature2') + feature_id + '/',
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};
export const doPatchFeature = (auth_key, app_id, categories_id, title_name, feature_id) => {

    cy.readFile('cypress/fixtures/api_patchfeature.json').then((data) => {
        data.id = categories_id,
            data.title = title_name;
        data.id = feature_id;
        cy.writeFile('cypress/fixtures/api_patchfeature.json', JSON.stringify(data))
    })
    return cy.fixture('api_patchfeature.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchFeature1') + app_id + Cypress.env('patchFeature2') + feature_id + '/',
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            return response;
        })
    })
};
export const doDeletefeature = (auth_key, app_id, feature_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteFeature1') + app_id + Cypress.env('deleteFeature2') + feature_id + '/',
        headers: {

            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};
export const doGetPRDList = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('appsPRDlist1') + app_id + Cypress.env('appsPRDlist2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    })
};
export const doGetattachmentslist = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getattachmentslist'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }
    })
};

export const doGetSUserTypes = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getUserTypes'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}

export const doCreateUserTypes = (auth_key) => {
    return cy.fixture('api_addUserTypes.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addUserTypes'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};

export const doGetSUserTypesByID = (auth_key, usertypes_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getUserTypesByID1')+Cypress.env('getUserTypesByID2')+usertypes_id+Cypress.env('getUserTypesByID3'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}

export const doPatchUserTypes = (auth_key, usertypes_id) => {
    return cy.fixture('api_patchUserTypes.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchUserTypesByID1')+Cypress.env('patchUserTypesByID2')+usertypes_id+Cypress.env('patchUserTypesByID3'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doPutUserTypes = (auth_key, usertypes_id) => {
    return cy.fixture('api_putUserTypes.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putUserTypesByID1')+Cypress.env('putUserTypesByID2')+usertypes_id+Cypress.env('putUserTypesByID3'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const dodeleteuserTypesByid = (auth_key, usertypes_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteUserTypes1')+Cypress.env('deleteUserTypes2')+usertypes_id+Cypress.env('deleteUserTypes3'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}

export const doGetOpenAI = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getOpenAI'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetDemoPhase = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getDemophase'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetDemoRoles = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getDemoroles'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetDemoticket = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getDemoticket'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};


