describe("Locators",()=>{
    it("CSS Locator",()=>{

        cy.visit(
          "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
        );

        //Username
        cy.get('[name="username"]').type("Admin");
        cy.get('[name="password"]').type("admin123");
        cy.get(".oxd-button").click();

    //  cy.get("p.oxd-userdropdown-name").click();
      cy.get("ul", { timeout: 10000 })
        .should("be.visible")
        .and("have.length", 4);
      
    })
})