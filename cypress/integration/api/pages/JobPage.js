/// <reference types = "cypress"/>

export const doAddJobRequest = (auth_key, app_id) => {
    return cy.fixture('api_addJobRequest.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            body: myFixture,
            url: Cypress.env('baseUrl') + Cypress.env('addJobRequest1') + app_id + Cypress.env('addJobRequest2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
        }).then((response) => {
            return response;
        })
    })
};

export const doGetJobRequest = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getJobRequest1') + app_id + Cypress.env('getJobRequest2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })

};

export const doGetJobRequestUsingId = (auth_key, app_id, job_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getJobRequestUsingId1') + app_id + Cypress.env('getJobRequestUsingId2') + job_id,
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })

};

export const doEditJobRequest = (auth_key, app_id, job_id, project_description) => {

    cy.readFile('cypress/fixtures/api_addJobRequest.json').then((data) => {
        data.project_description = project_description;
        cy.writeFile('cypress/fixtures/api_addJobRequest.json', JSON.stringify(data));
    });
    return cy.fixture('api_addJobRequest.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('editJobRequest1') + app_id + Cypress.env('editJobRequest2') + job_id,
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};
export const doDeleteJobRequest = (auth_key, app_id, job_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteJobRequest1') + app_id + Cypress.env('deleteJobRequest2') + job_id,
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })

};

export const doGetjobtype = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getJobtype'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}

export const doAddjobtype= (auth_key, app_id) => {
    cy.readFile('cypress/fixtures/api_addJobtypes.json').then((data) => {
        data.app = app_id;
        cy.writeFile('cypress/fixtures/api_addJobtypes.json', JSON.stringify(data));
    });
    return cy.fixture('api_addJobtypes.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('postJobtype'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doGetjobtypeById = (auth_key, jobtype_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getJobtypeById1')+jobtype_id+ Cypress.env('getJobtypeById2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}

export const doPatchjobtype = (auth_key,job_name,job_cost,app_id,jobtype_id) => {
    cy.readFile('cypress/fixtures/api_updateJobtype.json').then((data) => {
        data.name = job_name;
        data.cost = job_cost ;
        data.app = app_id;
        cy.writeFile('cypress/fixtures/api_updateJobtype.json', JSON.stringify(data));
    });
    return cy.fixture('api_updateJobtype.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('patchJobTypeId1')+jobtype_id+Cypress.env('patchJobTypeId2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doPutJobtype= (auth_key,jobtype_id) => {
    return cy.fixture('api_putJobtype.json').then((myFixture) => {
        cy.request({
            method: 'PUT',
            url: Cypress.env('baseUrl') + Cypress.env('putJobTypeId1')+jobtype_id+Cypress.env('putJobTypeId2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
}

export const doDeleteJobtypeByid = (auth_key, jobtype_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteJobtype1')+jobtype_id+Cypress.env("deleteJobtype2"),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}

export const doGetCandidates = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAllCandidates'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })
}

export const doGetCandidatesbyID = (auth_key, candidates_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getCandidatesById1') + candidates_id + Cypress.env('getsCandidatesById2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        },
    }).then((response) => {
        return response;
    })

}; 

export const dogetJobtitles = (auth_key) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getJobtitles'),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token ' + auth_key,
        },
    }).then((response) => {
        return response;
    })
};

export const doGetJobtitlesByID = (auth_key, jobtitles_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getJobtitlesByID1')+jobtitles_id+Cypress.env('getJobtitlesByID2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
}