import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: "wh22zo",
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  downloadsFolder: 'cypress/downloads',
  video: false,
  screenshotOnRunFailure: true,
  env: {
    CYPRESS_DISABLE_HARDWARE_ACCELERATION: 1
  },
  
  e2e: {
    baseUrl: "http://localhost:4200",
    supportFile: false,
    specPattern: 'cypress/integration/**/*.cy.js',
  }
})
