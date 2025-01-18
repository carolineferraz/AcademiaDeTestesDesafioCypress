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

    Cenário: Validação Tentativa de Seguir Com Fluxo Do Formulário Sem Preencher Todos os Campos Obrigatórios
        Dado que acesso o portal Tricentis
        Quando preencho os campos obrigatórios da aba Enter Vehicle Data
        E preencho os campos obrigatórios da aba Enter Insurant Data
        E não preencho todos os campos obrigatórios da aba Enter Product Data
        Então na aba Select Price Option mensagem informando que é necessário completar os passos anteriores é exibida
        E na aba Send Quote botão para enviar formulário não está visível