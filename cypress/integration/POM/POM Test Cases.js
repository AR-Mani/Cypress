/// <reference types="cypress" />

import Login from './Login.js'

it('Login Test', function(){
    const objLogin = new Login()

    objLogin.vist()
    objLogin.email("admin@yourstore.com")
    objLogin.password("admin")
    objLogin.clickLogin()
    cy.title().should('be.equal',"Dashboard / nopCommerce administration")

})