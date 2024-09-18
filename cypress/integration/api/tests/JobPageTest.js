/// <reference types = "cypress"/>
import { doPutJobtype, doDeleteJobtypeByid,doGetCandidatesbyID,doGetCandidates, doAddJobRequest, doGetJobRequest, doGetJobRequestUsingId, doEditJobRequest, doDeleteJobRequest,doGetjobtype, doAddjobtype, doGetjobtypeById, doPatchjobtype, dogetJobtitles, doGetJobtitlesByID } from '../pages/JobPage.js';
import { doJobLogin } from '../pages/loginPage.js';
import { doCteareApp } from '../pages/DashboardPage.js';
let job_id;
let authKey;
let app_id;
let project_description;
let job_name;
let job_cost ;
let jobtype_id;
let candidates_id;
let jobtitles_id;
describe("Job Page", () => {
    const app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Add Job Request Flow', () => {
        doJobLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                // expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                localStorage.setItem('app_id', response.body.id);
                // const app_id = localStorage.getItem('app_id');
                doAddJobRequest(authKey, app_id).then((response) => {
                    job_id = response.body.id;
                    expect(response.status).to.eq(201)
                    cy.log("Add Job Request response", response.body)
                })
            })
        })
    })
    it('Get Job Request Flow', () => {

        doGetJobRequest(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Job Request response", response.body)
        })
    })

    it('Get Job Request Using ID Flow', () => {

        doGetJobRequestUsingId(authKey, app_id, job_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Job Request Using ID response", response.body)
        })
    })
    it('Edit Job Request Flow', () => {
        project_description = "TestDescription" + app_id;
        doEditJobRequest(authKey, app_id, job_id, project_description).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Edit Job Request response", response.body)
        })
    })
    it('Delete job Request Flow', () => {

        doDeleteJobRequest(authKey, app_id, job_id,job_cost).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Delete job Request response", response.body)
        })
    })

    it('Get Job Type  List Flow', () => {
        doGetjobtype(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Skill List response", response.body)
        })
    })

    it('Add Job Type Flow', () => {
        doAddjobtype(authKey, app_id).then((response) => {
            expect(response.status).to.eq(201)
            jobtype_id = response.body.id;
            cy.log("Add Job Type Status response", response.body)
        })
    })

    it('Get Job Type Using Id Flow', () => {
        doGetjobtypeById(authKey, jobtype_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Job Type Using Id response", response.body)
        })
    })

    it('Patch Job Type  Using Id Flow', () => {
        doPatchjobtype(authKey,job_name,job_cost,app_id,jobtype_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Patch Job Type response", response.body)
        })
    })

    it('Put Job type', () => {
        doPutJobtype(authKey,jobtype_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Put Code Components", response.body)
        })
    })

    it('Delete Job type Id Flow', () => {
        doDeleteJobtypeByid(authKey, jobtype_id).then((response) => {
            expect(response.status).to.eq(204)
            cy.log("Delete Catalog feature response", response.body)
        })
    })
    
    it('Get Candidates Flow', () => {
        doGetCandidates(authKey).then((response) => {
            expect(response.status).to.eq(200)
            candidates_id=response.body[0].id;
            cy.log("Get Candidate response", response.body)
        })
    })

    it('Get Candidates Byid', () => {
        doGetCandidatesbyID(authKey,candidates_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Candidate response", response.body)
        })
    })

    it('Get Job titles Flow', () => {
        dogetJobtitles(authKey).then((response) => {
            cy.log("Get Connectors response", response.body)
            jobtitles_id= response.body[0].id;
            expect(response.status).to.eq(200)
        })
    })

    it('Get Job titles Flow By ID', () => {
        doGetJobtitlesByID(authKey, jobtitles_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Get Job titles Id response", response.body)
        })
    })
    
})