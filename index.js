'use strict';
var Promise = require('promise')
module.exports = function domThen(obj, event) {
  return new Promise(function(resolve, reject) {
    obj['on' + (event || 'success')] = function(value) {
      resolve(event ? value : obj)
    }
    obj.onerror = reject
  })
}
