const { add } = require('../src/StringCalculator');

describe('StringCalculator', () => {
  test('add("") returns 0', () => {
    expect(add("")).toBe(0);
  });
});