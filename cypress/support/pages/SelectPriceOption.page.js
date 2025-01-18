const ABA_SELECT_PRICE_OPTION = '#selectpriceoption'
const LBL_SELECT_PRICE_OPTION = 'tr:has(th:contains("Select Option")) > .group > :nth-child(1)'

Cypress.Commands.add('preencheCamposSelectPriceOption', () => {
    cy.get(ABA_SELECT_PRICE_OPTION).click()
    cy.get(LBL_SELECT_PRICE_OPTION).click()
})

Cypress.Commands.add('validarMensagemEstaVisivel', () => {
    cy.contains('Please, complete the first three steps to see the price table.').should('be.visible');
})