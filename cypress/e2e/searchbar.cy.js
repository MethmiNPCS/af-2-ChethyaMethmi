describe('SearchBar Component', () => {
    it('renders and allows typing', () => {
      cy.visit('/allcountries'); // Visit your app page with the SearchBar
  
      // Find input by placeholder text and type "USA"
      cy.get('input[placeholder="Search for a country"]')
        .type('USA')
        .should('have.value', 'USA');  // Assert input value updated
    });
  });
  