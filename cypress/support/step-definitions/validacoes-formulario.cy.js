Given('que acesso o portal Tricentis', () => {
    cy.visit('/app.php')
})

When('preencho os campos obrigatórios da aba Enter Vehicle Data', () => {
    cy.preencheCamposEnterVehicleData()
})

And('preencho os campos obrigatórios da aba Enter Insurant Data', () => {
    cy.preencheCamposEnterInsurantData()
})

And('preencho os campos obrigatórios da aba Enter Product Data', () => {
    cy.preencheCamposEnterProductData()
})

And('preencho os campos obrigatórios da aba Select Price Option', () => {
    cy.preencheCamposSelectPriceOption()
})

And('preencho os campos obrigatórios da aba Send Quote', () => {
    cy.preencheCamposSendQuote()
})

And('clico no botão para enviar o formulário', () => {
    cy.submeterFomulario()
})

/*Then('mensagem é exibida informando que formulário foi enviado com sucesso', () => {
    cy.validarAddToCartVisivel()
})*/