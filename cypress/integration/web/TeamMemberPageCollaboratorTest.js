// /// <reference types = "cypress"/>
// import { doCteareApp } from '../pages/DashboardPage.js';
// import { doLogin } from '../pages/loginPage.js';
// import { doAddTeamMemberCol, doGetTeamMemberCol, doGetAddTeamMemberCol, changeTeamMemberRoleCol } from '../pages/TeamMemberPageAdmin.js';

// let member_id;
// describe("Team Member Collaborator Page", () => {
//     app_name = 'TestAPIAutoSettings' + (Math.random() + 1).toString(36).substring(7);
//     it('Add Team Memeber Collaborator Flow', () => {
//         doLogin().then((response) => {
//             authKey = response.body.key;
//             doCteareApp(authKey, app_name).then((response) => {
//                 cy.log("login response", response.body)
//                 expect(response.body.name, "App name is not matching").to.eq(app_name)
//                 app_id = response.body.id;
//                 app_name = response.body.name;
//                 localStorage.setItem('app_id', response.body.id);
//                 doAddTeamMemberCol(authKey, app_id, 'Collaborator').then((response) => {
//                     expect(response.status).to.eq(200)
//                     cy.log("create tags response", response.body)
//                 })
//             })
//         })
//     })
//     it('Get Team Member Collaborator Flow', () => {
//         doGetTeamMemberCol(authKey, app_id).then((response) => {
//             member_id = response.body.result.id;
//             expect(response.status).to.eq(200)
//             cy.log("create userroles response", response.body)
//         })
//     })

//     it('Get Team Member Using Id Flow', () => {
//         doGetTeamMemberUsingId(authKey, app_id, member_id).then((response) => {
//             expect(response.status).to.eq(200)
//             cy.log("create userroles response", response.body)
//         })
//     })
// })
