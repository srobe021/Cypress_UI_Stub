describe('Example to demonstrate API Mocking in Cypress using cy.intercept', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/tags', { fixture: 'tags.json' });
    cy.intercept('GET', '/api/articles*', { fixture: 'articlefeed.json' });
    cy.visit('/');
  });

  it('Mock the Tags from the API Response and then validate on UI', () => {
    cy.get('.tag-list', { timeout: 10000 })
      .should('contain', 'cypress')
      .and('contain', 'demo')
      .and('contain', 'cypress')
      .and('contain', 'check')
      .and('contain', 'test');
  });

  it('Mock the Article feed from the API Response and then validate on UI', () => {
    cy.get('app-favorite-button.pull-xs-right').contains('5');
    cy.get('.author').contains('testersdock');
    cy.get('.preview-link > p').contains('This is a demo, test');
  });
});
