import Homepage_PO from '../../support/pageObjects/webdrive-uni/Homepage_PO'
import Contact_Us_PO from '../../support/pageObjects/webdrive-uni/Contact_Us_PO'

require('cypress-xpath');

describe('Test Contact Us form via WebDriverUniversity', () => {
before(function() { // this line is for loading data from fixture to automaticaly fill out email window
cy.fixture('example').then(function(data){
   // this.data = data;
   globalThis.data = data;
})
})    
beforeEach(function (){ // do Page object modeling
   const homepage_PO = new Homepage_PO();
   homepage_PO.visitHomepage();
   homepage_PO.clickOn_ContactUs_Button();


})

it("Should be able to submit a successful submission via contact contact us form", () => {
   // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
   // cy.visit("http://www.webdriveruniversity.com")
   // cy.get("#contact-us").invoke("removeAttr", "target").click({force:true}) //jquery command to remove target which is providing new tab
   cy.document().should('have.property', 'charset').and('eq', 'UTF-8') //checking if document has some specyfic property
   cy.title().should('include', 'WebDriver | Contact Us') // checking if tab has specyfic name 
   cy.url().should('include', 'contactus') // checking url endpoints 
   // cy.get('[name="first_name"]').type(data.first_name)
   // // cy.get('[name="first_name"]').type("Test")
   // cy.get('[name="last_name"]').type(data.last_name)
   // // cy.get('[name="last_name"]').type("Test")
   // cy.get('[name="email"]').type(data.email)
   // // cy.get('[name="email"]').type("test@test.com")
   // cy.get('textarea.feedback-input').type("Test comment")
   // cy.get('[type="submit"]').click()
   // cy.get('h1').should('have.text', "Thank You for your Message!")
   // cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, data.email, "Test comment", 'h1', "Thank You for your Message!") // taking data from fixtures
   const contact_Us_PO = new Contact_Us_PO();
   contact_Us_PO.contactForm_Submission(data.first_name, data.last_name, data.email, "Test comment", 'h1', "Thank You for your Message!"); // calling information from POM/ support folder 
   
})

it.only("Should not be able to submit a successful submission via contact contact us form as all fields are required", () => {
   // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html") // classic way to get to a page
   // cy.visit("http://www.webdriveruniversity.com") // as contacy us is opening in new tab we are trying to workaround it 
   // cy.get("#contact-us").invoke("removeAttr", "target").click({force:true}) 
   // cy.get('[name="first_name"]').type("Test")
   // cy.get('[name="last_name"]').type("Test")
   // cy.get('textarea.feedback-input').type("Test comment")
   // cy.get('[type="submit"]').click()
   // cy.get('body').contains('Error: all fields are required')
   // cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, " ", "How can I learn Cypress?", 'body', 'Error: Invalid email address');
   const contact_Us_PO = new Contact_Us_PO();
   contact_Us_PO.contactForm_Submission(data.first_name, data.last_name, " ", "How can I learn Cypress?", 'body', 'Error: Invalid email address')
   
   
})

})
