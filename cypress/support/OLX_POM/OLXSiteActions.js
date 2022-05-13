/// <reference types="cypress" />

import Common from '../common/common.js'

const common = new Common();

class OLXSearch
{
    visit(){
        
        cy.visit(Cypress.env('baseURL'));
    }

    search(str){
        cy.get(common.searchBox()).type(str+'{enter}');
        return this;
    }
    match(str){
        cy.get(common.firstResult()).eq(0).contains(str, { matchCase: false });
    }
}
export default OLXSearch