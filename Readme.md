
# domthen

  Promises for silly DOM callback crap.
  Inspired by how fucking awful the DOM callback convention is.

## Installation

    $ npm install domthen

  or

    $ component install nathan7/domthen

## API

### domthen(obj, event = 'success')

  Returns a promise, resolved when `obj['on' + event]` is called, rejected when `obj.onerror` is called.
  If no event name is given, 'success' will be used and the resolution value of the promise will be `obj`.

## License

  MIT
