/// <reference types = "cypress"/>

export const doCteareApp = (auth_key, app_name) => {
    // ******************* CREATE AN APP ******************** //
    cy.readFile('cypress/fixtures/api_createApp.json').then((data) => {
        data.custom_name = app_name
        cy.writeFile('cypress/fixtures/api_createApp.json', JSON.stringify(data))
    })
    return cy.fixture('api_createApp.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createApp'),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const getNotification = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getNotification1') + app_id + Cypress.env('getNotification2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const searchApp = (auth_key, app_name) => {
    // ******************* SEARCH AN APP ******************** //
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('searchApp1') + app_name + Cypress.env('searchApp2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const appTypeList = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('appTypeList'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetAppetizeBuilds = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAppetizeBuilds1') + app_id + Cypress.env('getAppetizeBuilds2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const getAppListById = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('appTypeList1') + Cypress.env('appTypeList2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};


export const doGetSkillsList = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getSkills'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

// *** Test cases is not available on swagger
// export const doGetBugTaskList = (auth_key, app_id) => {
//     return cy.request({
//         method: 'GET',
//         url: Cypress.env('baseUrl') + Cypress.env('getBugTaskList1') + app_id + Cypress.env('getBugTaskList2'),
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//             'Authorization': 'Token ' + auth_key,
//         },
//     }).then((response) => {
//         return response;
//     })
// };

// *** Test cases is not available on swagger
// export const doCreateBugTask = (auth_key, app_id) => {

//     return cy.fixture('api_addBugtask.json').then((myFixture) => {
//         cy.request({
//             method: 'POST',
//             url: Cypress.env('baseUrl') + Cypress.env('createBugTask1') + app_id + Cypress.env('createBugTask2'),
//             headers: {
//                 'Authorization': 'Token ' + auth_key
//             },
//             body: myFixture
//         }).then((response) => {
//             return response;
//         })
//     })
// }

// *** Test cases is not available on swagger
// export const doGetBugTaskById = (auth_key, app_id, bugTask_id) => {
//     return cy.request({
//         method: 'GET',
//         url: Cypress.env('baseUrl') + Cypress.env('getBugTaskById1') + app_id + Cypress.env('getBugTaskById2') + bugTask_id + Cypress.env('getBugTaskById3'),
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//             'Authorization': 'Token ' + auth_key,
//         },
//     }).then((response) => {
//         return response;
//     })
// };

// *** Test cases is not available on swagger
// export const doUpdateWithPutBugTask = (auth_key, app_id, bugTask_id) => {

//     return cy.fixture('api_updateWithPutBugtask.json').then((myFixture) => {
//         cy.request({
//             method: 'PUT',
//             url: Cypress.env('baseUrl') + Cypress.env('putBugTaskById1') + app_id + Cypress.env('putBugTaskById2') + bugTask_id + Cypress.env('putBugTaskById3'),
//             headers: {
//                 'Authorization': 'Token ' + auth_key
//             },
//             body: myFixture
//         }).then((response) => {
//             return response;
//         })
//     })
// }

// *** Test cases is not available on swagger
// export const doUpdateWithPatchBugTask = (auth_key, app_id, bugTask_id) => {

//     return cy.fixture('api_updateWithPatchBugtask.json').then((myFixture) => {
//         cy.request({
//             method: 'PATCH',
//             url: Cypress.env('baseUrl') + Cypress.env('patchBugTaskById1') + app_id + Cypress.env('patchBugTaskById2') + bugTask_id + Cypress.env('patchBugTaskById3'),
//             headers: {
//                 'Authorization': 'Token ' + auth_key
//             },
//             body: myFixture
//         }).then((response) => {
//             return response;
//         })
//     })
// };

// *** Test cases is not available on swagger
// export const doDeleteBugTask = (auth_key, app_id, bugTask_id) => {
//     return cy.request({
//         method: 'DELETE',
//         url: Cypress.env('baseUrl') + Cypress.env('deleteBugTaskById1') + app_id + Cypress.env('deleteBugTaskById2') + bugTask_id + Cypress.env('deleteBugTaskById3'),
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//             'Authorization': 'Token ' + auth_key,
//         },
//     }).then((response) => {
//         return response;
//     })
// };


export const doGetComponentList = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getComponentList1') + app_id + Cypress.env('getComponentList2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doCreateComponent = (auth_key, app_id) => {

    return cy.fixture('api_addComponent.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createComponent1') + app_id + Cypress.env('createComponent2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doGetComponentById = (auth_key, app_id, Component_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getComponentById1') + app_id + Cypress.env('getComponentById2') + Component_id + Cypress.env('getComponentById3'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doUpdateWithPutComponent = (auth_key, app_id, component_id) => {

    return cy.fixture('api_updateWithPutComponent.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putComponent1') + app_id + Cypress.env('putComponent2') + component_id + Cypress.env('putComponent3'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doUpdateWithPatchComponent = (auth_key, app_id, component_id) => {

    return cy.fixture('api_updateWithPatchComponent.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchComponent1') + app_id + Cypress.env('patchComponent2') + component_id + Cypress.env('patchComponent3'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doDeleteComponent = (auth_key, app_id, component_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteComponent1') + app_id + Cypress.env('deleteComponent2') + component_id + Cypress.env('deleteComponent3'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};


export const getCertificateList = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCertificateList'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const getAppSupportType = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAppSupportType'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const getAppInfo = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAppInfo1') + app_id + Cypress.env('getAppInfo2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doCheckAppGeneration = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('checkAppGeneration1') + app_id + Cypress.env('checkAppGeneration2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};
export const getInvoice = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getInvoice'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};
export const searchInvoice = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('searchInvoice') + app_id,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const getAppLogs = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAppLog1') + app_id + Cypress.env('getAppLog2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const getAppLogsUsingLogID = (auth_key, log_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAppLogUsingAppId') + log_id,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })


};
export const getAddonsList = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAddonsList1') + app_id + Cypress.env('getAddonsList2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doCreateAttributes = (auth_key, app_id) => {

    cy.readFile('cypress/fixtures/api_createAttributes.json').then((data) => {
        data.new_build_stage = app_id;
        cy.writeFile('cypress/fixtures/api_createAttributes.json', JSON.stringify(data))
    })
    return cy.fixture('api_createAttributes.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createAttributes1') + app_id + Cypress.env('createAttributes2'),
            // url: Cypress.env('baseUrl') + '/api/v2/apps/' + app_id + '/attributes/',

            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const getAttributes = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAttributes1') + app_id + Cypress.env('getAttributes2'),
        // url: Cypress.env('baseUrl') + '/api/v2/apps/' + app_id + '/attributes/',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetAttributesById = (auth_key, app_id, attributes_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAttributes1') + app_id + Cypress.env('getAttributes2') + attributes_id + Cypress.env('getAttributes3'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const getUserList = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getUserList') + app_id,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};


export const getEdges = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getEdges1') + app_id + Cypress.env('getEdges2'),
        //  url: Cypress.env('baseUrl')+'/api/v1/apps/'+app_id+'/components/',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const dogGetFilesList = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getFilesList1') + app_id + Cypress.env('getFilesList2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doCreateFile = (auth_key, app_id) => {

    return cy.fixture('api_addFile.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createFilesList1') + app_id + Cypress.env('createFilesList2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doGetFileById = (auth_key, app_id, file_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getFilesById1') + app_id + Cypress.env('getFilesById2') + file_id + Cypress.env('getFilesById3'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doUpdateWithPutFile = (auth_key, app_id, file_id) => {

    return cy.fixture('api_updateWithPutFile.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putFilesById1') + app_id + Cypress.env('putFilesById2') + file_id + Cypress.env('putFilesById3'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doUpdateWithPatchFile = (auth_key, app_id, file_id) => {

    return cy.fixture('api_updateWithPatchFile.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchFilesById1') + app_id + Cypress.env('patchFilesById2') + file_id + Cypress.env('patchFilesById3'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doDeleteFile = (auth_key, app_id, file_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteFiles1') + app_id + Cypress.env('deleteFiles2') + file_id + Cypress.env('deleteFiles3'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const getAuditLogList = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAuditLogList1')+app_id+Cypress.env('getAuditLogList2'),  
        // url: Cypress.env('baseUrl') + '/api/v1/apps/' + app_id + '/audit-logs/',

        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })


};

export const dogetCertifications = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getcertificstions'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doPostCertifications = (auth_key, app_id) => {

    return cy.fixture('api_add_Certificaionsdata.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('postcertifications'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};
export const dogetCertificationsid = (auth_key, app_id, Certifications_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getcertificationsid1') + Certifications_id + Cypress.env('getcertificationsid2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};
export const doputCertificationsid = (auth_key, app_id, Certifications_id) => {

    return cy.fixture('api_putCertifications.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putcertificationsid1') + Certifications_id + Cypress.env('putcertificationsid2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doPatchCertificationsid = (auth_key, app_id, Certifications_id) => {

    return cy.fixture('api_patchCertifications.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchcertificationsid1') + Certifications_id + Cypress.env('patchcertificationsid2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doDeleteCertificationsid = (auth_key, app_id, Certifications_id) => {

    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deletecertificationsid1') + Certifications_id + Cypress.env('deletecertificationsid2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const getStatistics = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getStatistics'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const getBuildstages = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getBuildstages'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const getCandidates = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCandidates'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const getFeedbacks = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getFeedbacks'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const getFeedbacksCategories = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getFeedbacksCategories'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetFeedbacksCategoriesByID = (auth_key, feedbacks_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getFeedbacksCategoriesById1') + feedbacks_id + Cypress.env('getFeedbacksCategoriesById2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}

export const getReports = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getReports'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetReportsByID = (auth_key, reports_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getReportsBYID1') + reports_id + Cypress.env('getReportsBYID2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}

export const dogetcbusers = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getcbusers'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doPostcbusers = (auth_key) => {

    return cy.fixture('api_post_cbusers.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('postcbusers'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const dogetcbusersbyId = (auth_key, cb_usersid) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getcbusersbyId1') + cb_usersid + Cypress.env('getcbusersbyId2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doputcbusersbyId = (auth_key, cb_usersid, username1) => {
    cy.readFile('cypress/fixtures/api_put_cbusers.json').then((data) => {
        data.username = username1;
        cy.writeFile('cypress/fixtures/api_put_cbusers.json', JSON.stringify(data))
    })
    return cy.fixture('api_put_cbusers.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putcbusers1') + cb_usersid + Cypress.env('putcbusers2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })

};

export const dopatchcbusersbyId = (auth_key, cb_usersid, username1) => {
    cy.readFile('cypress/fixtures/api_patch_cbusers.json').then((data) => {
        data.username = username1;
        cy.writeFile('cypress/fixtures/api_patch_cbusers.json', JSON.stringify(data))
    })
    return cy.fixture('api_patch_cbusers.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchusers1') + cb_usersid + Cypress.env('patchusers2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })

};

export const doGetDevloperrequest = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getDeveloperrequest'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetDevloperrequestByID = (auth_key, developerrequest_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getDeveloperrequestByID1') + developerrequest_id + Cypress.env('getDeveloperrequestByID2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}

export const doGetResponses = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getResponses'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};


export const doGetAppetizedevices = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAppetizedevices'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const dogGetAPIspec = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAPIspec1') + app_id + Cypress.env('getAPIspec2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetLogs = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getLogs1') + app_id + Cypress.env('getLogs2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetLogsById = (auth_key, app_id, logs_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getLogsByID1') + app_id + Cypress.env('getLogsByID2') + logs_id + Cypress.env('getLogsByID3'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doPostDashboardfeedbacks = (auth_key) => {

    return cy.fixture('api_adddashboardfeedback.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('postDashboardfeedback'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doGetMemberfeedback = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getMemberfeedback'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetfeedbackmemberByID = (auth_key, memberfeedback_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getMemberfeedbackByID1') + memberfeedback_id + Cypress.env('getMemberfeedbackByID2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}

export const doGetAddons = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAddons'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetAddonsByID = (auth_key, addons_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getaddonsByID1') + addons_id + Cypress.env('getaddonsByID2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })

};

export const doGetScaffolds = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getScaffolds'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doTOTPdevice = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getTotpdevice'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetSocialaccounts = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getSocialaccounts'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};


export const doGetSettingsfe = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getSettingsfe'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetPeojectClones = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getProjectclones'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetProjectClonesByID = (auth_key, projectclones_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getProjectclonesByID1') + projectclones_id + Cypress.env('getProjectclonesByID2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })

};

export const doGetMobilebuilds = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getMobilebuilds1') + app_id + Cypress.env('getMobilebuilds2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })


};
export const doGetSlides = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getSlides1') + app_id + Cypress.env('getSlides2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doPostresendverification = (auth_key) => {
    return cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl') + Cypress.env('addResendverification'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};


export const doPostslides = (auth_key, app_id) => {

    return cy.fixture('api_add_slides.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('postSlides1') + app_id + Cypress.env('postSlides2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doPostDashboardFeedack = (auth_key) => {

    return cy.fixture('api_addPostfeedback.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('adddashboardfeature'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doPostMagicLink= (auth_key) => {

    return cy.fixture('api_addMagiclink.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addMagiclink'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doPostOutGrow = (auth_key) => {
    return cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl') + Cypress.env('postOutgrow'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetSocialApp = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getSocialapps'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetSocialAppByID = (auth_key,social_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getSocialappsByID1') + social_id + Cypress.env('getSocialappsByID2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })

};

export const doPostTotpDeviceRemove = (auth_key) => {
    return cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl') + Cypress.env('addRemovetotpdisabled'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetUser = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getUser'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doPutUser = (auth_key) => {
    return cy.fixture('api_addPut_User.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putUser'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })

};

export const doGetUsers = (auth_key,users_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getUsers1')+users_id + Cypress.env('getUsers2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetUsersByID = (auth_key,users_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getUsersByID1')+users_id + Cypress.env('getUsersByID2'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};
