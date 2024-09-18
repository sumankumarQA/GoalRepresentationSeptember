

const kiwiApi = require('C:/Users/ABD/crowdbotics/cypress/integration/pagetest/kiwi-tcms.js'); // Adjust the path
const dummy="anish";
describe('Example Test', () => {
  it('should perform a test and update Kiwi TCMS', () => {
    // Perform your Cypress test steps here

    // After the test, update the Kiwi TCMS test case result
    kiwiApi.post('testruns/1002/create/').then((response) => {
      // Handle the response, e.g., update the test case result status
      const testCaseId = response.data.id;
      const resultStatus = 'PASSED'; // or 'FAILED', 'BLOCKED', etc.
      
      kiwiApi.patch(`testcases/${testCaseId}/`, { status: resultStatus })
        .then((resultResponse) => {
          if (resultResponse.status === 200) {
            console.log('Test case result updated successfully');
          } else {
            console.error('Failed to update test case result');
            console.error('Response:', resultResponse.status, resultResponse.data);
          }
        })
        .catch((error) => {
          console.error('An error occurred while updating test case result:', error.message);
        });
    });
  });
});
