describe('Menu Navigation', () => {
  it('Checks if on home page via checking if "resources" is present in h1', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h1').should('have.text', 'Resources');
  });

  it('Checks menu navigation resources and home links', () => {
    cy.get('.cAYAhL').should('have.length', 5);
    cy.get('.cAYAhL').first().click();
    cy.contains('Settings');
    cy.contains('Home');
    cy.contains('Diary');
    cy.contains('Resources');
    cy.get('.linkgrow').filter(':contains("Resources")').click();
    cy.url().should('include', '/resources');
    cy.get('.cAYAhL').first().click();
    cy.get('.linkgrow').filter(':contains("Home")').click();
    expect(cy.url().should('not.include', '/resources'));
  });

  //Needs testing for settings and diary links - cors error is
  //currently blocking this.
});

//Test assumes that the timer is set to 4 seconds!
describe('Panic button testing', () => {
  it('Can navigate through to the end while perserving data', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.Panic').click();
    cy.url().should('include', '/panic1');
    cy.wait(4000).get('button').click();
    cy.get('#problemTopic').type('html');
    cy.get('#problemProblem').type('123');
    cy.get('#problemTried').type('qwe');
    cy.get('button').filter(':contains("Placeholder")').click();
    cy.wait(4000);
    cy.get('button').last().click();
    cy.contains('123');
    cy.contains('html');
    cy.contains('qwe');
  });
});
