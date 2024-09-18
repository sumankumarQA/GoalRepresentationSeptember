/// <reference types = "cypress"/>

export const doCreateTask = (auth_key, app_id, task_name, task_hour, task_cost) => {
    cy.readFile('cypress/fixtures/api_createTask.json').then((data) => {
        data.app = app_id;
        data.summary = task_name;
        data.resource_cost_estimated = task_cost;
        data.hours_estimated = task_hour;
        cy.writeFile('cypress/fixtures/api_createTask.json', JSON.stringify(data));
    });

    return cy.fixture('api_createTask.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createTask'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            return response;
        })
    })
};
export const doViewTask = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('viewTask1') + app_id + Cypress.env('viewTask2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};
export const doGetTaskById = (auth_key, task_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getTaskById1') + task_id + Cypress.env('getTaskById2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};


// Some issue in json file before execution we have to check the json file
// export const doAddQuoteInTask = (auth_key, app_id) => {
//     cy.readFile('cypress/fixtures/api_createTask.json').then((data) => {
//         data.app = app_id;
//         cy.writeFile('cypress/fixtures/api_createTask.json', JSON.stringify(data));
//     });

//     return cy.fixture('api_createTask.json').then((myFixture) => {
//         cy.request({
//             method: 'POST',
//             url: Cypress.env('baseUrl') + Cypress.env('addQuoteInTask1')+app_id+Cypress.env('addQuoteInTask2'),
//             body: myFixture,
//             headers: {
//                 'Authorization': 'Token ' + auth_key
//             }
//         }).then((response) => {
//             return response;
//         })
//     })
// };

export const doDeleteTask = (auth_key, task_id) => {

    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteTask1') + task_id + Cypress.env('deleteTask2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doDeleteSubTask = (auth_key, task_id) => {

    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteSubTask1') + task_id + Cypress.env('deleteSubTask2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doAddMilestone = (auth_key, app_id, milestone_name) => {
    cy.readFile('cypress/fixtures/api_createMilestone.json').then((data) => {
        data.project = app_id;
        data.title = milestone_name;
        cy.writeFile('cypress/fixtures/api_createMilestone.json', JSON.stringify(data));
    });

    return cy.fixture('api_createMilestone.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addMileStone1') + app_id + Cypress.env('addMileStone2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doGetExistingTaskTemplate = (auth_key) => {


    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('addTaskFromTemplete'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })

};

export const doGetAllMilestone = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAllMilestone1') + app_id + Cypress.env('getAllMilestone2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doGetAllSubTask = (auth_key, app_id, task_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAllSubTask1') + app_id + Cypress.env('getAllSubTask2') + task_id + Cypress.env('getAllSubTask3'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doGetMilestone = (auth_key, app_id, milestone_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getMilestone1') + app_id +'/milestones/'+ milestone_id + Cypress.env('getMilestone2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};
export const doUpdateMilestone = (auth_key, app_id, milestone_id, milestone_name) => {
    cy.readFile('cypress/fixtures/api_updateMilestone.json').then((data) => {
        data.title = milestone_name;
        cy.writeFile('cypress/fixtures/api_updateMilestone.json', JSON.stringify(data));
    });

    return cy.fixture('api_updateMilestone.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('updateMilestone1') + app_id + Cypress.env('updateMilestone2') + milestone_id + Cypress.env('updateMilestone3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doDeleteMilestone = (auth_key, app_id, milestone_id) => {

    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deleteMilestone1') + app_id + Cypress.env('deleteMilestone2') + milestone_id + Cypress.env('deleteMilestone3'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doAddTaskIntoMilestone = (auth_key, app_id, milestone_id, task_id) => {
    cy.readFile('cypress/fixtures/api_add_task_into_milestone.json').then((data) => {
        data.task_ids = task_id;
        cy.writeFile('cypress/fixtures/api_add_task_into_milestone.json', JSON.stringify(data));
    });

    return cy.fixture('api_add_task_into_milestone.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('addTaskIntoMilestone1') + app_id + Cypress.env('addTaskIntoMilestone2') + milestone_id + Cypress.env('addTaskIntoMilestone3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doUpdateTaskIntoMilestone = (auth_key, task_id, updated_task_name) => {
    cy.readFile('cypress/fixtures/api_updateTaskIntoMilestoane.json').then((data) => {
        data.summary = updated_task_name;
        cy.writeFile('cypress/fixtures/api_updateTaskIntoMilestoane.json', JSON.stringify(data));
    });

    return cy.fixture('api_updateTaskIntoMilestoane.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('updateTaskIntoMilestone1') + task_id + Cypress.env('updateTaskIntoMilestone1'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doUpdateSubTask = (auth_key, task_id, updated_sub_task_name) => {
    cy.readFile('cypress/fixtures/api_updateSubTask.json').then((data) => {
        data.summary = updated_sub_task_name;
        cy.writeFile('cypress/fixtures/api_updateSubTask.json', JSON.stringify(data));
    });

    return cy.fixture('api_updateSubTask.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('updateSubTask1') + task_id + Cypress.env('updateSubTask2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doUpdateOtherSubTask = (auth_key, task_id, updated_other_sub_task_name) => {
    cy.readFile('cypress/fixtures/api_updateOtherSubTask.json').then((data) => {
        data.summary = updated_other_sub_task_name;
        cy.writeFile('cypress/fixtures/aapi_updateOtherSubTask.json', JSON.stringify(data));
    });

    return cy.fixture('api_updateOtherSubTask.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('updateOtherSubTask2') + task_id + Cypress.env('updateOtherSubTask2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doPublicTask = (auth_key, app_id, task_id, updated_summary) => {
    cy.readFile('cypress/fixtures/api_public_task.json').then((data) => {
        data.app = app_id;
        data.summary = updated_summary;
        cy.writeFile('cypress/fixtures/api_public_task.json', JSON.stringify(data));
    });

    return cy.fixture('api_public_task.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('publicTask1') + task_id + Cypress.env('publicTask2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            return response;
        })
    })
};
export const doApprovePricing = (auth_key, app_id) => {
    return cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl') + Cypress.env('approvePricing1') + app_id + Cypress.env('approvePricing2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doUndoApprovePricing = (auth_key, app_id) => {
    return cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl') + Cypress.env('undoApprovePricing1') + app_id + Cypress.env('undoApprovePricing2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doApprovePayment = (auth_key, app_id) => {
    return cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl') + Cypress.env('approvePayment1') + app_id + Cypress.env('approvePayment2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doUndoApprovedPayment = (auth_key, app_id) => {
    return cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl') + Cypress.env('undoApprovedPayment1') + app_id + Cypress.env('undoApprovedPayment2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doAddPaymentMilestone = (auth_key, app_id, due_date, title, amount) => {
    cy.readFile('cypress/fixtures/api_addPaymentMilestone.json').then((data) => {
        data.due_date = due_date;
        data.title = title;
        data.amount = amount;
        cy.writeFile('cypress/fixtures/api_addPaymentMilestone.json', JSON.stringify(data));
    });

    return cy.fixture('api_addPaymentMilestone.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addPaymentMilestone1') + app_id + Cypress.env('addPaymentMilestone2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doEditAmountInPaymentMilestone = (auth_key, app_id, payment_milestone_id, amount) => {
    cy.readFile('cypress/fixtures/api_editAmountInPaymentMilestone.json').then((data) => {
        data.amount = amount;
        cy.writeFile('cypress/fixtures/api_editAmountInPaymentMilestone.json', JSON.stringify(data));
    });

    return cy.fixture('api_editAmountInPaymentMilestone.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('editAmountInPaymentMilestone1') + app_id + Cypress.env('editAmountInPaymentMilestone2') + payment_milestone_id + Cypress.env('editAmountInPaymentMilestone3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doGetPaymentMilestone = (auth_key, app_id, pay_prop_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getPaymentMilestone1') + app_id + Cypress.env('getPaymentMilestone2') + pay_prop_id + Cypress.env('getPaymentMilestone3'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doGetAllPaymentMilestone = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getAllPaymentMilestone1') + app_id + Cypress.env('getAllPaymentMilestone2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doDeletePaymentMilestone = (auth_key, app_id, payment_id) => {
    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('deletePaymentMilestone1') + app_id + Cypress.env('deletePaymentMilestone2') + payment_id + Cypress.env('deletePaymentMilestone3'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doAddQuote = (auth_key, app_id, amount, work_statement, title, payment_proposals) => {
    cy.readFile('cypress/fixtures/api_addQuote.json').then((data) => {
        data.project = app_id;
        data.work_statement = work_statement;
        data.amount = amount;
        data.title = title;
        data.paymentproposals = payment_proposals;
        cy.writeFile('cypress/fixtures/api_addQuote.json', JSON.stringify(data));
    });

    return cy.fixture('api_addQuote.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('addQuote1') + app_id + Cypress.env('addQuote2'),
            body: myFixture,
            headers: {
                "Authorization": auth_key, "Content-Type": "application/json",
                "Content-Length": "<calculated when request is sent>",
                "Host": "<calculated when request is sent>"
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doGetQuoteMilestone = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getQuoteMilestone1') + app_id + Cypress.env('getQuoteMilestone2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doCheckoutWithAch = (auth_key, app_id, amount, payment_proposals, quote_id) => {
    cy.readFile('cypress/fixtures/api_addQuote.json').then((data) => {
        data.amount = amount;
        data.title = title;
        data.paymentproposals = payment_proposals;
        cy.writeFile('cypress/fixtures/api_addQuote.json', JSON.stringify(data));
    });

    return cy.fixture('api_addQuote.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('checkoutWithAch1') + app_id + Cypress.env('checkoutWithAch2') + quote_id + Cypress.env('checkoutWithAch3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doGetJobType = (auth_key, app_id) => {
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getJobType1') + app_id + Cypress.env('getJobType2'),
        headers: {
            'Authorization': 'Token ' + auth_key,
        }

    }).then((response) => {
        return response;
    })
};

export const doUpdateJobTypeRate = (auth_key, app_id, enable) => {
    cy.readFile('cypress/fixtures/api_updateJobtypeRate.json').then((data) => {
        data.app = app_id;
        data.enabled = enable;
        cy.writeFile('cypress/fixtures/api_updateJobtypeRate.json', JSON.stringify(data));
    });

    return cy.fixture('api_updateJobtypeRate.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('updateJobTypeRate'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doGetTaskSharableStatus = (auth_key) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getTaskSharableStatus'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doCreateBillingSchedule = (auth_key, app_id, billing_type) => {
    cy.readFile('cypress/fixtures/api_addBillingSchedule.json').then((data) => {
        data.type = billing_type;
        cy.writeFile('cypress/fixtures/api_addBillingSchedule.json', JSON.stringify(data));
    });

    return cy.fixture('api_addBillingSchedule.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createBillingSchedule1') + app_id + Cypress.env('createBillingSchedule2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doUpdateBillingSchedule = (auth_key, app_id, billing_type) => {
    cy.readFile('cypress/fixtures/api_updateBillingSchedule.json').then((data) => {
        data.type = billing_type;
        cy.writeFile('cypress/fixtures/api_updateBillingSchedule.json', JSON.stringify(data));
    });

    return cy.fixture('api_updateBillingSchedule.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('updateBillingSchedule1') + app_id + Cypress.env('updateBillingSchedule2'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            return response;
        })
    })
};


export const doGetBillingSchedule = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getBillingSchedule1') + app_id + Cypress.env('getBillingSchedule2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doCreateSubTask = (auth_key, task_id) => {

    return cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl') + Cypress.env('createSubTask1') + task_id + Cypress.env('createSubTask2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doCreateOtherSubTask = (auth_key, app_id, task_id, task_name) => {
    cy.readFile('cypress/fixtures/api_createOtherSubTask.json').then((data) => {
        data.app = app_id;
        data.summary = task_name;
        data.parent = task_id;
        cy.writeFile('cypress/fixtures/api_createOtherSubTask.json', JSON.stringify(data));
    });

    return cy.fixture('api_createOtherSubTask.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('createOtherSubTask'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doMoveTask = (auth_key, app_id, milestone_id_from, milestone_id_to, task_id) => {
    cy.readFile('cypress/fixtures/api_MoveTask.json').then((data) => {
        data.move_from_milestone_id = milestone_id_from;
        data.task_ids = task_id;
        cy.writeFile('cypress/fixtures/api_MoveTask.json', JSON.stringify(data));
    });

    return cy.fixture('api_MoveTask.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('moveTask1') + app_id + Cypress.env('moveTask2') + milestone_id_to + Cypress.env('moveTask3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doUpdateMilestoneCostHrs = (auth_key, app_id, milestone_id) => {
    return cy.fixture('api_updateMilestoneCostHrs.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('updateMilestoneCostHrs1') + app_id + Cypress.env('updateMilestoneCostHrs2') + milestone_id + Cypress.env('updateMilestoneCostHrs3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key,
            }

        }).then((response) => {
            return response;
        })
    })
};

export const doTaskIntoWishlist = (auth_key, app_id, milestone_id, task_ids) => {
    cy.readFile('cypress/fixtures/api_addTaskIntoMilestone.json').then((data) => {
        data.task_ids = task_ids;
        cy.writeFile('cypress/fixtures/api_addTaskIntoMilestone.json', JSON.stringify(data));
    });

    return cy.fixture('api_addTaskIntoMilestone.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('addTaskIntoWhishlist1') + app_id + Cypress.env('addTaskIntoWhishlist2') + milestone_id + Cypress.env('addTaskIntoWhishlist3'),
            body: myFixture,
            headers: {
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            return response;
        })
    })
};

export const doSearchTask = (auth_key, app_id, task_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('searchTask1') + task_id + Cypress.env('searchTask2') + app_id,
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};




























































































