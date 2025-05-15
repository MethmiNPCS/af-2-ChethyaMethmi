describe('RegionSelector Component', () => {
    it('renders and allows selecting a region', () => {
      cy.visit('/allcountries');  // Visit the page where RegionSelector is used
  
      // Use data-testid to target the region select
      cy.get('[data-testid="region-select"]')
        .select('Asia')                // Select "Asia"
        .should('have.value', 'Asia'); // Assert the selected value is "Asia"
    });
  });
  