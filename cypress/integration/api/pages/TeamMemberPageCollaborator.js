/// <reference types = "cypress"/>

export const doAddTeamMemberCol = (auth_key, app_id, role) => {
    cy.readFile('api_addTeamMember.json').then((data) => {
        data.role = role
        cy.writeFile('api_addTeamMember.json', JSON.stringify(data));
    });
    return cy.fixture('api_addTeamMember.json').then((myFixture) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('baseUrl') + Cypress.env('inviteTeamMember1') + app_id + Cypress.env('inviteTeamMember2'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doGetTeamMemberCol = (auth_key, app_id) => {

    return cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + Cypress.env('getMember1') + app_id + Cypress.env('getMember2'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};
export const doGetAddTeamMemberCol = (auth_key, invitation_link) => {

    return cy.request({
        method: 'GET',
        url: invitation_link,
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const changeTeamMemberRoleCol = (auth_key, app_id, member_id, role_id) => {
    cy.readFile('api_changeTeamMemberRole.json').then((data) => {
        data.role = role_id
        cy.writeFile('api_changeTeamMemberRole.json', JSON.stringify(data));
    });
    return cy.fixture('api_changeTeamMemberRole.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('changeTeamMemberRole1') + app_id + Cypress.env('changeTeamMemberRole2') + member_id + Cypress.env('changeTeamMemberRole3'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const changeMemberROleDescriptionCol = (auth_key, app_id, member_id) => {

    return cy.fixture('api_memberRoleDescription.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('changeTeamMemberRole1') + app_id + Cypress.env('changeTeamMemberRole2') + member_id + Cypress.env('changeTeamMemberRole3'),
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};
export const doResendInviteCol = (auth_key, app_id, member_id) => {

    return cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl') + Cypress.env('resendInvite1') + app_id + Cypress.env('resendInvite2') + member_id + Cypress.env('cresendInvite3'),
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};

export const doEditMemberDescription = (auth_key, app_id, member_id, description) => {
    cy.readFile('api_teamMemberDescription.json').then((data) => {
        data.description = description
        cy.writeFile('api_teamMemberDescription.json', JSON.stringify(data));
    });
    return cy.fixture('api_teamMemberDescription.json').then((myFixture) => {
        cy.request({
            method: 'PATCH',
            url: Cypress.env('baseUrl') + Cypress.env('editMemberDescription1') + app_id + Cypress.env('editMemberDescription2') + member_id,
            headers: {
                'Authorization': 'Token ' + auth_key
            },
            body: myFixture
        }).then((response) => {
            return response;
        })
    })
};

export const doDeleteMemberCol = (auth_key, app_id, member_id) => {

    return cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUrl') + Cypress.env('editMemberDescription1') + app_id + Cypress.env('editMemberDescription2') + member_id,
        headers: {
            'Authorization': 'Token ' + auth_key
        }
    }).then((response) => {
        return response;
    })
};