import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    e2e: {
      baseUrl: 'http://localhost:5173',  // <-- your Vite dev server URL here
      specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',  // default pattern
    },
  },
});
