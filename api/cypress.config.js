const { defineConfig } = require("cypress");

require('dotenv').config() 

module.exports = defineConfig({
  projectId: "ys1uyn",
  supportFile: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: 'api/cypress/support/e2e.js',      
    specPattern: 'api/cypress/e2e/*.cy.js',
    baseUrl: 'https://api.openweathermap.org/data/2.5',
    env: {
      appId: process.env.APP_ID
    }
  },
});
