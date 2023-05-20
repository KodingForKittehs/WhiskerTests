it('works', () => {
    cy.visit('https://example.cypress.io').then(() => {
        expect('hello').to.equal('hello')
    })
})