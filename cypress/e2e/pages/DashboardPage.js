import dashboardLocators from "../locators/dashboardLocators.json"; 

class DashboardPage {
  clickDashboardIcon() {
    cy.visit("/", { timeout: 60000 });
    cy.xpath(dashboardLocators.dashboardIcon)
      .should("be.visible")
      .should("not.be.disabled")
      .click({ force: true }); // 
  }
}

export default new DashboardPage(); // 


