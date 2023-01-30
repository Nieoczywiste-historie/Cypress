/// <reference types="cypress" />

describe('Update Request', () => {
   
    it("Update an existing post via /posts API", () => {
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/2", //update 2nd post
            body: {
                title: "Cypress update request- test cypress",
                author: "New me"
                 
            }
            
         }).then(response => {
            expect(response.status).to.eq(200)
         })
    })
    
    
    })