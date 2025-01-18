const ABA_ENTER_INSURANT_DATA = '#enterinsurantdata'
const INPUT_FIRSTNAME = '#firstname'
const INPUT_LASTNAME = '#lastname' 
const INPUT_BIRTHDATE = '#birthdate'
const SELECT_COUNTRY = '#country'
const INPUT_ZIPCODE = '#zipcode'
const SELECT_OCUUPATION = '#occupation'
const LBL_HOBBIE = '.idealforms-field-checkbox:has(label:contains("Hobbies")) > .group > :nth-child(1)'
const BTN_NEXT = '#nextenterproductdata'

Cypress.Commands.add('preencheCamposEnterInsurantData', () => {
    cy.get(ABA_ENTER_INSURANT_DATA).click()
    cy.get(INPUT_FIRSTNAME).type('Maria')
    cy.get(INPUT_LASTNAME).type('Borges')
    cy.get(INPUT_BIRTHDATE).type('11/09/1995')
    cy.get(SELECT_COUNTRY).select(1)
    cy.get(INPUT_ZIPCODE).type('12345678')
    cy.get(SELECT_OCUUPATION).select(1)
    cy.get(LBL_HOBBIE).click()
    cy.get(BTN_NEXT).click()
})