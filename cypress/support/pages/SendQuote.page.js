const ABA_SEND_QUOTE = '#sendquote'
const INPUT_EMAIL = '#email'
const INPUT_USERNAME = '#username'
const INPUT_PASSWORD = '#password'
const INPUT_CONFIRM_PASSWORD = '#confirmpassword'
const BTN_SEND_EMAIL = '#sendemail'

Cypress.Commands.add('preencheCamposSendQuote', () => {
    cy.get(ABA_SEND_QUOTE).click()
    cy.get(INPUT_EMAIL).type('caroline7@email.com')
    cy.get(INPUT_USERNAME).type('caroline')
    cy.get(INPUT_PASSWORD).type('qwE123#')
    cy.get(INPUT_CONFIRM_PASSWORD).type('qwE123#')
})

Cypress.Commands.add('submeterFomulario', () => {
    cy.intercept('POST', '/101/tcpdf/pdfs/quote.php').as('postQuote')

    cy.get(BTN_SEND_EMAIL).click()

    cy.wait('@postQuote', { timeout: 60000 }).then((interception) => {
        expect(interception.response.statusCode).to.equal(200)
    })
})