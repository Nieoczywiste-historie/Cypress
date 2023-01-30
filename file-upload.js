

require('cypress-xpath');

describe('Test file upload via webdriveruni', () => {
   


it("Upload a file... ", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get("#file-upload").scrollIntoView().invoke("removeAttr", "target").click({force:true}) //jquery command to remove target which is providing new tab
    cy.get("#myFile").selectFile("cypress/fixtures/laptop.png")
    cy.get("#submit-button").click()
})

it("Upload No file... ", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get("#file-upload").scrollIntoView().invoke("removeAttr", "target").click({force:true}) //jquery command to remove target which is providing new tab
    y.get("#submit-button").click()
})



})