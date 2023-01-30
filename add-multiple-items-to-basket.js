import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO" 
import AutoStore_HairCare_PO from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO"   // page object modeling calling
require('cypress-xpath');
// this code can check if all elemenst are visable on the page 
describe('Add multiple items to basket', () => {
    const autoStore_Homepage_PO = new AutoStore_Homepage_PO();
    const autoStore_HairCare_PO = new AutoStore_HairCare_PO();

    before(function(){
        cy.fixture("products").then(function(data) {
            globalThis.data = data;
        })
    })
    beforeEach(() => {
        // cy.visit("https://www.automationteststore.com/");  //Step 1 
        // cy.get("a[href*='product/category&path=']").contains("Hair Care").click(); // Step 2 
        autoStore_Homepage_PO.accesHomepage(); // Page Object Step 1 
        autoStore_Homepage_PO.clickOn_HairCare_Link(); // Page Object Step 2

    })
   it("Add specyfic item to basket", () => {
        
    // globalThis.data.productName.forEach(function(element){ // ponizszy kod działa razem jako przykład uzycia json w folderze fixture
    //     cy.addProductToBasket(element)
    // });
    // cy.get(".dropdown-toggle > .fa").click()
    autoStore_HairCare_PO.addHairCareProductsToBasket();
    }); 
   
})
  