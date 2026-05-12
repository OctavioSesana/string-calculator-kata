const { add } = require('../src/StringCalculator');

describe('StringCalculator', () => {
  test('add("") returns 0', () => {
    expect(add("")).toBe(0);
  });

  test('add("1") returns 1', () => {
  expect(add("1")).toBe(1);
});

    test('add("1,2") returns 3', () => {
    expect(add("1,2")).toBe(3);
    });

});

