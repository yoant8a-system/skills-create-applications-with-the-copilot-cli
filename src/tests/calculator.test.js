const { add, sub, mul, div, mod, pow, sqrt } = require('../calculator-lib');

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

  // New operation tests
  test('modulo operation', () => {
    expect(mod(10, 3)).toBe(1);
    expect(mod(-10, 3)).toBe(-1); // JS remainder keeps sign of dividend
    // image example
    expect(mod(5, 2)).toBe(1);
  });

  test('power operation', () => {
    expect(pow(2, 8)).toBe(256);
    expect(pow(2.5, 2)).toBeCloseTo(6.25);
    // image example
    expect(pow(2, 3)).toBe(8);
  });

  test('square root operation', () => {
    expect(sqrt(9)).toBe(3);
    expect(sqrt(2)).toBeCloseTo(Math.sqrt(2));
    // image example
    expect(sqrt(16)).toBe(4);
  });

  test('sqrt of negative throws', () => {
    expect(() => sqrt(-1)).toThrow('Square root of negative number');
  });

  test('modulo by zero throws', () => {
    expect(() => mod(5, 0)).toThrow('Division by zero');
  });
});
