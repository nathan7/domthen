'use strict';
var Promise = require('promise')
module.exports = function domThen(obj, event) {
  return new Promise(function(resolve, reject) {
    obj['on' + (event || 'success')] = resolve
    obj.onerror = reject
  })
}
