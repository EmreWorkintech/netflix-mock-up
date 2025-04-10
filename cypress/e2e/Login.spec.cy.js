/* eslint-disable no-undef */
describe("template spec", () => {
  it("opens web app", () => {
    cy.visit("http://localhost:5173/");
  });
  it("opens login page", () => {
    ///arrange
    cy.visit("http://localhost:5173/");

    //act
    cy.contains("Login").click();

    //assert
    cy.contains("Sign In").should("be.visible");
  });
  it("opens login page and button is disabled", () => {
    ///arrange
    cy.visit("http://localhost:5173/");

    //act
    cy.contains("Login").click();

    //assert
    cy.get("[data-cy='submit-button']").should("be.disabled");
  });
  it("opens login page and button is enabled on valid inputs", () => {
    ///arrange
    cy.visit("http://localhost:5173/");

    //act
    cy.contains("Login").click();
    cy.get("[data-cy='email-input']").type("emre@wit.com");
    cy.get("[data-cy='pass-input']").type("123456");

    //assert
    cy.get("[data-cy='submit-button']").should("be.enabled");
  });
  it("submits the login form", () => {
    ///arrange
    cy.visit("http://localhost:5173/");

    //act
    cy.contains("Login").click();
    cy.get("[data-cy='email-input']").type("emre@wit.com");
    cy.get("[data-cy='pass-input']").type("123456");
    cy.get("[data-cy='submit-button']").click();

    //assert
    cy.url().should("match", /welcome/);
  });
});
