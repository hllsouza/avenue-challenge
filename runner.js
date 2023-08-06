const { exec } = require('child_process');
const tesults = require('cypress-tesults-reporter');
const path = require('path');

const cypressConfigPath = path.join(__dirname, 'api');

require('dotenv').config();
const tokenTesults = process.env.TESULTS_TOKEN;

// Run Cypress tests using the command-line interface
exec(`npx cypress run --project ${cypressConfigPath}`, (error, stdout, stderr) => {
  if (error) {
    console.error('Error running Cypress tests:', error);
    return;
  }

  try {
    const results = JSON.parse(stdout);

    // Prepare the Tesults configuration
    const tesultsConfig = {
      target: tokenTesults,
      // Other Tesults configuration options if needed
    };

    // Pass the Tesults configuration and results to the reporter
    tesults.results(results, tesultsConfig);
  } catch (parseError) {
    console.error('Error parsing Cypress results:', parseError);
  }
});