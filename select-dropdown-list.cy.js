

require('cypress-xpath');

describe('Interact with dropdown lists via webdriveruni', () => {
   


it("Select specyfic values via select dropdown lists", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({force:true}) //jquery command to remove target which is providing new tab
    cy.get("#dropdowm-menu-1").select("c#") //selecting base on value 
    cy.get("#dropdowm-menu-2").select("testng").should("have.value", "testng")
    cy.get("#dropdowm-menu-3").select("JQuery").contains("JQuery") //selecting base on name

    cy.get("#dropdowm-menu-2").select("maven").should("have.value", "maven")
    cy.get("#dropdowm-menu-2").select("TestNG").contains("TestNG")

})


})