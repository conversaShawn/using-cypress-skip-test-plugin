// type definitions for Cypress object "cy"
/// <reference types="cypress" />
/// <reference types="@cypress/skip-test" />

import { onlyOn } from "@cypress/skip-test";

const path = "https://example.cypress.io/";

describe("checks for sync skip; aborting execution error", () => {
  before(() => {
    cy.visit(path);
  });
  onlyOn("integration", () => {
    describe("stuff", () => {
      cy.onlyOn("mac");
    });
  });
});