'use strict';

const test = require('ava');
const randomRGBColor = require('./');

test('should return an object with valid RGB color values', (t) => {
  t.plan(40);

  for (let i = 0; i < 10; i++) {
    const color = randomRGBColor(0, 255, 0, 255, 0, 255, 0, 1, true);
    t.true(Number(color.red) >= 0 && Number(color.red) <= 255);
    t.true(Number(color.green) >= 0 && Number(color.green) <= 255);
    t.true(Number(color.blue) >= 0 && Number(color.blue) <= 255);

    const alpha = parseFloat(color.alpha);
    if (color.alpha.includes('%')) {
      t.true(alpha >= 0 && alpha <= 100);
    } else {
      t.true(alpha >= 0 && alpha <= 1);
    }
  }
});
