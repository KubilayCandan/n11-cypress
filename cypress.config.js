const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || "https://automationexercise.com",
    specPattern: "**/*.feature",
    supportFile: "cypress/support/e2e.js",

    // 📌 Video ve Screenshot ayarları
    video: true,
    videosFolder: "cypress/videos",
    videoCompression: 32,
    videoUploadOnPasses: true,
    screenshotOnRunFailure: true,

    async setupNodeEvents(on, config) {
      // Cucumber preprocessor
      await addCucumberPreprocessorPlugin(on, config);

      // Esbuild bundler
      on(
        "file:preprocessor",
        createBundler({ plugins: [createEsbuildPlugin(config)] })
      );

      // Mochawesome plugin
      require("cypress-mochawesome-reporter/plugin")(on);

      return config;
    },
  },

  // 📌 Multi reporter: hem JUnit hem Mochawesome
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome, mocha-junit-reporter",

    // Mochawesome ayarları
    mochawesomeReporterOptions: {
      reportDir: "cypress/results/mochawesome",
      overwrite: false,
      html: true,
      json: true,
    },

    // JUnit ayarları
    mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/results/junit/results-[hash].xml",
      toConsole: true,
    },
  },
});