require('cypress-xpath');

describe('Test Contact Us form via Automation Test Store', () => {
   
beforeEach(function() {
   cy.fixture("userDetails").as("user") // geting information from userDatails.json from fixtures folder
   
}) 

it("Should be able to submit a successful submission via contact contact us form", () => {
   cy.visit("https://www.automationteststore.com")
   cy.xpath("//a[contains(@href, 'contact')]").click().then(function(linkText){
      cy.log("Clicked on link using text: " + linkText.text)
   }) // can use also "a[href$='contact']"

   // cy.get('#ContactUsFrm_first_name').type("Test")
   cy.get("@user").then((user) => {
      cy.get('#ContactUsFrm_first_name').type(user.first_name) // putting informaiton from Json file 
      cy.get('#ContactUsFrm_email').type(user.email) // same as above 
   })
   // cy.get('#ContactUsFrm_email').type("test@test.com")
   cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
   cy.get('#ContactUsFrm_enquiry').type("Test")
   cy.xpath('//*[@class="btn btn-primary lock-on-click"]').click() // can use also button[title='Submit']
   cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
   cy.log('Test is completed') // log information


   
   
})


})
