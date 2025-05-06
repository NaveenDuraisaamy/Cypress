describe('Login', () => {
  it('Launch the application', () => {
    cy.visit("https://www.google.co.in/");
    cy.title().should('eq', 'Google');
  })
})