const test = require('tape-async');
const isMovement = require('..');

const movementKeys = {
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

Object.keys(movementKeys).forEach(movementKey => {
  test(movementKey + ' is movement key', t => {
    t.ok(isMovement({
      which: movementKeys[movementKey]
    }));
  });
});


if (global.collider) {
  global.createInput = () => {
    const inp = document.createElement('input');
    document.body.appendChild(inp);
    inp.addEventListener('keydown', e => {
      console.log(isMovement(e)); // eslint-disable-line
    });

    global.collider.open();
  };

  test.syncTest('quit test environment.', t => {
    t.ok(true, 'quit');
    setTimeout(() => global.collider.quit(), 100);
  });
}
