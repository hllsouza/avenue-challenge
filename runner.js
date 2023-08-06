const { exec } = require('child_process');
const tesults = require('cypress-tesults-reporter');
const path = require('path');
const fs = require('fs');

const cypressConfigPath = path.join(__dirname, 'api');

require('dotenv').config();
const tokenTesults = process.env.TESULTS_TOKEN;

// Define a temporary file to store Cypress test results
const tempResultsPath = path.join(__dirname, 'temp-cypress-results.json');

// Run Cypress tests using the command-line interface and save results to a file
exec(`npx cypress run --project ${cypressConfigPath} --json > ${tempResultsPath}`, (error, stdout, stderr) => {
  if (error) {
    console.error('Error running Cypress tests:', error);
    return;
  }

  // Read the saved Cypress test results from the temporary file
  fs.readFile(tempResultsPath, 'utf8', (readError, resultsJson) => {
    if (readError) {
      console.error('Error reading Cypress results:', readError);
      return;
    }

    try {
      const results = JSON.parse(resultsJson);

      // Prepare the Tesults configuration
      const tesultsConfig = {
        target: tokenTesults,
        // Other Tesults configuration options if needed
      };

      // Pass the Tesults configuration and results to the reporter
      tesults.results(results, tesultsConfig);
    } catch (parseError) {
      console.error('Error parsing Cypress results:', parseError);
    } finally {
      // Clean up the temporary results file
      fs.unlinkSync(tempResultsPath);
    }
  });
});