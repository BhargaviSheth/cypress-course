describe('Fundamental tests', () => {
  it('Contains correct header text', () => {
    cy.visit('/fundamentals')
    cy.get('[data-test = "Fundamental-header"]').contains(/Testing Fundamentals/i) //i for case sensetive
    cy.get('[data-test = "Fundamental-header"]').should('contain.text','Testing Fundamentals') //alternative of above
  })

  it('Accordian works correctly', () => {
    cy.visit('/fundamentals')
    cy.get('[data-test = "Fundamental-header"]').contains(/Testing Fundamentals/i) //i for case sensetive
    cy.get('[data-test = "accordian-item"]').click().pause()
  })
})