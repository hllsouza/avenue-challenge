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
    it("must navigate to different pages", () => {
        cy.testUsability()
    });
  });
});
