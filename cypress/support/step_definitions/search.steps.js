const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When('{string} için arama yaparım', (q) => {
  cy.get("#search_product").should("be.visible").clear().type(q);
  cy.get("#submit_search").click();
});

Then("arama sonuç başlığını görmeliyim", () => {
  cy.contains(/searched products/i, { timeout: 10000 }).should("be.visible");
});

Then("en az bir ürün listelenmiş olmalı", () => {
  cy.get(".product-image-wrapper").its("length").should("be.greaterThan", 0);
});