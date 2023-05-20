const { defineConfig } = require('cypress')

module.exports = defineConfig({
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  downloadsFolder: 'cypress/downloads',
  e2e: {
    baseUrl: "http://127.0.0.1:4200",
    supportFile: false,
    specPattern: 'cypress/integration/**/*.cy.js'
  },
})
