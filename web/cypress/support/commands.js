// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('accessNewAccount', () => {
    cy.get('#nav-link-accountList').should('be.visible')
    cy.get('#nav-link-accountList').click()
    cy.get('#createAccountSubmit').should('be.visible')
    cy.get('#createAccountSubmit').click()
})

Cypress.Commands.add('fillForm', (name, email, password, confirmPassword) => {
    cy.get('#ap_customer_name').type(name)
    cy.get('#ap_email').type(email)
    cy.get('#ap_password').type(password)
    cy.get('#ap_password_check').type(confirmPassword)
  });
  
Cypress.Commands.add('clickButtonRegister', () => {
    cy.get('#continue').click();
});

Cypress.Commands.add('verifiedErrorMessage', (seletor, message) => {
    cy.get(seletor).should('be.visible').and('contain', message);
});

Cypress.Commands.add('addProductsToCart', () => {
    cy.get("#twotabsearchtextbox").type("laptop{enter}");
    cy.get('span[data-version-id=v1wrz2ec84pu5g2uupkzlhtcvw8]').first().click();
  
    cy.get('#corePrice_feature_div .a-price .a-offscreen').invoke('text').then(price => {
      const productPrice1 = parseFloat(price.replace('R$', '').replace(/\D/g, '').replace(',', '.').trim());
      cy.log(`Product Price 1: ${productPrice1}`);
      cy.get('#add-to-cart-button').click();
      //cy.get('#attachSiNoCoverage').click();
      cy.get(".a-size-medium-plus.a-text-bold").should("contain", "Adicionado ao carrinho");
    });
  
    cy.visit('https://www.amazon.com.br/');
    cy.get("#twotabsearchtextbox").type("smartphone{enter}");
    cy.get('span[data-version-id=v1wrz2ec84pu5g2uupkzlhtcvw8]').first().click();
  
    cy.get('#corePrice_feature_div .a-price .a-offscreen').invoke('text').then(price => {
      const productPrice2 = parseFloat(price.replace('R$', '').replace(/\D/g, '').replace(',', '.').trim());
      cy.log(`Product Price 2: ${productPrice2}`);
      cy.get('#add-to-cart-button').click();
      cy.get('#attachSiNoCoverage').click();
      cy.get(".a-size-medium-plus.a-text-bold").should("contain", "Adicionado ao carrinho");
    });
  
    cy.get("#nav-cart-count").click();
});

Cypress.Commands.add('validateTotalPrice', () => {
    cy.get('.sc-product-price').then(prices => {
        let totalPrice = 0;
  
        const productPriceElements = Array.from(prices);
        productPriceElements.forEach(el => {
          const productPrice = parseFloat(el.innerText.replace('R$', '').replace(/\D/g, '').replace(',', '.').trim());
          totalPrice += productPrice;
        });
  
        const formattedTotalPrice = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }).format(totalPrice / 100);
  
        cy.log(`Total Price: ${formattedTotalPrice}`);
        cy.get("#sc-subtotal-amount-activecart").should("contain", formattedTotalPrice);
    });
})

Cypress.Commands.add('testInternationalization', () => {
    cy.get("#header_relationship").contains("Atendimento").should("exist");
    cy.get("#header_relationship").contains("Service").should("not.exist");

    cy.get("#header_relationship").contains("Servicio").should("not.exist");
    cy.get("#header_relationship").contains("Servizio").should("not.exist");
});

Cypress.Commands.add('testUsability', () => {
    cy.get("#header_banking").contains("Banking").click();
    cy.url().should("include", "/banking");

    cy.get('#header_relationship').contains("Atendimento").click();
    cy.url().should("include", "/atendimento")
});