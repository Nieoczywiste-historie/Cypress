require('cypress-xpath');
// this code can check if all elemenst are visable on the page 
describe('Alias and invoke', () => {

    it("Validate a specific hair care product", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke("text").as("productThumbnail")
        cy.get("@productThumbnail").its("length").should("be.gt", 5)
        cy.get("@productThumbnail").should("include", "Seaweed Conditioner")


    });

    it("Challenge 1- check product on home page/ Validate product Thumbnail", () => {
        cy.visit("https://www.automationteststore.com/");
        // cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get(".thumbnail").as("ProductThumbnail")
        cy.get("@ProductThumbnail").its("length").should("be.eq", 16)
        cy.get("@ProductThumbnail").find(".productcart").invoke("attr", "title").should("include", "Add to Cart") // invoke odwołanie idzie w parze z include


    });

    it.only("Calculate total of normal and sale products", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get(".thumbnail").as("ProductThumbnail")
        // cy.get("@ProductThumbnail").find(".oneprice").each(($el, index, $list) => {
        //     cy.log($el.text()) //szuka wszystkich produktów i pokazuje cene w log
        //     })
        cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice") // tutaj nazywamy naszą zmienną do której się odwołujemy
        cy.get(".thumbnail").find(".pricenew").invoke("text").as("saleItemPrice")
        var itemsTotal = 0; // tutaj robimy store naszego total price 
        cy.get("@itemPrice").then($linkText => {  //kod do ceny bez promocji
            var itemsPriceTotal = 0;
            var itemPrice = $linkText.split("$"); //split into array
            var i;
            for(i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                itemsPriceTotal += Number(itemPrice[i])
                }
                itemsTotal += itemsPriceTotal;
                cy.log("Non sale price items total: " + itemsPriceTotal)
            
        })

        cy.get("@saleItemPrice").then($linkText => {
            var saleItemsPrice = 0;
            var saleItemPrice = $linkText.split("$");
            var i;
            for(i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i])
                saleItemsPrice += Number(saleItemPrice[i])
                }
                itemsTotal += saleItemsPrice;
                cy.log("Sale price items total: " + saleItemsPrice)
        })
        .then(() => { //validation if total price is correct
            cy.log("The total price of all products: " + itemsTotal)
            expect(itemsTotal).to.eq(625.6) //assertion
        })
    });

})