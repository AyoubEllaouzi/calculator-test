const { add, multiply, subtract, divide } = require('./calculator');

describe('Math Functions', () => {
  describe('add', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(add(1, 2)).toBe(3);
    });
  });

  describe('multiply', () => {

    test('multiplies 3 * 4 to equal 12', () => {
      expect(multiply(3, 4)).toBe(12);
    });
  });

  describe('subtract', () => {
    test('subtracts 5 - 3 to equal 2', () => {
      expect(subtract(5, 3)).toBe(2);
    });

  });

  describe('divide', () => {
    test('divides 10 / 2 to equal 5', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('throws error when dividing by zero', () => {
      expect(() => {
        divide(10, 0);
      }).toThrow('Division by zero');
    });
  });


});
