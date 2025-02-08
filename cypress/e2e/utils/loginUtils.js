import loginLocators from "../locators/loginLocators.json";  

export function hosLoginUtils() {
  cy.visit("/", { timeout: 30000 }); 

  cy.fixture("UsersCredential.json").then((data) => {
    cy.xpath(loginLocators.username) 
      .should("be.visible")
      .type(data.hosCredential.username);

    cy.xpath(loginLocators.password) 
      .should("be.visible")
      .type(data.hosCredential.password);

    cy.xpath(loginLocators.submit) 
      .should("be.visible")
      .should("not.be.disabled")
      .click();

    cy.url().should("include", "/dashboard", { timeout: 30000 }); 
  });
}

