const cypress = require('cypress');
const tesults = require('cypress-tesults-reporter');
const path = require('path');

const cypressConfigPath = path.join(__dirname, 'api');

require('dotenv').config();
const tokenTesults = process.env.TESULTS_TOKEN;

// Run Cypress tests and generate results
cypress.
c
run({
  
 
// specs to run here
})
.
then((results) => {
  
 
// Prepare the Tesults configuration
  const tesultsConfig = {
    target: tokenTesults,
    config: cypressConfigPath
    // Other Tesults configuration options if needed
  };

  // Pass the Tesults configuration and results to the reporter
  tesults.
  tesults
results(results, tesultsConfig);
})
.catch((err) => {
  console.error(err);
});
