const axios = require("axios");
let testRunId;
let  response_data;
const login = async () => {  
	const body = {
    jsonrpc: "2.0",
    method: "Auth.login",
    id: "jsonrpc",
    params: ['cbsneh', 'dssneh@123'],
    };
try {
    const response = await axios.post(`http://cbtcms.herokuapp.com/json-rpc/`, body, {});
		console.log(response.data); 
    response_data=response.data.result; 
} catch (error) {
    console.log(error.response.data);
  }
  return response_data;
};

const createTestRun = async () => {
    const loginResponse = await login();

    const testRunData = {
        'plan': 8,
        'name': 'My Test Run',
        'build': 3,
        'manager': 'cbsneh',
        'summary': "This is run created by cypress automation"
    };

    const bodyCreateTestRun = {
        jsonrpc: "2.0",
        method: "TestRun.create",
        id: "jsonrpc",
        params: [testRunData],
    };

    const headers = {
        "Content-Type": "application/json",
        Cookie: 'sessionid=' + loginResponse,
    };

    try {
       
        const responseCreateTestRun = await axios.post(
            `http://cbtcms.herokuapp.com/json-rpc/`,
            bodyCreateTestRun,
            { headers }
        );
        testRunId = responseCreateTestRun.data.result.id;
    } catch (error) {
        console.error('Error:', error.response.data);
    }
        
        // return testRunId;
}
const addTestCasesToTestRun = async (testcaseIDs) => {
    const loginResponse = await login();
    const createTestRunResponse = await createTestRun();

    const bodyAddTestCases = {
        jsonrpc: "2.0",
        method: "TestRun.add_case",
        id: "jsonrpc",
        params: [testRunIds, testcaseIDs],
    };

    const headers = {
        "Content-Type": "application/json",
        Cookie: 'sessionid=' + loginResponse,
    };

    try {
        const responseAddTestCases = await axios.post(
            `http://cbtcms.herokuapp.com/json-rpc/`,
            bodyAddTestCases,
            { headers }
        );

        // Handle the response here if needed
        console.log('Test cases added to the test run:', responseAddTestCases.data);
    } catch (error) {
        console.error('Error:', error.response.data);
    }
};

const testcaseIDs = [408, 409, 410]; // Array of test case IDs to add

addTestCasesToTestRun(982);

