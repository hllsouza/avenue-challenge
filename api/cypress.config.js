require('dotenv').config() 

module.exports = {
  projectId: "ys1uyn",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },    
    baseUrl: 'https://api.openweathermap.org/data/2.5',
    env: {
      appId: process.env.APP_ID
    }
  },
};
