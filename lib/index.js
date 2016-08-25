'use strict';

require('./scss/styles');
const $ = require('jquery');

$('.dropdown-button').on('click', function() {
  console.log('hello');
  $('nav li').toggleClass('dropdown-show');
  $('.user-login-signup').toggleClass('noshow');

});
