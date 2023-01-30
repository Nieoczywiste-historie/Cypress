/// <reference types="cypress" />

describe('Post Request', () => {
    var titleOfPosts = new Array();
    let randomTitle = Math.random().toString(36).substring(1) + Math.random().toString(36).substring(1) // generating random title
    it("Create a new post via /posts API", () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body: {
                // title: "Cypress post request", //adding title with populated title 
                title: randomTitle,
                author: "Me"
                 
            }
            
         }).then(response => {
            expect(response.status).to.eq(201)
         })
    })
    it("Validate title of latest post", () => {
       cy.request({
           method: "GET",
           url: "http://localhost:3000/posts",
           headers: {
            accept: "application/json"

           }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body));
            body.forEach(function(item) {
                titleOfPosts.push(item["title"]);
            })
        }).then(() => {
            var latestPost = titleOfPosts[titleOfPosts.length -1]
            // expect(latestPost).to.eq("Cypress post request"); //checking if title is as we added 
            expect(latestPost).to.eq(randomTitle);
        })
    })

    
    })