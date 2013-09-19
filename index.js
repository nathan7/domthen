'use strict';
var Promise = require('promise')
module.exports = domThen
function domThen(obj) {
  return new Promise(function(resolve, reject) {
    if (obj.readyState === 'done') {
      if (!obj.error)
        success()
      else
        error()
    }
    else {
      obj.onerror = error
      obj.onsuccess = success
    }
    function success() { resolve(obj.result) }
    function error()   { reject (obj.error ) }
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
