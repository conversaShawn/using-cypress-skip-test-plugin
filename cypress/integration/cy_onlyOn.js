// type definitions for Cypress object "cy"
/// <reference types="cypress" />
/// <reference types="@cypress/skip-test" />

// This spec imports a custom onlyOn command from your support file cypress/support/index.js (https://github.com/cypress-io/cypress-skip-test#example)

const path = "https://example.cypress.io/";

describe("checks cy.onlyOn for sync skip; aborting execution error", () => {
  before(() => {
    cy.visit(path);
  });

  it("should pass on mac, but still errors on windows", () => {
    cy.onlyOn('mac');
  });
  it("should pass on windows, but still errors on mac", () => {
    cy.onlyOn('windows');
  });
  it("should pass on mac w/ get.('#navbar') but still errors on windows", () => {
    cy.onlyOn('mac');
    cy.get('#navbar')
  });
  it("should pass on windows w/ get.('#navbar') with no error but still errors on mac", () => {
    cy.onlyOn('windows');
    cy.get('#navbar')
  });
  it("should fail on mac w/ get.('header'), but still errors on windows", () => {
    cy.onlyOn('mac');
    cy.get('header')
  });
  it("should fail on windows w/ get.('header'), but still errors on mac", () => {
    cy.onlyOn('windows');
    cy.get('header')
  });
});