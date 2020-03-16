/// <reference types="Cypress" />

let errors = [], nome = [], novoNome = []
let telefone = [], novoTelefone = []

// funções de validações do campo nome
function removerEspacosExtras(nome) {
  return nome.trim().replace(/\s+/g, " ");
}
function isNumber(valor) {
  if (!isNaN(Number(valor))) {
    errors.push("Nome não pode conter números.");
    return true;
  }
}
function validaElementoToken(array, element) {
  if (array.length === 2 && element.length === 2) {
    errors.push("Nome e sobrenome devem conter no mínimo três carácteres cada.");
    return true;
  }
}
function validaTamanhoTokens(valor) {
  if (valor.length > 0) {
    if (!isNumber(valor))
      errors.push("Nome deve conter ao menos sobrenome.");
  } else errors.push("O nome é obrigatório.");
}
function validaToken(array, valor) {
  if (array.length > 1) {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];

      if (isNumber(element)) break;

      if (validaElementoToken(array, element)) break;
    }

    return array.join(" ");
  } else validaTamanhoTokens(valor);
}
function validaNome(nome) {
  let valor = removerEspacosExtras(nome);

  let array = valor ? valor.split(" ") : "";

  return validaToken(array, valor);
}

// Válida Telefone
function formatarNumero(value) {
  return value.trim().replace(/\s+/g, "").replace("–", "");
}
function validaTelefone(value) {
  let valor = formatarNumero(value);

  if (valor.length < 10 && valor.length > 0)
    errors.push("Número do telefone Inválido.");

  if (!valor.length) {
    errors.push("Informe o número do telefone.")
  } else {
    return valor;
  }
}

describe('The Field Name', () => {

  beforeEach('susccessfuly loads', () => {
    cy.visit('/')
    cy.fixture('nome-passing').as('dados')
  })

  context('passing test - field nome', () => {

    it('input text nome', () => {
      cy.get('input')
        .first()
        .click()
        .focused()
    });

    it('captura dados do fixture', () => {

      cy.get('@dados').then((dados) => {
        for (let i = 0; i < dados.nomePassing.length; i++) {
          const el = dados.nomePassing[i]
          nome.push(el)
          cy.get('input')
            .first()
            .type(nome[i])
            .clear()
        }
      })
    });

    it('valida nome', () => {

      for (let i = 0; i < nome.length; i++) {
        novoNome.push(validaNome(nome[i]))
        cy.get('input')
          .first()
          .type(novoNome[i])
          .wait(500)
          .clear()
      }

      if (errors.length) alert(errors)

    });
  });

  context('resetar dados', () => {
    it('limpar dados das variáveis', () => {
      errors = []
      nome = []
      novoNome = []
      cy.log(`Errors: ${errors.length}. Nome: ${nome.length}. Novo nome: ${novoNome.length}.`)
    });
  })

  context('failing test - field nome', () => {

    it('captura dados do fixture', () => {

      cy.get('@dados').then((dados) => {
        for (let i = 0; i < dados.nomeFailing.length; i++) {
          const el = dados.nomeFailing[i]
          nome.push(el)
          cy.get('input')
            .first()
            .type(nome[i])
            .clear()
        }
      })
    });

    it('valida nome', () => {

      for (let i = 0; i < nome.length; i++) {
        novoNome.push(validaNome(nome[i]))
        cy.get('input')
          .first()
          .type(novoNome[i])
          .wait(500)
          .clear()
      }

      if (errors.length) alert(errors)

    });
  })

  context('passing test - field select option', () => {

    it('valida campo', () => {
      cy.get('#opcao')
        .select('TV')
        .select('Internet')
        .select('Outros')
    });

  });

  context('passing test - field phone', () => {

    it('input text telefone', () => {
      cy.get('#telefone')
        .click()
        .focused()
    });

    it('captura dados do fixture', () => {

      cy.get('@dados').then((dados) => {
        telefone = dados.telefonePassing
        for (let i = 0; i < telefone.length; i++) {
          cy.get('#telefone')
            .type(telefone[i])
            .clear()
        }
      })

    });

    it('valida telefone', () => {

      for (let i = 0; i < telefone.length; i++) {
        novoTelefone.push(validaTelefone(telefone[i]))
        cy.get('#telefone')
          .type(novoTelefone[i])
          .wait(500)
          .clear()
      }

      if (errors.length) alert(errors)

    });

  });

  context('resetar dados', () => {
    it('limpar dados das variáveis', () => {
      errors = []
      telefone = []
      novoTelefone = []
      cy.log(`Errors: ${errors.length}. Telefone: ${telefone.length}. Novo Telefone: ${novoTelefone.length}.`)
    });
  })

  context('failing test - field telefone', () => {

    it('captura dados do fixture', () => {

      cy.get('@dados').then((dados) => {
        telefone = dados.telefoneFailing
        for (let i = 0; i < telefone.length; i++) {
          cy.get('#telefone')
            .type(telefone[i])
            .clear()
        }
      })
    });

    it('valida telefone', () => {

      for (let i = 0; i < telefone.length; i++) {
        novoTelefone.push(validaTelefone(telefone[i]))
        cy.get('#telefone')
          .type(telefone[i])
          .wait(500)
          .clear()
      }

      if (errors.length) alert(errors)

    });
  })

  context.only('passing test - field input radio', () => {

    it('valida campos Não', () => {
      cy.get('#nao')
        .not('[disabled]')
        .check()
        .should('be.checked')

      cy.get('#sim')
        .should('not.checked')
    });

    // it('valida campos Sim', () => {
    //   cy.get('#sim')
    //     .click()
    //     .focused() 
    //     .then(() => {
    //       cy.get('.form-check-input').
    //     })     
    // });
  });

})