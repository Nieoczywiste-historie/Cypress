/// <reference types="cypress" />

const { isTaggedTemplateExpression } = require("typescript");



describe("Signup & Login", () => {
    let randomString = Math.random().toString(36).substring(2);
    // let username = "Auto" + randomString;
    let email = "Auto_email" + randomString + "@gmail.com";
    let password = "Password1";
    let answer = "Brad";

    describe("UI test", () => {
        beforeEach(() => {
            cy.viewport("macbook-13")
            cy.visit("http://localhost:3000/#/");
            cy.get('.close-dialog').click();
            cy.get('.cc-btn').click();
            cy.get('#navbarAccount').click();
            cy.get('#navbarLoginButton').click();
        })


        it("Test Valid Signup", () => {
            cy.get(".primary-link").contains("Not yet a customer?").click();
            cy.get('#emailControl').type(email);
            cy.get('#passwordControl').type(password);
            cy.get('#repeatPasswordControl').type(password);
            cy.get('.mat-select-placeholder').click();
            cy.get('.mat-option-text').contains("Your eldest siblings middle name?").click();
            cy.get('#securityAnswerControl').type(answer);
            cy.get('#registerButton').click();
            cy.get(".mat-simple-snack-bar-content").should("contain", "Registration completed successfully. You can now log in.")
        })
        it("Test Valid Login", () => {
            cy.get('#email').type(email);
            cy.get('#password').type(password);
            cy.get('#loginButton').click();
            cy.get('.mat-button-wrapper').contains(" Your Basket");

        })

    })

describe("API test", () => {
        const userCredential = {
            "email": email,
            "password": password
        }

    it("Test Login via API (Non UI)", () => {
        cy.request("POST", " http://localhost:3000/rest/user/login", userCredential)
        .then(response => {
        expect(response.status).to.eq(200);
        })

    })
    it("Login via Token (Non UI)", () => {
        cy.request("POST", " http://localhost:3000/rest/user/login", userCredential)
        .its('body').then( body => {
            const token = body.authentication.token
            cy.wrap(token).as("userToken")

            const userToken = cy.get("@userToken");
            cy.visit("http://localhost:3000/", {
                onBeforeLoad(browser) {
                    browser.localStorage.setItem("token", userToken)
                }
            });
            cy.wait(2000);
            cy.get('.close-dialog').click();
            cy.get('.mat-button-wrapper').contains(" Your Basket");



            
        })

    })
})

})
