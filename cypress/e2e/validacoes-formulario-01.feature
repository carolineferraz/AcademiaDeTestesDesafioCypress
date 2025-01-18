# utf-8
# language: pt

Funcionalidade: Preenchimento e Envio de Formulário - Portal Tricentis
    Cenário: Validação Envio de Formulário com Sucesso
        Dado que acesso o portal Tricentis
        Quando preencho os campos obrigatórios da aba Enter Vehicle Data
        E preencho os campos obrigatórios da aba Enter Insurant Data
        E preencho os campos obrigatórios da aba Enter Product Data
        E preencho os campos obrigatórios da aba Select Price Option
        E preencho os campos obrigatórios da aba Send Quote
        E clico no botão para enviar o formulário
        Então mensagem é exibida informando que formulário foi enviado com sucesso