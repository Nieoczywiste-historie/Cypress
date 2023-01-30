

require('cypress-xpath');

describe('Verify Radio buttons via webdriveruni', () => {
   
    beforeEach(() => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({force:true}) //jquery command to remove target which is providing new tab
        
    })
// beforeEach(function(){
//     cy.visit("http://www.webdriveruniversity.com")
//     cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({force:true}) //jquery command to remove target which is providing new tab
    

// })

it("Check specyfic radio buttons ", () => {
      // cy.get("#radio-buttons").find("[type='radio']").first().check() //taking first element from list
    cy.get("#radio-buttons").find("[type='radio']").eq(2).check() //selecting other radio than 1st 

})

it("Validate the states of specyfic radio buttons ", () => {
    // cy.visit("http://www.webdriveruniversity.com")
    // cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({force:true}) //jquery command to remove target which is providing new tab
    cy.get("[value='lettuce']").should("not.be.checked")
    cy.get("[value='pumpkin']").should("be.checked")

    cy.get("[value='lettuce']").check().should("be.checked")
    cy.get("[value='cabbage']").should("be.disabled")})
})