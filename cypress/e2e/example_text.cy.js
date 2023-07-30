describe('View example.txt', () => {
    it('should navigate to example.txt and verify the displayed content', () => {
        cy.request(Cypress.env('host') + "/example.txt")
            .then((response) => {
                const body = response.body;
                cy.wrap(body).should('equal', 'Hello World!!!');
            });
    })
})