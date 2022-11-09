describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('localhost:8001/New-Password')

    //cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    //cy.url().should('New-Password', '/commands/actions')
  })
})