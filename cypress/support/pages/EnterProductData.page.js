const ABA_ENTER_PRODUCT_DATA = '#enterproductdata'
const INPUT_START_DATE = '#startdate'
const INPUT_INSURANCE_SUM = '#insurancesum'
const INPUT_MERIT_RATING = '#meritrating'
const INPUT_DAMAGE_INSURANCE = '#damageinsurance'
const LBL_OPTIONAL_PRODUCT = '.idealforms-field-checkbox:has(label:contains("Optional Products")) > .group > :nth-child(1)'
const SELECT_COURTESY_CAR = '#courtesycar'
const BTN_NEXT = '#nextselectpriceoption'

function futureDate() {
    const FUTURE_DATE = new Date();
    FUTURE_DATE.setDate(FUTURE_DATE.getDate() + 60);
    
    const FORMATTED_DATE = FUTURE_DATE.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    });

    return FORMATTED_DATE;
}

Cypress.Commands.add('preencheCamposEnterProductData', () => {
    cy.get(ABA_ENTER_PRODUCT_DATA).click()
    cy.get(INPUT_START_DATE).type(futureDate())
    cy.get(INPUT_INSURANCE_SUM).select(1)
    cy.get(INPUT_MERIT_RATING).select(1)
    cy.get(INPUT_DAMAGE_INSURANCE).select(1)
    cy.get(LBL_OPTIONAL_PRODUCT).click()
    cy.get(SELECT_COURTESY_CAR).select(1)
    cy.get(BTN_NEXT).click()
})