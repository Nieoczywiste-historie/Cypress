

require('cypress-xpath');

describe('Verify checkboxes via webdriveruni', () => {
   
   beforeEach(() => {
      cy.visit("http://www.webdriveruniversity.com")
   cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({force:true}) //jquery command to remove target which is providing new tab

  })

it("Check and validate checkbox", () => {
   // cy.visit("http://www.webdriveruniversity.com")
   // cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({force:true}) //jquery command to remove target which is providing new tab
//    cy.get('#checkboxes > :nth-child(1) > input').check().should("be.checked")

   cy.get('#checkboxes > :nth-child(1) > input').as("option-1")
   cy.get("@option-1").check().should("be.checked")
})

it("Uncheck and validate checkbox", () => {
   //  cy.visit("http://www.webdriveruniversity.com")
   //  cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({force:true}) //jquery command to remove target which is providing new tab
 //    cy.get('#checkboxes > :nth-child(1) > input').check().should("be.checked")
 
 cy.get(':nth-child(5) > input').as("option-3")
    cy.get("@option-3").uncheck().should("not.be.checked")
 })

 it("check multiple checkboxes and validate", () => {
   //  cy.visit("http://www.webdriveruniversity.com")
   //  cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({force:true}) //jquery command to remove target which is providing new tab
 //    cy.get('#checkboxes > :nth-child(1) > input').check().should("be.checked")
 
 cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should("be.checked")
 })
})