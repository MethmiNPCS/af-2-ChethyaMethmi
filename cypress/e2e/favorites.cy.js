describe('Favorites feature integration', () => {
    beforeEach(() => {
      // Clear localStorage before each test to start fresh
      cy.clearLocalStorage();
      cy.visit('/allcountries');
    });
  
    it('adds countries to favorites and displays them in Favorites page', () => {
      // 1. Click the favorite button (heart) on the first country card
      cy.get('.col-12.col-sm-6.col-lg-4')
        .first()
        .within(() => {
          cy.get('button[aria-label="Add to favorites"]').click();
        });
  
      // 2. Click the favorite button on the second country card (optional)
      cy.get('.col-12.col-sm-6.col-lg-4')
        .eq(1)
        .within(() => {
          cy.get('button[aria-label="Add to favorites"]').click();
        });
  
      // 3. Navigate to Favorites page
      cy.get('nav').contains('Favorites').click();
  
      // 4. Check URL is /favorites
      cy.url().should('include', '/favorites');
  
      // 5. Verify at least 2 countries appear in favorites
      cy.get('.col-12.col-sm-6.col-lg-4')
        .should('have.length.at.least', 2);
  
      // 6. Optionally check the first country card contains a heart filled icon
      cy.get('.col-12.col-sm-6.col-lg-4')
        .first()
        .within(() => {
          cy.get('button[aria-label="Remove from favorites"]').should('exist');
        });
    });
  });
  