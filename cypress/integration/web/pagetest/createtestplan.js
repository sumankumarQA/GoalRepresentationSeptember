import axios from 'axios';

describe('Create Test Plan in Kiwi TCMS', () => {
  it('should create a test plan', () => {
    const apiUrl = 'http://cbtcms.herokuapp.com/json-rpc/';
    const username = 'anish.kumar@crowdbotics.com'; 
    const password = 'bcHV3w94wUJ7GsU'; 

    const testPlanData = {
      name: 'Anish Test Plan',
      description: 'This is a test plan created using Cypress and Axios.',
      product: 3,
      product_version: 3
    };

   
    cy.wrap(
      axios.post(apiUrl, testPlanData, {
        auth: {
          username,
          password,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).then((response) => {
      expect(response.status).to.equal(201); 
      cy.log('Test Plan created:', response.data);
    });
  });
});
