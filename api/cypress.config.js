const { defineConfig } = require("cypress");

require('dotenv').config() 

module.exports = defineConfig({
  projectId: "ys1uyn",
  supportFile: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: 'cypress/support/e2e.js',      
    specPattern: '**/e2e/**/*.cy.js',
    baseUrl: 'https://api.openweathermap.org/data/2.5',
    env: {
      appId: process.env.APP_ID
    }
  },

  component: {
    supportFile: 'cypress/support/component.js', // Path to component support file
    specPattern: '**/component/**/*.cy.js',      // Updated component spec pattern for .cy.js files
  },
});
