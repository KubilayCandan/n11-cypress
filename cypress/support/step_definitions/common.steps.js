const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("ana sayfayı açarım", () => {
  cy.visit("/");
});

When("çıkış yaparım", () => {
  cy.contains(/logout/i).click();
});

Then("tekrar Signup \\/ Login bağlantısını görmeliyim", () => {
  cy.contains(/signup\s*\/\s*login/i).should("be.visible");
});