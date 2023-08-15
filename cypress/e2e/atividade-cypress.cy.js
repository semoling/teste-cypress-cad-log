describe('Teste Cypress', () => {
  it('Testar Cadastro', () => {
    cy.visit('http://teste-cypress.s3-website-us-east-1.amazonaws.com/')
    cy.contains('Ir para o Cadastro').click()
    cy.get('input[name="user_name"').type('batata')
    cy.get('input[name="user_email"').type('batata@suamaeaquelaursa.com')
    cy.get('input[name="user_password"').type('123456789')
    cy.get('input[name="user_confirm_password"').type('123456789')
    cy.contains('Criar conta').click()
    cy.contains('Você está logado!').should('be.visible')

  })

  it('Testar Login', () => {
    cy.visit('http://teste-cypress.s3-website-us-east-1.amazonaws.com/')
    cy.get('input[name="user_email"').type('cypress@teste.com')
    cy.get('input[name="user_password"').type('cypress')
    cy.get('button[type="submit"').click()
    cy.contains('Você está logado!').should('be.visible')
  })

})
