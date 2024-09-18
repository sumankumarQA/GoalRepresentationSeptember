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
		console.log(response.data.result);
        response_session=response.data.result;
        console.log(response_session);
} catch (error) {
    console.log(error.response.data);
};
values = {
    'product': 3,
    'product_version': 3,
    'name': 'Edward Test Plan',
    'type': 5,
    'is_active': true,
    'parent': null,
    'text':'Edward new test plan',
}
const bodyy = {
    jsonrpc: "2.0",
    method: "TestPlan.create",
    id: "jsonrpc",
    params: [values],
  };
  const headers = {
    "Content-Type": "application/json",
    Cookie:  'sessionid='+response_session,
  };
  try {
    const response = await axios.post(
      `http://cbtcms.herokuapp.com/json-rpc/`,
      bodyy,
      { headers }
    );
    console.log(response.data);
    plan_id=response.data.result.id;
    console.log('Anish------',plan_id);
  } catch (error) {
    console.log(error.response.data);
  }
}; 
login();




