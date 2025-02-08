const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://115.186.185.190:6092/",
    specPattern: "cypress/e2e/test/**/*.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
      
    },
    fixturesFolder: 'cypress/e2e/fixtures',
    tsc: 'cypress/support/commands.ts',
    defaultCommandTimeout: 10000,
    defaultTimeout: 20000,
    
    video: false,
    videosFolder: 'cypress/e2e/videos',
    screenshotsFolder: 'cypress/e2e/screenshots',
    pageLoadTimeout:30000 ,
    screenshots: true,
    
    viewportWidth: 1920,
    viewportHeight: 1080,

    screenshotOnRunFailure: true,
    videoUploadOnPasses: true, // Only save videos on failure
    
    reporter: 'mocha-allure-reporter',
    reporterOptions: {
      targetDir: 'allure-results',
      "viewportWidth":1280
    }

  },
  
});
