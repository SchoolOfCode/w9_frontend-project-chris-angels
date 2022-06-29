describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
  });
});
describe('My First Test', () => {
  it('Checks if on home page via resoures', () => {
    cy.visit('http://localhost:3000/');
  });
});
