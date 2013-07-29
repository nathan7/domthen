'use strict';
var Promise = require('promise')
module.exports = domThen
function domThen(obj, event) {
  return new Promise(function(resolve, reject) {
    obj['on' + (event || 'success')] = function(value) {
      resolve(event ? value : obj.result)
    }
    obj.onerror = reject
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
