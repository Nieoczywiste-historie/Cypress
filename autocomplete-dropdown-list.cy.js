
/// <reference types="cypress" />
require('cypress-xpath');

describe('Verify autocomplete dropdown list via webdriveruni', () => {
   


it("Select specyfic product via autocomplete list", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click({force:true}) //jquery command to remove target which is providing new tab
    cy.get("#myInput").type("A")

    cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
        const prod = $el.text();
        const productToSelect = "Avacado";

        if(prod === productToSelect) {
            // $el.click();
            $el.trigger("click")

            cy.get('#submit-button').click();
            cy.url().should("include", productToSelect);
        }
    }).then(() => {
        cy.get("#myInput").type("G")

    cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
        const prod = $el.text();
        const productToSelect = "Grapes";

        if(prod === productToSelect) {
            // $el.click(); // not longer used
            $el.trigger("click")

            cy.get('#submit-button').click();
            cy.url().should("include", productToSelect);
        }
    })

    })
})


})



// describe("Verify Autocomplete dropwdown lists via webdriveruni", () => {
//     it("Select specific product via autocomplete list", () => {
//         cy.visit("http://www.webdriveruniversity.com")
//         cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})

//         cy.get('#myInput').type('A')

//         cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
//             const prod = $el.text();
//             const productToSelect = 'Avacado';

//             if(prod === productToSelect) {
//                 $el.click();

//                 cy.get('#submit-button').click();
//                 cy.url().should('include', productToSelect)
//             }
//         })
//     });
// })