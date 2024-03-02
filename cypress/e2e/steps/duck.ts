// cypress/e2e/duckduckgo.ts
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.cogfdghddh", () => {
  cy.visit("https://www.duckduckgo.com");
});

Then("I should see a search bar", () => {
  // cy.get("input").should(
  //   "have.attr",
  //   "placeholder",
  //   "Search without being tracked"
  // );
  cy.get('#searchbox_input') // yields the element
  .should('have.attr', 'placeholder') // yields the "placeholder" attribute
  .and('equal', 'Search without being tracked') 
});

Given(`I go to the Duckduckgo page`, ()=>{
  cy.log("it's given")
});

Given(`I see {string} in the title`, (title:string)=>{
  cy.log("its Given And=>>>", title)
})

