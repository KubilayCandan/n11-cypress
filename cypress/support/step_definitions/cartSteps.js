import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("ürünü sepete ekledim", () => {
  cy.get(".add-to-cart").first().click();
});

Then("ürün sepetimde görünmeli", () => {
  cy.get(".btn.btn-success.close-modal.btn-block").click();
  cy.wait(2000);
  //cy.get(".shopping_cart", { timeout: 10000 }).should("be.visible");
  cy.get('a[href="/view_cart"]').should("be.visible");
});

Then("tekrar Signup \\/ Login bağlantısını görmeliyim", () => {
  cy.contains(/signup\s*\/\s*login/i).should("be.visible");
});