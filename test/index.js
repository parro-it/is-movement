const test = require('tape-async');
const isMovement = require('..');

test('add details files', function *(t) {
  const result = yield isMovement();
  t.equal(result, 42);
});
