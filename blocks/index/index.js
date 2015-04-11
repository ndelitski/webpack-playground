require('./index.less');

var template = require('./index.jade');
var button = require('blocks/button/button.js');

$(function () {
  $('body')
    .html(template())
    .append(button('Yes'))
    .append(button('No', 'bullhorn'));
})
