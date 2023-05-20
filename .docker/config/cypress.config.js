const { defineConfig } = require('cypress')

module.exports = defineConfig({
  videosFolder: 'videos',
  screenshotsFolder: 'screenshots',
  downloadsFolder: 'downloads',
  e2e: {
    baseUrl: "http://app:4200",
    supportFile: false,
    specPattern: 'integration/**/*.cy.js'
  },
})
