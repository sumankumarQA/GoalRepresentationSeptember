const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 20000,
  env:
  {
    baseUrl: "https://crowdbotics-slack-dev.crowdbotics.com", 
    normallogin : '/api/v2/login/',   
    loginEndPoint: "/api/v2/totp-login/",
    createApp: "/api/v1/github-repos/",
    searchApp1: "/api/v2/apps/?custom_name=",
    searchApp2: "&page=1&limit=8",
    appTypeList: "/api/v1/app-types/",
    appTypeList1: "/api/v1/app-types/",
    appTypeList2: "3/",
    getNotification1: "/api/v2/apps/",
    getNotification2: "/",
    getOrganizationPRDList: "/api/v1/prd/",
    getOrganizationPRDById1: "/api/v1/prd/",
    getOrganizationPRDById2: "/",
    putOrganizationPRDById1: "/api/v1/prd/",
    putOrganizationPRDById2: "/",
    patchOrganizationPRDById1: "/api/v1/prd/",
    patchOrganizationPRDById2: "/",
    deleteOrganizationPRD1: "/api/v1/prd/",
    deleteOrganizationPRD2: "/",



  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/api/tests/*.js'
    //specPattern: 'cypress/integration/pagetest/add_test_case.js'
  }
});