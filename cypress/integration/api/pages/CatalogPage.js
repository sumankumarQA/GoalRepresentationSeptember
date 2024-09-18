/// <reference types = "cypress"/>

export const doAddCatalogFeature = (auth_key, feature_title, feature_slug, feature_description) => {
    cy.readFile('cypress/fixtures/api_addCatalogFeature.json').then((data) => {
        data.title = feature_title
        data.slug = feature_slug
        data.description = feature_description
        cy.writeFile('cypress/fixtures/api_addCatalogFeature.json', JSON.stringify(data));
    });
    return cy.fixture('api_addCatalogFeature.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addCatalogfeature'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doGetCatologFeature = (auth_key, feature_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCatalogFeature') + feature_id,
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doGettCatologFeatureById = (auth_key,feature_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCatalogFeatureById1')+feature_id+Cypress.env('getCatalogFeatureById2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}
export const doPatchCatologFeature = (auth_key,feature_id) => {
    return cy.fixture('api_patchaddCatalogFeature.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchCatalogFeatureById1')+feature_id+Cypress.env('patchCatalogFeatureById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}
export const doPutCatologFeature = (auth_key, feature_id) => {

    return cy.fixture('api_putCatalogfeature.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putCatalogFeatureById1')+feature_id+Cypress.env('putCatalogFeatureById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};
export const dodeleteCatologFeatureByid = (auth_key, feature_id) => {

    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteCatalogFeatureById1')+feature_id+Cypress.env("deleteCatalogFeatureById2"),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
} 
export const doGetCatologCategoryList = (auth_key) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCatalogFeature'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};
export const doAddCatalogCategory = (auth_key, category_title) => {
    cy.readFile('cypress/fixtures/api_addCatalogCategory.json').then((data) => {
        data.title = category_title;
        cy.writeFile('cypress/fixtures/api_addCatalogCategory.json', JSON.stringify(data));
    });
    return cy.fixture('api_addCatalogCategory.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addCatalogCategory'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doGetCatalogCategoryById = (auth_key, category_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCatalogCategoryById1') + category_id + Cypress.env('getCatalogCategoryById2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
};

export const doUpdateWithPutCatalogCategory = (auth_key, category_id, category_title) => {
    cy.readFile('cypress/fixtures/api_updateWithPutCatalogCategory.json').then((data) => {
        data.title = category_title;
        cy.writeFile('cypress/fixtures/api_updateWithPutCatalogCategory.json', JSON.stringify(data));
    });
    return cy.fixture('api_updateWithPutCatalogCategory.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('updateWithPutCatalogCategoryById1') + category_id + Cypress.env('updateWithPutCatalogCategoryById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doUpdateWithPatchCatalogCategory = (auth_key, category_id, category_title) => {
    cy.readFile('cypress/fixtures/api_updateWithPatchCatalogCategory.json').then((data) => {
        data.title = category_title;
        cy.writeFile('cypress/fixtures/api_updateWithPatchCatalogCategory.json', JSON.stringify(data));
    });
    return cy.fixture('api_updateWithPatchCatalogCategory.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('updateWithPatchCatalogCategoryById1') + category_id + Cypress.env('updateWithPatchCatalogCategoryById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doDeleteCatalogCategory = (auth_key, category_id) => {

    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteCatalogCategory1') + category_id + Cypress.env('deleteCatalogCategory2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
};

export const doGetCatologModuleList = (auth_key) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCatalogModules'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doAddCatalogModule = (auth_key, module_title, module_slug) => {
    cy.readFile('cypress/fixtures/api_addCatalogModule.json').then((data) => {
        data.slug = module_slug;
        data.title = module_title;
        cy.writeFile('cypress/fixtures/api_addCatalogModule.json', JSON.stringify(data));
    });
    return cy.fixture('api_addCatalogModule.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addCatalogModules'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doGetCatologModuleById = (auth_key,module_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCatalogModulesById1')+module_id+Cypress.env('getCatalogModulesById2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doUpdateWithPutCatologModule = (auth_key,module_id,module_slug,module_title) => {
    cy.readFile('cypress/fixtures/api_updateWithPutCatalogModule.json').then((data) => {
        data.slug = module_slug;
        data.title = module_title;
        cy.writeFile('cypress/fixtures/api_updateWithPutCatalogModule.json', JSON.stringify(data));
    });
    return cy.fixture('api_updateWithPutCatalogModule.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('updateWithPutCatalogModulesById1')+module_id+Cypress.env('updateWithPutCatalogModulesById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doUpdateWithPatchCatologModule = (auth_key,module_id,module_slug,module_title) => {
    cy.readFile('cypress/fixtures/api_updateWithPatchCatalogModule.json').then((data) => {
        data.slug = module_slug;
        data.title = module_title;
        cy.writeFile('cypress/fixtures/api_updateWithPatchCatalogModule.json', JSON.stringify(data));
    });
    return cy.fixture('api_updateWithPatchCatalogModule.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('updateWithPatchCatalogModulesById1')+module_id+Cypress.env('updateWithPatchCatalogModulesById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doDeleteCatologModule = (auth_key,module_id) => {

    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteCatalogModules1')+module_id+Cypress.env('deleteCatalogModules2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};



export const doImportFeature = (auth_key, app_id) => {

    return cy.fixture('api_ImportFeature.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('importFeature') + app_id,
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doImportModule = (auth_key, app_id, group_id) => {

    return cy.fixture('api_importModule.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('importModule1') + group_id + Cypress.env('importModule2') + app_id,
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doGetCatalogArchetypeList = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getArchetypeList'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doCreateCatalogArchetype = (auth_key,archetype_slug,archetype_title) => {
    cy.readFile('cypress/fixtures/api_addCatalogArchetype.json').then((data) => {
        data.slug = archetype_slug;
        data.title = archetype_title;
        cy.writeFile('cypress/fixtures/api_addCatalogArchetype.json', JSON.stringify(data));
    });
    return cy.fixture('api_addCatalogArchetype.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createArchetype'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};
export const doGetCatalogArchetypeById = (auth_key, archtype_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCatalogArchetypeById1') + archtype_id + Cypress.env('getCatalogArchetypeById2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doUpdateWithPutCatalogArchetype = (auth_key, archtype_id,archetype_slug,archetype_title) => {
    cy.readFile('cypress/fixtures/api_updateWithPutCatalogArchetype.json').then((data) => {
        data.slug = archetype_slug;
        data.title = archetype_title;
        cy.writeFile('cypress/fixtures/api_updateWithPutCatalogArchetype.json', JSON.stringify(data));
    });
    return cy.fixture('api_updateWithPutCatalogArchetype.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('updateWithPutCatalogArchetypeById1') + archtype_id + Cypress.env('updateWithPutCatalogArchetypeById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doUpdateWithPatchCatalogArchetype = (auth_key, archtype_id,archetype_slug,archetype_title) => {
    cy.readFile('cypress/fixtures/api_updateWithPatchCatalogArchetype.json').then((data) => {
        data.slug = archetype_slug;
        data.title = archetype_title;
        cy.writeFile('cypress/fixtures/api_updateWithPatchCatalogArchetype.json', JSON.stringify(data));
    });
    return cy.fixture('api_updateWithPatchCatalogArchetype.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('updateWithPatchCatalogArchetypeById1') + archtype_id + Cypress.env('updateWithPatchCatalogArchetypeById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};
export const doDeleteCatalogArchetype = (auth_key, archtype_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteCatalogArchetype1') + archtype_id + Cypress.env('deleteCatalogArchetype2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doGetCatalogAssetList = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCatalogAssertList'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
};

export const doAddCatalogAsset = (auth_key) => {

    return cy.fixture('api_catalogAsset.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createCatalogAssert'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};
export const doGetCatalogAssetUsingId = (auth_key, asset_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCatalogAssertById1') + asset_id + Cypress.env('getCatalogAssertById2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
};

export const doUpdateWithPutCatalogAsset = (auth_key, asset_id) => {

    return cy.fixture('api_updateWithPutCatalogAsset.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('updateWithPutCatalogAssertById1') + asset_id + Cypress.env('updateWithPutCatalogAssertById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};
export const doUpdateWithPatchCatalogAsset = (auth_key, asset_id) => {

    return cy.fixture('api_updateWithPatchCatalogAsset.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('updateWithPatchCatalogAssertById1') + asset_id + Cypress.env('updateWithPatchCatalogAssertById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doDeleteCatalogAsset = (auth_key, asset_id) => {

    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteCatalogAssertById1') + asset_id + Cypress.env('deleteCatalogAssertById2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
};

export const doCreateCatalogCodeModule = (auth_key, module_slug) => {
    cy.readFile('cypress/fixtures/api_catalogCodeModule.json').then((data) => {
        data.slug = module_slug;
        cy.writeFile('cypress/fixtures/api_catalogCodeModule.json', JSON.stringify(data));
    });
    return cy.fixture('api_catalogCodeModule.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('catalogCodeModule'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doGetCatalogCodeModuleById = (auth_key, module_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCatalogCodeModuleById1') + module_id + Cypress.env('getCatalogCodeModuleById2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
};

export const doUpdateWithPutCatalogCodeModule = (auth_key, module_id, module_slug) => {
    cy.readFile('cypress/fixtures/api_updateWithPutcatalogCodeModule.json').then((data) => {
        data.slug = module_slug;
        cy.writeFile('cypress/fixtures/api_updateWithPutcatalogCodeModule.json', JSON.stringify(data));
    });
    return cy.fixture('api_updateWithPutcatalogCodeModule.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('UpdateWithPutCatalogCodeModuleById1') + module_id + Cypress.env('UpdateWithPutCatalogCodeModuleById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doUpdateWithPatchCatalogCodeModule = (auth_key, module_id, module_slug) => {
    cy.readFile('cypress/fixtures/api_updateWithPatchcatalogCodeModule.json').then((data) => {
        data.slug = module_slug;
        cy.writeFile('cypress/fixtures/api_updateWithPatchcatalogCodeModule.json', JSON.stringify(data));
    });
    return cy.fixture('api_updateWithPatchcatalogCodeModule.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('UpdateWithPatchCatalogCodeModuleById1') + module_id + Cypress.env('UpdateWithPatchCatalogCodeModuleById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};



export const doDeleteCatalogCodeModule = (auth_key, module_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteCatalogCodeModule1') + module_id + Cypress.env('deleteCatalogCodeModule2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
};

//**It's not available on swagger */
// export const doGetEmbeddingSearch = (auth_key) => {

//     return cy.fixture('api_catalogEmbeddingSearch.json').then((myFixture) => {
//         cy.request({
//             method: 'POST',
//             url: Cypress.env('baseUrl') + Cypress.env('catalogEmbeddingSearch'),
//             headers: {
//                 'Authorization': 'Token ' + auth_key
//             },
//             body: myFixture
//         }).then((response) => {
//             return response;
//         })
//     })
// };

export const doGetCatalogPlatformList = (auth_key) => {
    return cy.request({
        method: 'GET',
        //getCatalogPlatformList
         url: Cypress.env('baseUrl') + Cypress.env('addCatalogPlatform'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
}
export const doAddCatalogPlatform = (auth_key, platform_slug, platform_title) => {
    cy.readFile('cypress/fixtures/api_addCatalogPlatform.json').then((data) => {
        data.slug = platform_slug;
        data.title = platform_title;
        cy.writeFile('cypress/fixtures/api_addCatalogPlatform.json', JSON.stringify(data));
    });
    return cy.fixture('api_addCatalogPlatform.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addCatalogPlatform'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doGetCatalogPlatformCustomDomain = (auth_key, platform_id,app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCatalogPlatformCustomDomain1')+app_id+Cypress.env('getCatalogPlatformCustomDomain2')+platform_id+Cypress.env('getCatalogPlatformCustomDomain3'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
}

export const doGAddCatalogPlatformCustomDomain = (auth_key, platform_id,app_id, domain_name) => {
    cy.readFile('cypress/fixtures/api_addCatalogPlatformCustomDomain.json').then((data) => {
        data.custom_domain = domain_name;
        cy.writeFile('cypress/fixtures/api_addCatalogPlatformCustomDomain.json', JSON.stringify(data));
    });
   
    return cy.fixture('api_addCatalogPlatformCustomDomain.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('postCatalogPlatformCustomDomain1')+app_id+Cypress.env('postCatalogPlatformCustomDomain2')+platform_id+Cypress.env('postCatalogPlatformCustomDomain3'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doGetCatalogPlatformById = (auth_key, platform_id) => {
    return cy.request({
        method: 'GET',
        //  url: Cypress.env('baseUrl') + Cypress.env('getCatalogPlatformById1')+platform_id+Cypress.env('getCatalogPlatformById2'),
        url: Cypress.env('baseUrl') + '/api/v1/catalog/platform/' + platform_id + '/',

        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
}

export const doUpdateWithPutCatalogPlatform = (auth_key, platform_id, platform_slug, platform_title) => {
    cy.readFile('cypress/fixtures/api_UpdateCatalogPlatform.json').then((data) => {
        data.slug = platform_slug;
        data.title = platform_title;
        cy.writeFile('cypress/fixtures/api_UpdateCatalogPlatform.json', JSON.stringify(data));
    });
    return cy.fixture('api_UpdateCatalogPlatform.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putCatalogPlatformById1') + platform_id + Cypress.env('putCatalogPlatformById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doUpdateWithPatchCatalogPlatform = (auth_key, platform_id, platform_slug, platform_title) => {
    cy.readFile('cypress/fixtures/api_UpdatePatchCatalogPlatform.json').then((data) => {
        data.slug = platform_slug;
        data.title = platform_title;
        cy.writeFile('cypress/fixtures/api_UpdatePatchCatalogPlatform.json', JSON.stringify(data));
    });
    return cy.fixture('api_UpdatePatchCatalogPlatform.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchCatalogPlatformById1') + platform_id + Cypress.env('patchCatalogPlatformById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doDeleteCatalogPlatform = (auth_key, platform_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteCatalogPlatformById1') + platform_id + Cypress.env('deleteCatalogPlatformById2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
}
export const doGetCatalogResourceList = (auth_key) => {
    return cy.request({
        method: 'GET',
        //getCatalogResourceList
        url: Cypress.env('baseUrl') + Cypress.env('createCatalogResource'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
}

export const doCreateCatalogResource = (auth_key, resource_title, resource_description) => {
    cy.readFile('cypress/fixtures/api_addCatalogResource.json').then((data) => {
        data.title = resource_title;
        data.description = resource_description;
        cy.writeFile('cypress/fixtures/api_addCatalogResource.json', JSON.stringify(data));
    });
    return cy.fixture('api_addCatalogResource.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createCatalogResource'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doGetCatalogResourceById = (auth_key, resource_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCatalogResourceUsingId1') + resource_id + Cypress.env('getCatalogResourceUsingId2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
}

export const doUpdateWithPutCatalogResource = (auth_key, resource_id, resource_title, resource_description) => {
    cy.readFile('cypress/fixtures/api_updateUsingPutCatalogResource.json').then((data) => {
        data.title = resource_title;
        data.description = resource_description;
        cy.writeFile('cypress/fixtures/api_updateUsingPutCatalogResource.json', JSON.stringify(data));
    });
    return cy.fixture('api_updateUsingPutCatalogResource.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('updateWithPutCatalogResourceUsingId1') + resource_id + Cypress.env('updateWithPutCatalogResourceUsingId2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}
export const doUpdateWithPatchCatalogResource = (auth_key, resource_id, resource_title, resource_description) => {
    cy.readFile('cypress/fixtures/api_updateUsingPatchCatalogResource.json').then((data) => {
        data.title = resource_title;
        data.description = resource_description;
        cy.writeFile('cypress/fixtures/api_updateUsingPatchCatalogResource.json', JSON.stringify(data));
    });
    return cy.fixture('api_updateUsingPatchCatalogResource.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('updateWithPatchCatalogResourceUsingId1') + resource_id + Cypress.env('updateWithPatchCatalogResourceUsingId2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}
export const doDeleteCatalogResource = (auth_key, resource_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteCatalogResource1') + resource_id + Cypress.env('deleteCatalogResource2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
}
export const doGetCatalogSectorList = (auth_key) => {
    return cy.request({
        method: 'GET',
        //getCatalogSectorList
        url: Cypress.env('baseUrl') + Cypress.env('createCatalogSector'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
}

export const doCreateCatalogSector = (auth_key, sector_title) => {
    cy.readFile('cypress/fixtures/api_addCatalogSector.json').then((data) => {
        data.title = sector_title;
        cy.writeFile('cypress/fixtures/api_addCatalogSector.json', JSON.stringify(data));
    });
    return cy.fixture('api_addCatalogSector.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createCatalogSector'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doGetCatalogSectorById = (auth_key, sector_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCatalogSectorById1') + sector_id + Cypress.env('getCatalogSectorById2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
}

export const doUpdateWithPutCatalogSector = (auth_key, sector_id, sector_title) => {
    cy.readFile('cypress/fixtures/api_updateWithPutCatalogSector.json').then((data) => {
        data.title = sector_title;
        cy.writeFile('cypress/fixtures/api_updateWithPutCatalogSector.json', JSON.stringify(data));
    });
    return cy.fixture('api_updateWithPutCatalogSector.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('updateWithPutCatalogSectorById1') + sector_id + Cypress.env('updateWithPutCatalogSectorById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}
export const doUpdateWithPatchCatalogSector = (auth_key, sector_id, sector_title) => {
    cy.readFile('cypress/fixtures/api_updateWithPatchCatalogSector.json').then((data) => {
        data.title = sector_title;
        cy.writeFile('cypress/fixtures/api_updateWithPatchCatalogSector.json', JSON.stringify(data));
    });
    return cy.fixture('api_updateWithPatchCatalogSector.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('updateWithPatchCatalogSectorById1') + sector_id + Cypress.env('updateWithPatchCatalogSectorById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}
export const doDeleteCatalogSector = (auth_key, sector_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteCatalogSector1') + sector_id + Cypress.env('deleteCatalogSector2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
}
export const doGetCatalogTaskList = (auth_key) => {
    return cy.request({
        method: 'GET',
        //getCatalogTaskList
        url: Cypress.env('baseUrl') + Cypress.env('createCatalogTask'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
}
export const doCreateCatalogTask = (auth_key, task_title, task_description) => {
    cy.readFile('cypress/fixtures/api_addCatalogTask.json').then((data) => {
        data.title = task_title;
        data.description = task_description;
        cy.writeFile('cypress/fixtures/api_addCatalogTask.json', JSON.stringify(data));
    });
    return cy.fixture('api_addCatalogTask.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createCatalogTask'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doGetCatalogTaskById = (auth_key, task_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCatalogTaskById1') + task_id + Cypress.env('getCatalogTaskById2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
}

export const doUpdateWithPutCatalogTask = (auth_key, task_id, task_title, task_description) => {
    cy.readFile('cypress/fixtures/api_updateWithPutCatalogTask.json').then((data) => {
        data.title = task_title;
        data.description = task_description;
        cy.writeFile('cypress/fixtures/api_updateWithPutCatalogTask.json', JSON.stringify(data));
    });
    return cy.fixture('api_updateWithPutCatalogTask.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('updateWithPutCatalogTaskById1') + task_id + Cypress.env('updateWithPutCatalogTaskById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}
export const doUpdateWithPatchCatalogTask = (auth_key, task_id, task_title, task_description) => {
    cy.readFile('cypress/fixtures/api_updateWithPatchCatalogTask.json').then((data) => {
        data.title = task_title;
        data.description = task_description;
        cy.writeFile('cypress/fixtures/api_updateWithPatchCatalogTask.json', JSON.stringify(data));
    });
    return cy.fixture('api_updateWithPatchCatalogTask.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('updateWithPatchCatalogTaskById1') + task_id + Cypress.env('updateWithPatchCatalogTaskById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}
export const doDeleteCatalogTask = (auth_key, task_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteCatalogTask1') + task_id + Cypress.env('deleteCatalogTask2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
}

export const doGetCatalogFeatureTypeList = (auth_key) => {
    return cy.request({
        method: 'GET',
        //getCatalogFeatureType
        url: Cypress.env('baseUrl') + Cypress.env('createCatalogFeatureType'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
}

export const doCreateCatalogFeatureType = (auth_key, feature_title) => {
    cy.readFile('cypress/fixtures/api_addCatalogFeatureType.json').then((data) => {
        data.title = feature_title;
        cy.writeFile('cypress/fixtures/api_addCatalogFeatureType.json', JSON.stringify(data));
    });
    return cy.fixture('api_addCatalogFeatureType.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createCatalogFeatureType'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doGetCatalogFeatureTypeById = (auth_key, feature_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCatalogFeatureTypeById1') + feature_id + Cypress.env('getCatalogFeatureTypeById2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
}

export const doUpdateWithPutCatalogFeatureType = (auth_key, feature_id, feature_title) => {
    cy.readFile('cypress/fixtures/api_updateWithPutCatalogFeatureType.json').then((data) => {
        data.title = feature_title;
        cy.writeFile('cypress/fixtures/api_updateWithPutCatalogFeatureType.json', JSON.stringify(data));
    });
    return cy.fixture('api_updateWithPutCatalogFeatureType.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('updateWithPutCatalogFeatureTypeById1') + feature_id + Cypress.env('updateWithPutCatalogFeatureTypeById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}
export const doUpdateWithPatchCatalogFeatureType = (auth_key, feature_id, feature_title) => {
    cy.readFile('cypress/fixtures/api_updateWithPatchCatalogFeatureType.json').then((data) => {
        data.title = feature_title;
        cy.writeFile('cypress/fixtures/api_updateWithPatchCatalogFeatureType.json', JSON.stringify(data));
    });
    return cy.fixture('api_updateWithPatchCatalogFeatureType.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('updateWithPatchCatalogFeatureTypeById1') + feature_id + Cypress.env('updateWithPatchCatalogFeatureTypeById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}
export const doDeleteCatalogFeatureType = (auth_key, feature_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteCatalogFeatureTypeById1') + feature_id + Cypress.env('deleteCatalogFeatureTypeById2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
}

export const doGetCatalogModuleTypeList = (auth_key) => {
    return cy.request({
        method: 'GET',
        //getCatalogModuleTypeList
        url: Cypress.env('baseUrl') + Cypress.env('createCatalogModuleType'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
}

export const doCreateCatalogModuleType = (auth_key, module_title) => {
    cy.readFile('cypress/fixtures/api_addCatalogModuleType.json').then((data) => {
        data.title = module_title;
        cy.writeFile('cypress/fixtures/api_addCatalogModuleType.json', JSON.stringify(data));
    });
    return cy.fixture('api_addCatalogModuleType.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createCatalogModuleType'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doGetCatalogModuleTypeById = (auth_key, module_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCatalogModuleTypeById1') + module_id + Cypress.env('getCatalogModuleTypeById2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
}

export const doUpdateWithPutCatalogModuleType = (auth_key, module_id, module_title) => {
    cy.readFile('cypress/fixtures/api_updateWithPutCatalogModuleType.json').then((data) => {
        data.title = module_title;
        cy.writeFile('cypress/fixtures/api_updateWithPutCatalogModuleType.json', JSON.stringify(data));
    });
    return cy.fixture('api_updateWithPutCatalogModuleType.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('updateWithPutCatalogModuleTypeById1') + module_id + Cypress.env('updateWithPutCatalogModuleTypeById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}
export const doUpdateWithPatchCatalogModuleType = (auth_key, module_id, module_title) => {
    cy.readFile('cypress/fixtures/api_updateWithPatchCatalogModuleType.json').then((data) => {
        data.title = module_title;
        cy.writeFile('cypress/fixtures/api_updateWithPatchCatalogModuleType.json', JSON.stringify(data));
    });
    return cy.fixture('api_updateWithPatchCatalogModuleType.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('updateWithPatchCatalogModuleTypeById1') + module_id + Cypress.env('updateWithPatchCatalogModuleTypeById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}
export const doDeleteCatalogModuleType = (auth_key, module_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteCatalogModuleType1') + module_id + Cypress.env('deleteCatalogModuleType2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
}
export const doGetCatalogBaseArchetypeList = (auth_key) => {
    return cy.request({
        method: 'GET',
        //getCatalogBaseArchetypeList
        url: Cypress.env('baseUrl') + Cypress.env('createCatalogBaseArchetype'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
}

export const doCreateCatalogBaseArchetype = (auth_key, base_title, base_description) => {
    cy.readFile('cypress/fixtures/api_addCatalogBaseType.json').then((data) => {
        data.title = base_title;
        data.description = base_description;
        cy.writeFile('cypress/fixtures/api_addCatalogBaseType.json', JSON.stringify(data));
    });
    return cy.fixture('api_addCatalogBaseType.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createCatalogBaseArchetype'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doUpdateWithPutCatalogBaseArchetype = (auth_key, base_id, base_title, base_description) => {
    cy.readFile('cypress/fixtures/api_updateWithPutCatalogBaseType.json').then((data) => {
        data.title = base_title;
        data.description = base_description;
        cy.writeFile('cypress/fixtures/api_updateWithPutCatalogBaseType.json', JSON.stringify(data));
    });
    return cy.fixture('api_updateWithPutCatalogBaseType.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('updateWithPutCatalogBaseArchetype1') + base_id + Cypress.env('updateWithPutCatalogBaseArchetype2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doUpdateWithPatchCatalogBaseArchetype = (auth_key, base_id, base_title, base_description) => {
    cy.readFile('cypress/fixtures/api_updateWithPatchCatalogBaseType.json').then((data) => {
        data.title = base_title;
        data.description = base_description;
        cy.writeFile('cypress/fixtures/api_updateWithPatchCatalogBaseType.json', JSON.stringify(data));
    });
    return cy.fixture('api_updateWithPatchCatalogBaseType.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('updateWithPatchCatalogBaseArchetype1') + base_id + Cypress.env('updateWithPatchCatalogBaseArchetype2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doDeleteCatalogBaseType = (auth_key, base_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteCatalogBaseArchetype1') + base_id + Cypress.env('deleteCatalogBaseArchetype2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
}

export const doGetSettingsFElist = (auth_key) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getSettingsFEList'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}

export const doGetEdges = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env("getEdgeList1") + app_id + Cypress.env("getEdgeList2"),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}

export const dopostedge = (auth_key, app_id, myEdge_id) => {
    cy.readFile('cypress/fixtures/api_addedge.json').then((data) => {
        data.edge_id = myEdge_id;
        cy.writeFile('cypress/fixtures/api_addedge.json', JSON.stringify(data));
    });

    return cy.fixture('api_addedge.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env("createEdge1") + app_id + Cypress.env("createEdge2"),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doGetEdgesByid = (auth_key, app_id, edge_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getEdgeById1') + app_id + Cypress.env("getEdgeById2") + edge_id + Cypress.env("getEdgeById3"),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}

export const doputedge = (auth_key, app_id, edge_id) => {
    cy.readFile('cypress/fixtures/api_putedge.json').then((data) => {
        data.edge_id = edge_id;
        cy.writeFile('cypress/fixtures/api_putedge.json', JSON.stringify(data));
    });

    return cy.fixture('api_putedge.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env("putEdgeById1") + app_id + Cypress.env("putEdgeById2") + edge_id + Cypress.env("putEdgeById3"),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const dopatchedge = (auth_key, app_id, edge_id) => {
    cy.readFile('cypress/fixtures/api_patchedge.json').then((data) => {
        data.edge_id = edge_id;
        cy.writeFile('cypress/fixtures/api_patchedge.json', JSON.stringify(data));
    });

    return cy.fixture('api_patchedge.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env("patchEdgeById1") + app_id + Cypress.env("patchEdgeById2") + edge_id + Cypress.env("patchEdgeById3"),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const dodeleteEdgesByid = (auth_key, app_id, edge_id) => {

    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteEdgeById1') + app_id + Cypress.env("deleteEdgeById2") + edge_id + Cypress.env("deleteEdgeById3"),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
} 

export const doGetShareableComponentsList = (auth_key) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getShareableComponentsList'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}

export const doCreateShareableComponent = (auth_key) => {
   
    return cy.fixture('api_addShareableComponent.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createShareableComponents'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doGetShareableComponentsById = (auth_key,shareableComponent_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getShareableComponentsById1')+shareableComponent_id+Cypress.env('getShareableComponentsById2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}
export const doPatchShareableComponent = (auth_key,shareableComponent_id) => {
   
    return cy.fixture('api_patchShareableComponent.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchShareableComponentsById1')+shareableComponent_id+Cypress.env('patchShareableComponentsById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}
export const doGetCodeComponents = (auth_key) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCodeComponentslist'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}
export const doCreateCodeComponents = (auth_key) => {

    return cy.fixture('api_add_codecomponents.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addcodecomponents'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}
export const doGetCodeComponentsById = (auth_key,CodeComponents_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCodeComponentsById1')+CodeComponents_id+Cypress.env('getCodeComponentsById2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}
export const doPatchCodeComponent = (auth_key,CodeComponents_id) => {
    return cy.fixture('api_patchCodeComponents.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchCodeComponentsById1')+CodeComponents_id+Cypress.env('patchCodeComponentsById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}
export const doPutCodeComponent = (auth_key, CodeComponents_id) => {

    return cy.fixture('api_updatewithputCodeComponents.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putCodeComponentsById1')+CodeComponents_id+Cypress.env('putCodeComponentsById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}
export const doGetSkill = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getskill'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}

export const doCreateSkill = (auth_key) => {
    return cy.fixture('api_addSkill.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('postaddskill'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doGetSkillsById = (auth_key, skills_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getSkillById1') + skills_id + Cypress.env('getSkillById2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}

export const doPatchSkill = (auth_key, skills_id) => {
    return cy.fixture('api_patchSkill.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchSkillById1') + skills_id + Cypress.env('patchSkillById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doPutSkill = (auth_key, skills_id) => {
    return cy.fixture('api_putSkill.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putSkillById1') + skills_id + Cypress.env('putSkillById2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}
export const dodeleteSkillByid = (auth_key, skills_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteSkillByID1') + skills_id + Cypress.env("deleteSkillByID2"),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}