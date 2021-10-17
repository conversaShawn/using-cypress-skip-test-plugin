// type definitions for Cypress object "cy"
/// <reference types="cypress" />
/// <reference types="@cypress/skip-test" />

// THIS SPEC IMPORTS skipOn (https://github.com/cypress-io/cypress-skip-test/blob/master/README.md#imports-with-callback)

import { skipOn } from "@cypress/skip-test";

const path = "https://example.cypress.io/";


describe("checks for sync skip; aborting execution error", () => {
  before(() => {
    cy.visit(path);
  });

  it("should skip, but not error when true", () => {
    skipOn(path.includes("cypress"));
  });
  it("should pass when false", () => {
    skipOn(path.includes("hello"));
  });
  it("should skip, even w/ get.('#navbar')", () => {
    skipOn(path.includes("cypress"));
    cy.get('#navbar')
  });
  it("should pass, w/ get.('#navbar')", () => {
    skipOn(path.includes("hello"));
    cy.get('#navbar')
  });
  it("should skip, w/ get.('header')", () => {
    skipOn(path.includes("cypress"));
    cy.get('header')
  });
  it("should fail, w/ get.('header')", () => {
    skipOn(path.includes("hello"));
    cy.get('header')
  });
});