it('works', () => {
    var hostname = Cypress.env('WHISKER_URL')
    cy.request(`${hostname}/health-check`).then((request) => {
        expect(request.body).to.have.property('status', 'up')
    })
})