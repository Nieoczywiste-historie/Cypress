/// <reference types="cypress" />

// comment url, create a comment, body value is unick and dynamic and also post ID, find recent comment and delete
describe('Post, Get, Delete Request', () => {
    var comments = new Array();
    let randomBody = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1) // generating random body
    let randomId = Math.floor(Math.random() * 1000 + 1)

    it("Create a new comment ", () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/comments",
            body: { 
                body: randomBody,
                postId: randomId
                 
            }
            
         }).then(response => {
            expect(response.status).to.eq(201)
         })
    })

    it("Locate and assert the new comment", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/comments",
            headers: {
             accept: "application/json"
 
            }
         }).then(response => {
             let body = JSON.parse(JSON.stringify(response.body));
             body.forEach(function(item) {
                 comments.push(item["body"]);
             })
         }).then(() => {
             var latestComment = comments[comments.length -1]
             // expect(latestPost).to.eq("Cypress post request"); //checking if title is as we added 
             expect(latestComment).to.eq(randomBody);
         })
    })

    it("Delete the new comment", () => {
        
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/comments/" + comments.length
             }).then(response => {
            expect(response.status).to.eq(200)
         })
    })
    
    })
    
    
  