const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

// Signup/Login sayfasına gidilir
When("Signup - Login sayfasına giderim", () => {
  cy.get('a[href="/login"]').should("be.visible").click();
});

// Rastgele e-posta ile kayıt formu doldurulur ve gönderilir
When("rastgele e-posta ile kayıt formunu doldurup gönderirim", () => {
  cy.get('input[data-qa="signup-name"]').type("Test Kullanıcı");

  // Senin custom komutun (benzersiz e-posta üretir)
  cy.uniqueEmail("ae").then((mail) => {
    cy.get('input[data-qa="signup-email"]').type(mail);
  });

  cy.get('button[data-qa="signup-button"]').click();

  cy.contains("Enter Account Information", { timeout: 10000 }).should("be.visible");

  cy.get("#id_gender1").check({ force: true });
  cy.get("#password").type("P@ssw0rd!");
  cy.get("#days").select("10");
  cy.get("#months").select("May");
  cy.get("#years").select("1993");
  cy.get("#newsletter").check({ force: true });
  cy.get("#optin").check({ force: true });

  cy.get("#first_name").type("Test");
  cy.get("#last_name").type("User");
  cy.get("#company").type("Demo Co");
  cy.get("#address1").type("Demo Street 1");
  cy.get("#country").select("Canada");
  cy.get("#state").type("ON");
  cy.get("#city").type("Toronto");
  cy.get("#zipcode").type("M4B1B3");
  cy.get("#mobile_number").type("+14085551234");

  cy.get('button[data-qa="create-account"]').click();
});

// Kayıt sonrası giriş yapıldığını doğrular
Then("giriş yapmış olmalıyım", () => {
  cy.contains(/account created!/i, { timeout: 10000 }).should("be.visible");
  cy.get('a[data-qa="continue-button"]').click();
  cy.contains(/logged in as/i, { timeout: 10000 }).should("be.visible");
});

// Tekrar Signup - Login görünmeli
Then("tekrar Signup - Login bağlantısını görmeliyim", () => {
  cy.get('a[href="/login"]').should("be.visible");
});