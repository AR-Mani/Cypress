/// <reference types="cypress" />

class Common
{
    searchBox(){
        return '[type="search"]';
    }
    firstResult(){
        return '[aria-label="Title"]';
    }
}
export default Common