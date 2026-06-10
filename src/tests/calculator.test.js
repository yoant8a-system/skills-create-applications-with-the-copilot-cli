const { add, sub, mul, div } = require('../calculator-lib');

describe('Calculator library - basic operations', () => {
  test('2 + 3 = 5 (image example)', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('10 - 4 = 6 (image example)', () => {
    expect(sub(10, 4)).toBe(6);
  });

  test('45 * 2 = 90 (image example)', () => {
    expect(mul(45, 2)).toBe(90);
  });

  test('20 / 5 = 4 (image example)', () => {
    expect(div(20, 5)).toBe(4);
  });

  test('supports floating point operations', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3, 5);
    expect(div(1.5, 0.5)).toBeCloseTo(3);
  });

  test('supports negative numbers', () => {
    expect(add(-2, 3)).toBe(1);
    expect(mul(-4, -5)).toBe(20);
  });

  test('division by zero throws', () => {
    expect(() => div(5, 0)).toThrow('Division by zero');
  });

  test('invalid numeric input throws', () => {
    expect(() => add('foo', 1)).toThrow(TypeError);
    expect(() => sub(1, NaN)).toThrow(TypeError);
  });
});
