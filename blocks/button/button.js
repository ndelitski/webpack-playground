require('./button.less');
require('blocks/icon/b-icon.less');

module.exports = function(text, icon) {
  return require('./button.jade')({label: text, icon: icon || 'camera'});
}
