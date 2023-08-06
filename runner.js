const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const cypressConfigPath = path.resolve(__dirname, './api');

require('dotenv').config()
const tokenTesults = process.env.TESULTS_TOKEN

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: tokenTesults,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})