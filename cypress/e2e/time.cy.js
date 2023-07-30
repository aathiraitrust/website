describe('Current Time Page', () => {
    it('should navigate to time page and verify time', () => {
        cy.visit(Cypress.env('host'))

        cy.get('a[data-testid="time-link"]')
            .should('have.length', 1)
            .click()

        cy.get('[data-testid="current-time"]')
            .should('have.length', 1)
            .then(element => {
                const displayedValue = element.text()
                const displayedDate = Date.parse(displayedValue)
                const aMinuteAgo = new Date( Date.now() - 1000 * 60 );
                cy.wrap(displayedDate.valueOf()).should('be.gte', aMinuteAgo.valueOf())
                cy.wrap(displayedDate.valueOf()).should('be.lte', Date.now().valueOf())
            })
    })
})