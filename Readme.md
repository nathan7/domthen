
# domthen

  Promises for silly DOMRequest crap.
  Inspired by how fucking awful the DOM callback convention is.

## Installation

    $ npm install domthen

  or

    $ component install nathan7/domthen

## API

### domthen(obj)

  Returns a promise, resolved with `obj.result` when `obj.onsucces` is called, rejected with `obj.error` when `obj.onerror` is called.

#### domthen.proto(constructor)

  Adds .done and .then to the given constructor's prototype.
  For example, `domthen.proto(DOMRequest)`.

## License

  MIT
