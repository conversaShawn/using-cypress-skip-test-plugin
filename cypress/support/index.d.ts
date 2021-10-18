/// <reference types="cypress" />
/// <reference types="@cypress/skip-test" />

export {};

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      skipOn(nameOrFlag: string | boolean, cb?: () => void): Chainable<Subject>;
      onlyOn(nameOrFlag: string | boolean, cb?: () => void): Chainable<Subject>;
    }
  }
}