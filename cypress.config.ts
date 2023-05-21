import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: "wh22zo",
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  downloadsFolder: 'cypress/downloads',
  video: false,
  screenshotOnRunFailure: true,
  e2e: {
    baseUrl: "http://127.0.0.1:4200",
    supportFile: false,
    specPattern: 'cypress/integration/**/*.cy.js'
  },
})
