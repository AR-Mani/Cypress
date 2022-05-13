/// <reference types="Cypress" />

class LoginPage
{
    vist(){
        cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
    }
    email(str){
        const email = cy.get('#Email')
        email.clear()
        email.type(str)
        return this
    }
    password(str){
        const password = cy.get('#Password')
        password.clear()
        password.type(str)
        return this
    }
    clickLogin(){
        const btnLogin = cy.get('[type="submit"]')
        btnLogin.click()
    }
}

export default LoginPage