// type definitions for Cypress object "cy"
/// <reference types="cypress" />
/// <reference types="@cypress/skip-test" />

// This spec imports onlyOn (https://github.com/cypress-io/cypress-skip-test/blob/master/README.md#imports-with-callback)

import { onlyOn } from "@cypress/skip-test";

const path = "https://example.cypress.io/";

describe("checks onlyOn import for sync skip; aborting execution error", () => {
  before(() => {
    cy.visit(path);
  });

  it("should pass on mac, but skip if not", () => {
    onlyOn('mac');
  });
  it("should pass on windows, but skip if not with no error", () => {
    onlyOn('windows');
  });
  it("should pass on mac, but skip if not, even w/ get.('#navbar')", () => {
    onlyOn('mac');
    cy.get('#navbar')
  });
  it("should pass on windows, but skip if not, w/ get.('#navbar') with no error", () => {
    onlyOn('windows');
    cy.get('#navbar')
  });
  it("should fail on mac w/ get.('header'), but skip if not", () => {
    onlyOn('mac');
    cy.get('header')
  });
  it("should fail on windows w/ get.('header'), but skip if not with no error", () => {
    onlyOn('windows');
    cy.get('header')
  });
});