/// <reference types = "cypress"/>
import { doCteareApp } from '../pages/DashboardPage.js';
import { doTeammemberLogin } from '../pages/loginPage.js';
import { doGetAllMemberList, doUpdateMemberjobTitle,doCancelInvitation, doInviteMember, doGetTeamMember, doGetTeamMemberUsingId } from '../pages/TeamMemberPageAdmin.js';

let member_id;
let request_id;
let app_id;
let app_name;
let authKey;
describe("Team Member Admin Page", () => {
    app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
    it('Invite Member Flow', () => {
        doTeammemberLogin().then((response) => {
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
                doInviteMember(authKey, app_id, 'shubham12@crowdbotics.com', selectRole).then((response) => {
                    expect(response.status).to.eq(200)
                    request_id = response.body.invitation.id;
                    member_id = response.body.invitation.member.id;
                    cy.log("create tags response", response.body)
                })
            })
        })
    })

    it('Cancel Invite Flow', () => {
        doCancelInvitation(authKey, app_id, request_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create userroles response", response.body)
        })
    })
    it('Get Team Member Flow', () => {
        doGetTeamMember(authKey, app_id).then((response) => {
            member_id = response.body[0].id;
            expect(response.status).to.eq(200)
            cy.log("create userroles response", response.body)
        })
    })

    it('Get Team Member Using Id Flow', () => {
        doGetTeamMemberUsingId(authKey, app_id, member_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("create userroles response", response.body)
        })
    })

    // Right now we are facing timeout issue on swagger
    // it('Change Team Member Job Title', () => {
    //     doUpdateMemberjobTitle(authKey, app_id, member_id,app_name).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.log("change team member job title", response.body)
    //     })
    // })

    it('get all member list', () => {
        doGetAllMemberList(authKey, app_id).then((response) => {
            expect(response.status).to.eq(200)
            cy.log("get all member list", response.body)
        })
    })
})
