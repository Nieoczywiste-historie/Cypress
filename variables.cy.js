require('cypress-xpath');

describe('Verifing variables, cypress commands and jquery commands', () => {
   


it("Navigating to specyfic product pages", () => {
    cy.visit("https://www.automationteststore.com")

   
   // The following will pass
//     const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
//    makeupLink.click()
//    const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
//    skincareLink.click()

   // Recommended Approach . not working ?
   cy.get("a[href*='product/category&path=']").contains("Skincare").click()
   cy.get("a[href*='product/category&path=']").contains("Makeup").click()
   
   
})

it("Navigating to specyfic product pages", () => {
    cy.visit("https://www.automationteststore.com")
    cy.get("a[href*='product/category&path=']").contains("Makeup").click()
   
    //This will fail
//    const header = cy.get("h1 .maintext")
//    cy.log(header.text())
cy.get("h1 .maintext").then(($headerText)=> {
     const headerText = $headerText.text()
     cy.log("Found header text: " + headerText)
     expect(headerText).is.eq("Makeup")
})
})

it.only("Validate properties of the Contacact Us Page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact")

    // Uses cypress commands and chaining
    cy.contains("#ContactUsFrm", 'Contact Us Form').find("#field_11").should("contain", "First name")

    //JQuery approach
    cy.contains("#ContactUsFrm", 'Contact Us Form').then(text => {
        const firstNameText = text.find("#field_11").text()
        expect(firstNameText).to.contain("First name")

         //Embedded commands (Closure)
         cy.get("#field_11").then(fnText => {
            cy.log(fnText.text())
            cy.log(fnText)
         })

    })
   

})
})
 