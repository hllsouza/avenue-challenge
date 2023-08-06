const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');
const path = require('path');

const cypressConfigPath = path.resolve(__dirname, './api');

require('dotenv').config()
const tokenTesults = process.env.TESULTS_TOKEN

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: tokenTesults,
    config: cypressConfigFolder
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
