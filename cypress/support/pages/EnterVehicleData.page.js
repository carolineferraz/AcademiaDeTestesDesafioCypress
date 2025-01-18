const SELECT_MAKE = '#make'
const SELECT_MODEL = '#model'
const INPUT_CYLINDER_CAPACITY = '#cylindercapacity'
const INPUT_ENGINE_PERFORMANCE = '#engineperformance'
const DATE_OF_MANUFACTURE = '#dateofmanufacture'
const SELECT_NUMBER_OF_SEATS = '#numberofseats'
const SELECT_NUMBER_OF_SEATS_MOTORCYCLE = '#numberofseatsmotorcycle'
const SELECT_FUEL_TYPE = '#fuel'
const INPUT_PAYLOAD = '#payload'
const INPUT_TOTAL_WEIGHT = '#totalweight'
const INPUT_LIST_PRICE = '#listprice'
const INPUT_ANNUAL_MILEAGE = '#annualmileage'
const BTN_NEXT = '#nextenterinsurantdata'

Cypress.Commands.add('preencheCamposEnterVehicleData', () => {
    cy.get(SELECT_MAKE).select(1)
    cy.get(SELECT_MODEL).select(1)
    cy.get(INPUT_CYLINDER_CAPACITY).type('2')
    cy.get(INPUT_ENGINE_PERFORMANCE).type('100')
    cy.get(DATE_OF_MANUFACTURE).type('01/01/2021')
    cy.get(SELECT_NUMBER_OF_SEATS).select('5')
    cy.get(SELECT_NUMBER_OF_SEATS_MOTORCYCLE).select('2')   
    cy.get(SELECT_FUEL_TYPE).select(1)
    cy.get(INPUT_PAYLOAD).type('650')
    cy.get(INPUT_TOTAL_WEIGHT).type('1800')
    cy.get(INPUT_LIST_PRICE).type('20000')
    cy.get(INPUT_ANNUAL_MILEAGE).type('10000')
    cy.get(BTN_NEXT).click()
})