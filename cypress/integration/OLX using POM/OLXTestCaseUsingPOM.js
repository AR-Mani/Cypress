/// <reference types="cypress" />

import OLXClass from '../../support/OLX_POM/OLXSiteActions'
const objOLX = new OLXClass()

it('OLX test', () => {

  objOLX.visit()

  objOLX.search('Iphone 12');

  objOLX.match('iphone 12');

});