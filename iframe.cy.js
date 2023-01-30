

require('cypress-xpath');

describe('Handling iframe & Modals', () => {
   


it("Handle webdriveruni iframe and modals", () => {
   cy.visit("http://www.webdriveruniversity.com")
   cy.get("#iframe").invoke("removeAttr", "target").click({force:true}) //jquery command to remove target which is providing new tab
   cy.get("#frame").then($iframe => {
    const body = $iframe.contents().find("body")
    cy.wrap(body).as('iframe')
   })
   cy.get("@iframe").find("#button-find-out-more").click()
   cy.get("@iframe").find("#myModal").as('modal')
   cy.get("@modal").should(($expectedText) => {
    const text = $expectedText.text()
    expect(text).to.include("Welcome to webdriveruniversity.com we sell a wide range of electrical goods")
   })
   cy.get("@modal").contains("Close").click()
})



})
