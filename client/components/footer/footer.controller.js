'use strict';

class FooterController {
  //start-non-standard
  menu = [{
    'title': 'News',
    'link': '/'
  }, {
    'title': 'Contact Us',
    'link': '/contact'
  }];

  //end-non-standard
}

angular.module('maxiProjectApp')
  .controller('FooterController', FooterController);
