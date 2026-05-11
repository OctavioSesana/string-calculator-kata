const { add } = require('../src/StringCalculator');

describe('StringCalculator', () => {
  test('add("") returns 0', () => {
    expect(add("")).toBe(0);
  });

  test('add("1") returns 1', () => {
  expect(add("1")).toBe(1);
});

});

