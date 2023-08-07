describe("amazon", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  context("signup", () => {
    it("must allow registration with valid information", () => {
      cy.accessNewAccount();
      cy.fillForm(
        "John Doe",
        "johndoe@example.com",
        "StrongPassword123",
        "StrongPassword123"
      );
    });

    it("should display error messages for empty required fields", () => {
      cy.accessNewAccount();
      cy.clickButtonRegister();
      cy.verifiedErrorMessage(
        "#auth-customerName-missing-alert",
        "Insira seu nome"
      );
      cy.verifiedErrorMessage(
        "#auth-email-missing-alert",
        "Digite seu e-mail ou número de telefone celular"
      );
      cy.verifiedErrorMessage(
        "#auth-password-missing-alert",
        "Mínimo de 6 caracteres necessários"
      );
    });

    it("should display error message for weak password", () => {
      cy.accessNewAccount();
      cy.fillForm("John Doe", "johndoe@example.com", "weak", "weak");
      cy.clickButtonRegister();
      cy.verifiedErrorMessage(
        ".a-alert-content",
        "Mínimo de 6 caracteres necessários"
      );
    });

    it("should display error message for mismatched passwords", () => {
      cy.accessNewAccount();
      cy.fillForm(
        "John Doe",
        "johndoe@example.com",
        "StrongPassword123",
        "DifferentPassword456"
      );
      cy.clickButtonRegister();
      cy.verifiedErrorMessage(".a-alert-content", "As senhas não são iguais");
    });
  });

  context("cart", () => {
    it("must add products to cart and check the total amount", () => {
      cy.addProductsToCart();
      cy.validateTotalPrice(); 
    });
  });
});
