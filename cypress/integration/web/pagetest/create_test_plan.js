const axios = require("axios");

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

  values = {
    'product': 3,
    'product_version': 3,
    'name': 'Cypress Test Plan',
    'type': 5,
    'parent': null,
    'is_active':true,
    'text':'Cypress new test plan',
}

const createTestPlan = async () => {
  const loginResponse = await login();
  const body = {
    jsonrpc: "2.0",
    method: "TestPlan.create",
    id: "jsonrpc",
    params: [values],
  };
  const headers = {
    "Content-Type": "application/json",
    Cookie: 'sessionid='+loginResponse,
  };
  try {
    const response = await axios.post(
      `http://cbtcms.herokuapp.com/json-rpc/`,
      body,
      { headers }
    );
    console.log(response.data);
  } catch (error) {
    console.log(error.response.data);
  }
};
createTestPlan();