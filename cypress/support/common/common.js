/// <reference types="cypress" />

class Common
{
    link(){
        return 'https://www.olx.com.pk/'
    }

    searchBox(){
        return '[type="search"]';
    }
    firstResult(){
        return '[aria-label="Title"]';
    }
}
export default Common