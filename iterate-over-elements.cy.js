require('cypress-xpath');
// this code can check if all elemenst are visable on the page 
describe('Iterate over elements', () => {
    beforeEach(() => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    })
   it("Log information of all hair care products", () => {
        // cy.visit("https://www.automationteststore.com/");
        // cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
   
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text()) 
            });
          });
   


it("Add specyfic product to basket", () => {
    // cy.visit("https://www.automationteststore.com")
    // cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    // cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    //     if($el.text().includes("Curls to straight Shampoo")) {
    //         cy.wrap($el).click()
    //     }
    //     }); //whole code has been overite by commands fuction 
    cy.selectProduct("Curls to straight Shampoo") //custom command created under support/commands

})
it("Add another specyfic product to basket", () => {
    // cy.visit("https://www.automationteststore.com")
    // cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

    cy.selectProduct("Seaweed Conditioner")

})
it("Add another specyfic product to basket", () => {
    // cy.visit("https://www.automationteststore.com")
    // cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

    cy.selectProduct("Eau Parfumee au The Vert Shampoo")

})

})
 
// /// <reference types="cypress" />

// describe("Iterate over elements", () => {
//     it("Log information of all hair care products", () => {
//       cy.visit("https://automationteststore.com/");
//       cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  
//       cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
//           cy.log("Index: " + index + " : " + $el.text())
//       });
//     });
//     it("Add specific product to basket", () => {
//       cy.visit("https://automationteststore.com/");
//       cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
//     });
//   });
  