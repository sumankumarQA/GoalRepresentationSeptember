import { authenticator } from 'otplib';
/// <reference types = "cypress"/>
describe("Checkout flow", () => {
    let auth_key;
    let milestone_id;
    let task_id;
    let app_id;
    let payment_id;
    let quote_id;
    let attributes_id;
    const baseURL= "https://crowdbotics-slack-dev.herokuapp.com"
    before('POST request', () => {
        // ******************* LOGIN AND GET AUTH KEY ********************
        const token = authenticator.generate("574WTVJOJ562OOSF2FCFPBJM6FIKHQBR");
        cy.request({
            method: 'POST',
            url: baseURL+'/api/v2/totp-login/',
            body: { 'email': 'testsneh@crowdbotics.com', 'password': 'devstringx@123', 'token': token},
        }).then((response) => {
            expect(response.status).to.eq(200)
            auth_key = response.body.key
            cy.log('api auth key is generated ', auth_key)
        })
    })
    it("Task shareable-status", () => {
        //  ************* GET Task shareable-status
        cy.request({
            method: 'GET',
            url: baseURL+'/api/v2/tasks/shareable-status/',
            headers: {
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log('api auth key is generated ', response.body)
        })
        cy.log('api auth key is generated ' + auth_key)
    })

    it("create an app", () => {
        let app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
        cy.request({
            method: 'POST',
            url: baseURL+'/api/v1/github-repos/',
            body: {
                "app_type": "mobile-app",
                "custom_name": app_name,
                "lang_framework": "react_native"
            },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key,
            }
        }).then((response) => {
            cy.log('api auth key is generated ' + response.body)
            expect(response.status).to.eq(201)
            app_id = response.body.id

            cy.log('App is created and app ID is ' + app_id)
        })
    })

    // app_id = 115908

    // ************************* UPGRADE THE PLAN ******************
    it("upgrade the plan", () => {
        cy.request({
            method: 'POST',
            url: baseURL+'/api/v2/apps/' + app_id + '/plan/update/',
            body: { "id": 170 },
            headers: {
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log('Plan is upgraded', response.body.message)
        })
    })

    // ************************* ADD PAYMENT MILESTONE ****************** 
    it("add payment milestone", () => {
        cy.request({
            method: 'POST',
            url: baseURL+'/api/v1/apps/' + app_id + '/payment-proposals/',
            body: { "title": "Payment milestone ", "due_date": "2023-12-13", "amount": 2000.0, "status": "draft" },
            headers: {
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            payment_id = response.body.id
            cy.log('Payment milestone is added id is ', payment_id)
        })
    })
    // ************************* CREATE MILESTONE ******************
    it("create a milestone", () => {
        cy.log('api auth key is generated         ====n   ' + auth_key)
        cy.request({
            method: 'POST',
            url: baseURL+'/api/v2/apps/' + app_id + '/milestones/',
            body: { "project": app_id, "title": "Milestone1", "work_statement": "", "dollar_amount": 0, "hours_amount": 0, "tos_agreement": true, "contact_me": true, "overage_agreement": true, "author_ip_address": "49.36.213.133", "tasks_order": [], "estimated_delivery_date": null },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            milestone_id = response.body.id
            cy.log('milestone is created and milestone ID is ' + milestone_id)
        })
    })

    // ************************* CREATE TASK ******************
    it("create a Task", () => {
        cy.request({
            method: 'POST',
            url: baseURL+'/api/v2/tasks/',
            body: { "app": app_id, "summary": "tasktest", "delivery_date": null, "description": "testing world", "acceptance_criteria": "accept", "requires_approval": true, "shareable_status": "professional_services", "status": "todo", "assigned_to": null, "subtasks": [], "resource_cost_estimated": "2000", "hours_estimated": 0 },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            task_id = response.body.id
            cy.log('Task is created and Task ID is ', task_id)
        })
    })

    // ************************* ADD TASK INTO MILESTONE ****************** 
    it("add task into milestone", () => {
        cy.request({
            method: 'PATCH',
            url: baseURL+'/api/v2/apps/' + app_id + '/milestones/' + milestone_id + '/add-task/',
            body: { "task_ids": task_id },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            const task_added = response.body.msg
            cy.log('Task is added and message is ', task_added)
        })
    })

    // ************************* get TASK  ****************** 
    it("Get task", () => {
        cy.request({
            method: 'GET',
            url: baseURL+'/api/v2/tasks/' + task_id + '/',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            // const task_added = response.body
            cy.log('Task is added and message is ', response.body)
        })
    })

    // ************************* update TASK  ****************** 
    it("update task", () => {
        cy.request({
            method: 'PATCH',
            url: baseURL+'/api/v2/tasks/' + task_id + '/',
            body: { "resource_cost_estimated": "2000" },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            const task_added = response.body.resource_cost_estimated
            cy.log('Task is updated and message is ', task_added)

        })
    })


    // ************************* PUBLISH THE TASK ****************** 
    it("Publish the task", () => {
        cy.request({
            method: 'POST',
            url: baseURL+'/api/v2/apps/' + app_id + '/public/',
            body: { "app": app_id, "summary": "tasktest", "description": "", "resource_cost_estimated": 2000, "hours_estimated": 0, "acceptance_criteria": "", "requires_approval": true },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            const task_publish = response.body.message
            cy.log('Task is publish ', task_publish)
        })
    })




    // ************************* APPROVED PRICING ******************
    it("Finalize pricing", () => {
        cy.request({
            method: 'POST',
            url: baseURL+'/api/v2/apps/' + app_id + '/finalize-pricing/',
            headers: {
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            const pricing_finalized = response.body.message
            cy.log('Pricing is finalized', pricing_finalized)
        })
    })

    // ************************* ADD BILLING SCEDULE ******************
    it("add billing schedule", () => {
        cy.request({
            method: 'POST',
            url: baseURL+'/api/v1/apps/' + app_id + '/billing-schedule/',
            body: { "type": "50_50" },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            cy.log('Billing is schedule', response.body)
        })
    })

    // ************************* APPROVED PAYMENT ******************
    it("Approve payment", () => {
        cy.request({
            method: 'POST',
            url: baseURL+'/api/v2/apps/' + app_id + '/finalize-payments/',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log('Payment is finalized', response.body.message)
        })
    })

    // *************************  ADD QUOTE ******************

    // let work_statement = toString(payment_id)
    // let paymentproposals = [payment_id]
    it("add Quote", () => {
        cy.log('Payment milestone is added id is ', payment_id)
        cy.request({
            method: 'POST',
            url: baseURL+'/api/v2/apps/' + app_id + '/milestones/quotes/',
            body: { "project": app_id, "amount": "500.00", "work_statement": toString(payment_id), "title": "Purchase Block For 53225", "paymentproposals": [payment_id], "esignature": "sneh1", "payment_method": "ach" },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            quote_id = response.body.id
            cy.log('Quote is generated ', quote_id)
        })
    })

    // ************************* PAYMENT ACH ******************
    it("payment ach", () => {
        cy.request({
            method: 'POST',
            url: baseURL+'/api/v2/apps/' + app_id + '/milestones/quotes/' + quote_id + '/paymentproposal/charge/ach/',
            body: { "amount": "2000.00", "payment_proposals": [payment_id], "author_ip_address": null, "esignature": "sneh" },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(response.body)
        })
    })

    // ************************* Add connectors ******************
    it("add Connector", () => {
        cy.request({
            method: 'POST',
            url: baseURL+'/api/v2/apps/' + 116228 + '/connectors/',
            body: { "name": "New Connector j" + app_id, "description": "test", "tags": [], "website": "https://cbtcms.herokuapp.com/runs/5641/?status_id=5", "auth": { "public": {} }, "base_url": "https://cbtcms.herokuapp.com/runs/5641/?status_id=5", "openapi": { "openapi": "3.0.1", "info": { "version": "1.0.0", "title": "New Connector 232352", "description": "test" }, "servers": [{ "url": "https://cbtcms.herokuapp.com/runs/5641/?status_id=5" }], "paths": {}, "components": { "schemas": {}, "securitySchemes": {} } }, "public": false },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            cy.log(response.body)
        })
    })

    // ************************* Get Attribute id ******************
    it("update over view section", () => {
        cy.request({
            method: 'GET',
            url: baseURL+'/api/v2/apps/' + app_id + '/',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            attributes_id = response.body.attributes.id
            // cy.log(response.body)
        })
    })
    // ************************* Task Overview section ******************
    it("update over view section", () => {
        cy.request({
            method: 'PUT',
            url: baseURL+'/api/v2/apps/' + app_id + '/attributes/' + attributes_id + '/',
            body: { "id": app_id, "access_type": "Free", "build_stage": null, "connect_an_app": false, "connect_an_app_description": null, "design_required": null, "project_type": "both", "user_types": [] },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token ' + auth_key
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(response.body)
        })
    })
})


