/// <reference types="cypress" />

it.only('OLX test', () => {

  cy.visit('https://www.olx.com.pk/');

  cy.get('[type="search"]').type('Iphone 12{enter}');

  cy.on('window:confirm', (str) => {
    expect(str).to.equal('You can turn the notifications off anytime in the browser settings.')
    return false;
  });

  cy.get('[aria-label="Title"]')
    .eq(0)
    .contains('iphone 12', { matchCase: false });
});

it('Localn test', () => {
  // action that causes exception
  cy.visit('http://127.0.0.1:5500/cypress/integration/Untitled-1.html');

  cy.get('#alertButton').click()

  cy.on('window:confirm', (str) => {
    expect(str).to.equal('Press a button!')
    return false;
  });
});
