

require('cypress-xpath');

describe('Handle JS alerts', () => {
   


it("Confirm JS alert contains the correct text", () => {
   // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
    cy.visit("http://www.webdriveruniversity.com")
    cy.get("#popup-alerts").invoke("removeAttr", "target").click({force:true}) //jquery command to remove target which is providing new tab
    cy.get("#button1").click()
    cy.on('window:alert', (str) => {
        expect(str).to.equal("I am an alert box!")
    })
   
   
})

it("Validate JS confirm alert box works correctly when clicking ok", () => {
    // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
     cy.visit("http://www.webdriveruniversity.com")
     cy.get("#popup-alerts").invoke("removeAttr", "target").click({force:true}) //jquery command to remove target which is providing new tab
     cy.get("#button4").click()
     cy.on('window:alert', (str) => {
        return true;
    })
    //  cy.get('#confirm-alert-text').contains("You pressed OK!")
    
    
 })

 it("Validate JS confirm alert box works correctly when clicking cancel", () => {
    // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
     cy.visit("http://www.webdriveruniversity.com")
     cy.get("#popup-alerts").invoke("removeAttr", "target").click({force:true}) //jquery command to remove target which is providing new tab
     cy.get("#button4").click()

     cy.on('window:confirm', (str) => {  // cancel js alert, we can use the same for alert but with value true 
        return false;
    })
     cy.get('#confirm-alert-text').contains("You pressed Cancel!")
    
    
 })

 it.only("Validate JS confirm alert box using a stub", () => {
    // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
     cy.visit("http://www.webdriveruniversity.com")
     cy.get("#popup-alerts").invoke("removeAttr", "target").click({force:true}) //jquery command to remove target which is providing new tab
     const stub = cy.stub()
     cy.on('window:confirm', stub)
     cy.get("#button4").click().then(()=> {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!")
     }).then(() => {
        return true
     }).then(() => {
        cy.get('#confirm-alert-text').contains("You pressed OK!")
     })

    
    
 })

})

