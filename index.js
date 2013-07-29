'use strict';
var Promise = require('promise')
module.exports = domThen
function domThen(obj) {
  return new Promise(function(resolve, reject) {
    obj.onsuccess = function() {
      resolve(obj.result)
    }
    obj.onerror = function() {
      reject(obj.error)
    }
  })
}

domThen.proto = function(obj) {
  for (var key in protoFns) if (protoFns.hasOwnProperty(key))
    obj.prototype[key] = protoFns[key]
}

var protoFns =
  { then: function(onFulfilled, onRejected) {
      return domThen(this).then(onFulfilled, onRejected)
    }
  , done: function(onFulfilled, onRejected) {
      domThen(this).done(onFulfilled, onRejected)
    }
  }
