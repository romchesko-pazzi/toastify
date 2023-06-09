import { maxToastsCount, Positions, toastTestDuration } from '@constants';
import { getUrl, getUrlForColors, getUrlForText } from '@utils';

describe('toasts colors', () => {
  it('should create toast and have correct background-color', () => {
    cy.visit(getUrlForColors());
    cy.get('[data-cy=btn-create-toast]').click();
    cy.get('[data-cy=toast]').should('have.css', 'background-color', 'rgb(55, 226, 154)');
  });
  it('should create toast and have correct color', () => {
    cy.visit(getUrlForColors());
    cy.get('[data-cy=btn-create-toast]').click();
    cy.get('[data-cy=toast]').should('have.css', 'color', 'rgb(255, 255, 255)');
  });
});

describe('toasts container position', () => {
  it('should create toast and have top-left position', () => {
    cy.visit(getUrl(Positions.TopLeft));
    cy.get('[data-cy=btn-create-toast]').click();
    cy.get('[data-cy=toasts-container')
      .should('have.css', 'top', '15px')
      .should('have.css', 'left', '15px');
  });
  it('should create toast and have top-right position', () => {
    cy.visit(getUrl(Positions.TopRight));
    cy.get('[data-cy=btn-create-toast]').click();
    cy.get('[data-cy=toasts-container')
      .should('have.css', 'top', '15px')
      .should('have.css', 'right', '15px');
  });
  it('should create toast and have bottom-left position', () => {
    cy.visit(getUrl(Positions.BottomLeft));
    cy.get('[data-cy=btn-create-toast]').click();
    cy.get('[data-cy=toasts-container]')
      .should('have.css', 'bottom', '15px')
      .should('have.css', 'left', '15px');
  });
  it('should create toast and have bottom-right position', () => {
    cy.visit(getUrl(Positions.BottomRight));
    cy.get('[data-cy=btn-create-toast]').click();
    cy.get('[data-cy=toasts-container')
      .should('have.css', 'bottom', '15px')
      .should('have.css', 'right', '15px');
  });
});

describe('toasts count', () => {
  it("shouldn't create more than 3 toasts", () => {
    cy.visit(getUrl(Positions.BottomLeft));
    cy.get('[data-cy=btn-create-toast]').click();
    cy.get('[data-cy=btn-create-toast]').click();
    cy.get('[data-cy=btn-create-toast]').click();
    cy.get('[data-cy=btn-create-toast]').click();
    cy.get('[data-cy=toast]').should('have.length', maxToastsCount);
  });
});

describe('toast closing', () => {
  it('should create and delete toast after delay', () => {
    cy.visit(getUrl(Positions.TopLeft));
    cy.get('[data-cy=btn-create-toast]').click();
    cy.get('[data-cy=toast]').should('exist');
    cy.wait(toastTestDuration);
    cy.get('[data-cy=toast]').should('not.exist');
  });
  it('should create and delete toast after click on cross', () => {
    cy.visit(getUrl(Positions.TopRight));
    cy.get('[data-cy=btn-create-toast]').click();
    cy.get('[data-cy=toast]').should('exist');
    cy.get('[data-cy=close-toast]').click();
    cy.get('[data-cy=toast]').should('not.exist');
  });
});

describe('toast text', () => {
  it('should create and has correct toast title & description', () => {
    cy.visit(getUrlForText());
    cy.get('[data-cy=btn-create-toast]').click();
    cy.get('[data-cy=title]').should('have.text', 'Title text');
    cy.get('[data-cy=description]').should('have.text', 'description text');
  });
});
