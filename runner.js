const cypress = require('cypress');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const tesults = require('cypress-tesults-reporter');

const cypressConfigPath = path.join(__dirname, 'api');

require('dotenv').config();
const tokenTesults = process.env.TESULTS_TOKEN;

// Run Cypress tests and generate results
cypress.run({
  // specs to run here
})
.then((results) => {
  // Prepare the Tesults configuration
  const tesultsConfig = {
    target: tokenTesults,
    config: cypressConfigPath
    // Other Tesults configuration options if needed
  };

  // Write the Tesults configuration to a temporary file
  const tempConfigPath = path.join(__dirname, 'temp-tesults-config.json');
  const writeFileAsync = promisify(fs.writeFile);
  return writeFileAsync(tempConfigPath, JSON.stringify(tesultsConfig))
    .then(() => {
      // Pass the temporary Tesults configuration file to the reporter
      return tesults.results(results, { configFile: tempConfigPath });
    })
    .finally(() => {
      // Clean up the temporary file
      fs.unlinkSync(tempConfigPath);
    });
})
.catch((err) => {
  console.error(err);
});
