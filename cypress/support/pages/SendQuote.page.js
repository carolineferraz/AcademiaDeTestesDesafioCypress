const ABA_SEND_QUOTE = '#sendquote'
const INPUT_EMAIL = '#email'
const INPUT_USERNAME = '#username'
const INPUT_PASSWORD = '#password'
const INPUT_CONFIRM_PASSWORD = '#confirmpassword'
const BTN_SEND_EMAIL = '#sendemail'

Cypress.Commands.add('preencheCamposSendQuote', () => {
    cy.get(ABA_SEND_QUOTE).click()
    cy.get(INPUT_EMAIL).type(Cypress.env('email'))
    cy.get(INPUT_USERNAME).type(Cypress.env('username'))
    cy.get(INPUT_PASSWORD).type(Cypress.env('password'))
    cy.get(INPUT_CONFIRM_PASSWORD).type(Cypress.env('confirmPassword'))
})

Cypress.Commands.add('submeterFomulario', () => {
    cy.intercept('POST', '/101/tcpdf/pdfs/quote.php').as('postQuote')

    cy.get(BTN_SEND_EMAIL).click()

    cy.wait('@postQuote', { timeout: 60000 }).then((interception) => {
        expect(interception.response.statusCode).to.equal(200)
    })
})

Cypress.Commands.add('validarEnvioComSucesso', () => {
    cy.contains('Sending e-mail success').should('be.visible');
})

Cypress.Commands.add('validarBotaoNaoEstaVisivel', () => {
    cy.get(BTN_SEND_EMAIL).should('not.be.visible')
})