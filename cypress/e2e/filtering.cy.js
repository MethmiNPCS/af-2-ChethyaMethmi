describe('Country filtering integration', () => {
    beforeEach(() => {
      // Make sure your React app is running on localhost:5173 (or your port)
      cy.visit('/allcountries');
    });
  
    it('filters countries by search, region, and language', () => {
      // 1. Type "India" in the search bar
      cy.get('input[placeholder="Search for a country"]').type('India');
  
      // 2. Select "Asia" from the region dropdown
      cy.get('[data-testid="region-select"]').select('Asia');
  
      // 3. Select "Hindi" from the language dropdown
      cy.get('[data-testid="language-select"]').select('hindi');
  
      // 4. Wait a bit for data fetching and rendering (optional)
      cy.wait(500);
  
      // 5. Assert that country cards are shown and contain "India"
      cy.get('.col-12.col-sm-6.col-lg-4') // your country card containers
        .should('exist')
        .and('have.length.greaterThan', 0);
  
      cy.get('.col-12.col-sm-6.col-lg-4')
        .first()
        .should('contain.text', 'India');
    });
  });