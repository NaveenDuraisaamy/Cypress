describe("All Assertions", ()=>{
    it("Assertions", ()=>{

        cy.visit(
          "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
        );

        //Separate Assertions
        // cy.url().should('include','orangehrmlive')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','orangehrmlive');

        //Chaining Assertions using should
        // cy.url().should('contain','orangehrmlive')
        // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('include','orangehrmlive')

        //Chaining Assertions using and
        // cy.url().should('contain','orangehrmlive')
        // .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .and('include','orangehrmlive')
        
        //Chaining Assertions using and with title
        // cy.title().should('include','OrangeHRM')
        // .should('not.eq','opOrangeHRM')
        // .and('not.contain','oOrangeHRM')


        //Image Verification
        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist');

    })
})