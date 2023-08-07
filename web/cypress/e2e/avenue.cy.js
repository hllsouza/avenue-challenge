describe("avenue", () => {
  beforeEach(() => {
    cy.viewport(1200, 800);
    cy.visit(Cypress.env("avenueUrl") + "/");
  });

  context("internationalization test", () => {
    it("must check translation of menu elements", () => {
        cy.testInternationalization()
    });
  });

  context("usability test", () => {
    it("validate navigate create account", () => {
        cy.testUsability('#header_create_account', 'Abra sua conta', '/register/invitation?utm_source=header_create_account')
    });

    it("validate navigate login account", () => {
        cy.testUsability('#header_account_login', 'Acessar a conta', '/login')
    });
  });
});
