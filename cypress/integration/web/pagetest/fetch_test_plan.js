const axios = require("axios");

const username = 'sneh@crowdbotics.com'; // Replace with your Kiwi TCMS username
const password = 'devstringx@123';
const apiUrl = 'http://cbtcms.herokuapp.com/json-rpc/';
const login = async () => {
  const body = {
    jsonrpc: "2.0",
    method: "Auth.login",
    id: "jsonrpc",
    params: [username, password],
  };
//  const port = 38332;
  try {
    const response = await axios.post(apiUrl, body, {
    });
    console.log(response.data);
  } catch (error) {
    console.log(error.response.data);
  }
};

queryValues = {
    'author_id': 14
}
values = {
  'product': 'CB',
  'product_id': 3,
  'product_version': 'V1',
  'name': 'Testplan foobar',
  'author_id': 14,
  'type': 'Acceptance',
  'parent': null,
  'text':'Testing TCMS'
}


const fetchTestPlans = async () => {
  const body = {
    jsonrpc: "2.0",
    method: "TestPlan.filter",
    id: "jsonrpc",
    params: [queryValues],
  };
  try {
    const response = await axios.post(apiUrl, body, {
        auth: {
            username: "sneh@crowdbotics.com",
            password: "devstringx@123",
        },
    });

    console.log(response.data);
  } catch (error) {
    console.log(error.response.data);
  }
};

const createTestPaln = async () => {
  const body = {
    jsonrpc: "2.0",
    method: "TestPlan.create",
    id: "jsonrpc",
    params: [values],
  };
  try {
    const response = await axios.post(apiUrl, body, {
      auth: {
        username: "sneh@crowdbotics.com",
        password: "devstringx@123",
    },
    });

    console.log(response.data);
  } catch (error) {
   console.log(error.response.data);
  }
};
createTestPaln();
//fetchTestPlans();

