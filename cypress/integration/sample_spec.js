/// <reference types="Cypress" />

describe('My First test', () => {
  it('Clicking "type" navigates to a new url', () => {
    cy.visit('https://example.cypress.io');

    // cy.pause()

    cy.contains('type').
      click();

    cy.url().should('include', '/commands/actions')

    cy.get('.action-email')
      .type('fake@email.com.br')
      .should('have.value', 'fake@email.com.br')
  });
  //-----------------------

  // it('input text nome', () => {
  //   cy.get('input:first').click().focused()
  // });

  // context('Susccessfuly', () => {
  //   it('nome com sobrenome', () => {
  //     cy.get('input[name="nome"]')
  //       .type('Lia lis')
  //       .should('have.value', 'Lia lis')
  //   });
  //   it('nome completo', () => {

  //   });
  // })
  // context('Failalure'), () => {

  // }

  // it('verify labels', () => {
  //   cy.contains('Nome:');
  //   cy.get('label').contains('Como nos conheceu:');
  //   cy.get('label').contains('Telefone:');
  //   cy.get('label').contains('Possuí rede social:');
  //   cy.get('label').contains('Sim');
  //   cy.get('label').contains('Não');
  //   // cy.get('label').contains('Quais:');
  // });
  // it('verify button', () => {
  //   cy.get('.btn').click();
  //   cy.contains('Enviar').click()
  // });

  // it.only('Call fill the form', () => {
  //   cy.get('input[name="nome"]')
  //     .type('Lia lis')
  //     .should('have.value', 'Lia lis')
  // })
})