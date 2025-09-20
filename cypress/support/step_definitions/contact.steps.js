const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");


When("Contact Us sayfasına gider ve formu gönderirim", () => {
  cy.contains(/contact us/i).click();
  cy.get('input[data-qa="name"]').type("Tuğçe");
  cy.get('input[data-qa="email"]').type("demo@example.com");
  cy.get('input[data-qa="subject"]').type("Smoke Test");
  cy.get('textarea[data-qa="message"]').type("Merhaba, bu bir Cypress smoke mesajıdır.");
  cy.get('input[data-qa="submit-button"]').click();
  cy.on("window:confirm", () => true);
});

Then("başarı mesajını görmeliyim", () => {
  cy.contains(/success|submitted/i, { timeout: 10000 }).should("be.visible");
});