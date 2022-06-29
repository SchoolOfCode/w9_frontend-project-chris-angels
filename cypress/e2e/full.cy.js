describe('My First Test', () => {
  it('Checks if on home page via checking if "resources" is present in h1', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h1').should('have.text', 'Resources');
  });
});
