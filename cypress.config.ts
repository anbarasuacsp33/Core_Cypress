import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    baseUrl:'https://www.amazon.in',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
