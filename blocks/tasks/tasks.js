require('./tasks.less');

var button = require('blocks/button/button.js');

$(function () {
  $('body')
    .append(button('Yes'))
    .append(button('No'));
})
