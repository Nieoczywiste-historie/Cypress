

require('cypress-xpath');

describe('Test mouse actions', () => {
   


it("Scroll element ito view ", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({force:true}) //jquery command to remove target which is providing new tab
    
})

it("Should be able to drag and dop", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({force:true}) //jquery command to remove target which is providing new tab
    cy.get("#draggable").trigger("mousedown", {which: 1}) // mousedown click on element - which 1 is center 
    cy.get("#droppable").trigger("mousemove").trigger("mouseup", {force:true})
})

it("Should be able to perform double mouse click", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({force:true}) //jquery command to remove target which is providing new tab
   cy.get("#double-click").dblclick()
})

it.only("Should be able to hold down the left mouse click button on a given element", () => {
    cy.visit("http://www.webdriveruniversity.com")
    cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({force:true}) //jquery command to remove target which is providing new tab
   cy.get("#click-box").trigger("mousedown", {which: 1}).then(($element) => {
    expect($element).to.have.css("background-color", "rgb(0, 255, 0)")
   })
})


})