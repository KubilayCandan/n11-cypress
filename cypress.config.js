const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com",  // kendi sitene göre ayarladın
    specPattern: "**/*.feature",
    supportFile: "cypress/support/e2e.js",
    video: true,                   // 🎥 video kaydını aç
    videosFolder: "cypress/videos", // kayıtların klasörü
    videoCompression: 32,          // 0 = sıkıştırma yok, kalite yüksek, dosya büyük
    videoUploadOnPasses: true,     // passed olsa da videoyu sakla
    screenshotOnRunFailure: true,  // hata olursa screenshot al
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({ plugins: [createEsbuildPlugin(config)] })
      );
      return config;
    },
    
  },

});