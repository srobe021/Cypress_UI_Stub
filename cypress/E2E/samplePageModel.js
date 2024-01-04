class objectPage{


    elements ={


        usernameField : () => cy.get('#username'),

        passwordField : () => cy.get('#password'),

        loginBtn : () => cy.get('#log-in'),

        mainHeader : () =>  cy.get('#time')
        .should('have.text', 'Your nearest branch closes in: 30m 5s'),

        statusPins: () => cy.get('.assertions-link')
        .should('have.class', 'active')
    }


    clickLoginFields(){

        this.elements.usernameField().click().type("standard_user")
        this.elements.passwordField().click().type("secret_sauce")
        this.elements.loginBtn().click()
    }

    assertHeader() {
        this.elements.mainHeader()
    }

}

export default new objectPage();
