describe('Navigation Bar', () => {
    it('should navigate using navigation bar and highlight active', () => {
        cy.visit(Cypress.env('host'));

        cy.get('[data-testid="home-link"]')
            .should('have.length', 1)
            .should('have.attr', 'class')
            .and('contain', 'active');

        cy.get('a[data-testid="about-us-link"]')
            .should('have.length', 1)
            .click();

        cy.get('[data-testid="about-us-link"]')
            .should('have.length', 1)
            .should('have.attr', 'class')
            .and('contain', 'active');

        cy.get('a[data-testid="home-link"]')
            .should('have.length', 1)
            .click();

        cy.get('[data-testid="home-link"]')
            .should('have.length', 1)
            .should('have.attr', 'class')
            .and('contain', 'active');
    })
})