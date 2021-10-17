// type definitions for Cypress object "cy"
/// <reference types="cypress" />
/// <reference types="@cypress/skip-test" />

// This spec imports a custom skipOn command from your support file cypress/support/index.js (https://github.com/cypress-io/cypress-skip-test#example)

const path = "https://example.cypress.io/";


describe("checks for sync skip; aborting execution error", () => {
  before(() => {
    cy.visit(path);
  });

  it("should skip, but still errors when true", () => {
    cy.skipOn(path.includes("cypress"));
  });
  it("should pass when false", () => {
    cy.skipOn(path.includes("hello"));
  });
  it("should skip, even w/ cy.get('#navbar'), but still errors when true", () => {
    cy.skipOn(path.includes("cypress"));
    cy.get('#navbar')
  });
  it("should pass, w/ cy.get('#navbar')", () => {
    cy.skipOn(path.includes("hello"));
    cy.get('#navbar')
  });
  it("should skip, w/ cy.get('does_not_exist'), but still errors when true", () => {
    cy.skipOn(path.includes("cypress"));
    cy.get('header')
  });
  it("should fail, w/ cy.get('does_not_exist')", () => {
    cy.skipOn(path.includes("hello"));
    cy.get('header')
  });
});