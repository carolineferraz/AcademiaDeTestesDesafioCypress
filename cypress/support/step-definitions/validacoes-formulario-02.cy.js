Given('que acesso o portal Tricentis', () => {
    cy.visit('/app.php')
})

When('preencho os campos obrigatórios da aba Enter Vehicle Data', () => {
    cy.preencheCamposEnterVehicleData()
})

And('preencho os campos obrigatórios da aba Enter Insurant Data', () => {
    cy.preencheCamposEnterInsurantData()
})

And('não preencho todos os campos obrigatórios da aba Enter Product Data', () => {
    cy.naoPreencheTodosCamposEnterProductData()
})

Then('na aba Select Price Option mensagem informando que é necessário completar os passos anteriores é exibida', () => {
    cy.validarMensagemEstaVisivel()
})

And('na aba Send Quote botão para enviar formulário não está visível', () => {
    cy.validarBotaoNaoEstaVisivel()
})