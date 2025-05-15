describe('LanguageSelector Component', () => {
    it('renders and allows selecting a language', () => {
      cy.visit('/allcountries');  // Visit the page where LanguageSelector is used
  
      cy.get('[data-testid="language-select"]')
        .select('English')                 // Select "English"
        .should('have.value', 'english'); // Assert the selected value is "english"
    });
  });
  