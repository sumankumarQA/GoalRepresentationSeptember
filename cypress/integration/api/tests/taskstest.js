// import LoginPage from '../pages/loginPage';
/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doGetExistingTaskTemplate,doEditAmountInPaymentMilestone,doCreateTask, doViewTask, doGetTaskById, doAddQuoteInTask, doDeleteTask, doDeleteSubTask, doAddMilestone, doGetAllMilestone, doGetAllSubTask, doGetMilestone, doUpdateMilestone, doDeleteMilestone, doAddTaskIntoMilestone, doUpdateTaskIntoMilestone, doUpdateSubTask, doUpdateOtherSubTask, doPublicTask, doApprovePricing, doUndoApprovePricing, doApprovePayment, doUndoApprovedPayment, doAddPaymentMilestone, doGetPaymentMilestone, doGetAllPaymentMilestone, doDeletePaymentMilestone, doAddQuote, doGetQuoteMilestone, doCheckoutWithAch, doGetJobType, doUpdateJobTypeRate, doGetTaskSharableStatus, doCreateBillingSchedule, doUpdateBillingSchedule, doGetBillingSchedule, doCreateSubTask, doCreateOtherSubTask, doMoveTask, doUpdateMilestoneCostHrs, doTaskIntoWishlist, doSearchTask } from '../pages/TasksPage.js';
import { doTaskLogin} from '../pages/loginPage.js';

let authKey;
let app_id;
let milestone_name = "milestone1";
let updated_milestone_name = 'Milestone1Updated';
let milestone_id;
let task_name = "Task1";
let task_hours = "2.0";
let task_cost = "120.00";
let task_id;
let payment_id;
let fe_subtask_id;
let milestone_wishlist_id;
let task_wishlist_id;
let wishlist_task_name = "taskwishlist";
describe("Tasks Page", () => {
    let app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Add Milestone', () => {
        doTaskLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                localStorage.setItem('app_id', response.body.id);
                doAddMilestone(authKey, app_id, milestone_name).then((response) => {
                    milestone_id = response.body.id;
                    milestone_name = response.body.title;
                    expect(response.status).to.eq(201)
                    cy.log("create milestone response", response.body)
                })
            })
        })
    })
    
    //********************Not Available on Swagger********************** */

    // it('Get Existing Task from template', () => {

    //     doGetExistingTaskTemplate(authKey).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("Get Existing Task from template", response.body)
    //     })
    // })

    it('Get Task SharableStatus Flow', () => {

        doGetTaskSharableStatus(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Task SharableStatus response", response.body)
        })
    })

    it('Get Milestone', () => {

        doGetMilestone(authKey, app_id, milestone_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response", response.body)
        })
    })

    it('UpdateMilestone', () => {

        doUpdateMilestone(authKey, app_id, milestone_id, updated_milestone_name).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response", response.body)
        })
    })

    it('Create Task', () => {

        doCreateTask(authKey, app_id, task_name, task_hours, task_cost).then((response) => {
            task_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("create milestone response", response.body)
        })
    })

    it('Add Task into Milestone', () => {
        
        doAddTaskIntoMilestone(authKey, app_id, milestone_id, task_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response", response.body)
        })
    })

    it('Public Task', () => {

        doPublicTask(authKey, app_id, task_id, task_name).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response", response.body)
        })
    })

    // it('Search Task', () => {
    //     cy.reload();
    //     doSearchTask(authKey, app_id, task_id).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("create milestone response", response.body)
    //     })
    // })

    it('View Task', () => {

        doViewTask(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response", response.body)
        })
    })

//     it('Add Task Into Wish List', () => {
//         doGetAllMilestone(authKey, app_id).then((response) => {
//             milestone_wishlist_id = response.body[0].id;
//             expect(response.status).to.eq(200)
//             cy.log("create milestone response" + response.body)
//         })
    it('Create Tasks', () => {
        doCreateTask(authKey, app_id, wishlist_task_name, task_hours, task_cost).then((response) => {
            task_wishlist_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("create milestone response", response.body)
        })
    })
    // it('Add wishlist tasks', () => {
    //     doTaskIntoWishlist(authKey, app_id,milestone_wishlist_id,task_wishlist_id).then((response) => {
    //         task_wishlist_id = response.body.id;
    //         expect(response.status).to.eq(200)
    //         cy.log("create milestone response", response.body)
    //     })
    // })


    it('View Wish List Task Info', () => {
        doGetTaskById(authKey, app_id,task_wishlist_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response", response.body)
        })
    })

    it('Create Subtask Flow', () => {
        doCreateSubTask(authKey, task_id).then((response) => {
            fe_subtask_id = response.body.subtasks[0].id;
            expect(response.status).to.eq(200)
            cy.log("create milestone response", response.body)
        })
    })

    it('Create Other Subtask Flow', () => {
        doCreateOtherSubTask(authKey,app_id, task_id,"New Subtask").then((response) => {
            expect(response.status).to.eq(201)
            cy.log("create milestone response", response.body)
        })
    })

    it('Get Subtask Details Flow', () => {
        doGetAllSubTask(authKey,app_id, task_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response", response.body)
        })
    })


// it('Update Task Into Milestone Flow', () => {
//     doUpdateTaskIntoMilestone(authKey,task_id,"testingworld").then((response) => {
//         expect(response.status).to.eq(200)
//         cy.log("create milestone response", response.body)
//     })
// })

it('Update Subtask Flow', () => {
    doUpdateSubTask(authKey,fe_subtask_id,"Front-End Dev tool").then((response) => {
        expect(response.status).to.eq(200)
        cy.log("create milestone response", response.body)
    })
})

    it('Add Payment Milestone FLow', () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const due_date = `${year}-${month}-${day}`;
        const title = 'Payment mile' + app_id;
        const amount = 1000.00
        doAddPaymentMilestone(authKey, app_id, due_date, title, amount).then((response) => {
            payment_id = response.body.id;
            expect(response.status).to.eq(201)
            cy.log("Add Payment Milestone response", response.body)
        })
    })

    it('Add Payment Milestone FLow', () => {
        const amount = 1000.00
        doEditAmountInPaymentMilestone(authKey, app_id, payment_id, amount).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Add Payment Milestone response", response.body)
        })
    })


    it('Get PaymentMilestone Flow', () => {

        doGetPaymentMilestone(authKey, app_id, payment_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get PaymentMilestone response", response.body)
        })
    })

    it('Approve Payment Flow', () => {

        doApprovePayment(authKey, app_id).then((response) => {
            expect(response.status).to.eq(201)
            cy.log("Approve Payment response", response.body)
        })
    })

    it('Create Billing Schedule Flow', () => {

        doCreateBillingSchedule(authKey, app_id, "100_percent_upfront").then((response) => {
            expect(response.status).to.eq(201)
            cy.log("Create Billing Schedule response", response.body)
        })
    })

    it('Get Billing Schedule Flow', () => {

        doGetBillingSchedule(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Billing Schedule response", response.body)
        })
    })

    it('Get All Payment Milestone Flow', () => {

        doGetAllPaymentMilestone(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get All Payment Milestone response", response.body)
        })
    })
  
    it('Update Billing Schedule Flow', () => {

        doUpdateBillingSchedule(authKey, app_id, "50_50").then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Update Billing Schedule response", response.body)
        })
    })

    it('Get Billing Schedule After Update Billing', () => {

        doGetBillingSchedule(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Billing Schedule response", response.body)
        })
    })

    it('Approve Payment After Billing Schedule ', () => {

        doApprovePayment(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Approve Payment response", response.body)
        })
    })
   

    it('Get All Milestone', () => {

        doGetAllMilestone(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response" + response.body)
        })
    })
    it('Get Job Type Flow', () => {

        doGetJobType(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response" + response.body)
        })
    })

    it('Update Job Type Rate Flow', () => {

        doUpdateJobTypeRate(authKey, app_id, true).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response" + response.body)
        })
    })

    // it('Delete Milestone Flow', () => {

    //     doDeleteMilestone(authKey, app_id, milestone_id).then((response) => {
    //         expect(response.status).to.eq(204)
    //         cy.log("create milestone response" + response.body)
    //     })
    // })

    it('Get All Milestone Flow', () => {

        doGetAllMilestone(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create milestone response" + response.body)
        })
    })


})






