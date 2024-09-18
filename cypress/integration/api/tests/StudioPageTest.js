/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doStudioLogin } from '../pages/loginPage.js';
import { doGetStudiopage, getStudioScreen, doGetStudioScreenEdge, doPostCreateStudioScreen, doPostCLIFeedback } from '../pages/StudioPage.js';


let app_id;
let app_name;
let authKey;
let screen_id;


describe("Studio lnading page", () => {
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Studio Page flow', () => {
        doStudioLogin().then((response) => {
            authKey = response.body.key;
            doCteareApp(authKey, app_name).then((response) => {
                cy.log("login response", response.body)
                expect(response.body.name, "App name is not matching").to.eq(app_name)
                app_id = response.body.id;
                app_name = response.body.name;
                localStorage.setItem('app_id', response.body.id);
                // const app_id = localStorage.getItem('app_id');
                const roles = ["Member", "Sales", "Collaborator", "Admin", "Finance"];
                const selectRole = roles[Math.floor(Math.random() * roles.length)];
                getStudioScreen(authKey, app_id).then((response) => {
                    expect(response.status).to.eq(200)
                    cy.log("studio landing page", response.body)
                })
            })
        })
    })
    it('Get Studio screen edge', () => {
        doGetStudioScreenEdge(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Studio screen edge", response.body)
        })
    })

    // it('Post create screen on canvas', () => {

    //     cy.fixture('api_createStudio_Screen.json').then((data) => {
    //         const fixture_Screen_Id = data.screens[0].screen_id;
    //         const incrementedId = fixture_Screen_Id.slice(0, -1) + (parseInt(fixture_Screen_Id.slice(-1)) + 1);
    //         screen_id = incrementedId;
    //         doPostCreateStudioScreen(authKey, app_id, screen_id).then((response) => {
    //             expect(response.status).to.eq(201);
    //             cy.log("Create screen on canvas", response.body);
    //         });

    //     })
    // })


    it('Navigate into the studio landing page Flow', () => {

        doGetStudiopage(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Navigate into the studio landing page  response", response.body)
        })
    })

    it('Post CLI Feedback', () => {
        doPostCLIFeedback(authKey).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("Post CLI Feedback ", response.body)

        })
    })

});
