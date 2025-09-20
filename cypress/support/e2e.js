/// <reference types="cypress" />

// Benzersiz e-posta (kayıt için)
Cypress.Commands.add("uniqueEmail", (prefix = "user") => {
  return cy.wrap(`${prefix}+${Date.now()}@example.com`);
});

// Çoklu seçiciden ilk bulunan input’a yaz
Cypress.Commands.add("typeIntoFirst", (selectors, text) => {
  let typed = false;
  selectors.forEach((sel) => {
    if (typed) return;
    cy.get("body").then(($b) => {
      if ($b.find(sel).length) {
        cy.get(sel).first().clear().type(text);
        typed = true;
      }
    });
  }).then(() => {
    if (!typed) throw new Error(`typeIntoFirst: hiçbir seçici bulunamadı: ${selectors.join(", ")}`);
  });
});

// Üçüncü parti script hataları testleri kırmasın (opsiyonel)
Cypress.on("uncaught:exception", () => false);

// Fail olursa GUI’de de ekran görüntüsü al
afterEach(function () {
  if (this.currentTest?.state === "failed") {
    const name = `${Cypress.mocha.getRunner().suite?.title || "spec"}/${this.currentTest.title} -- failed`;
    cy.screenshot(name, { capture: "runner" });
  }
});