const calculator = require('./calcutor');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

it('should work', () => {
  expect(calculator.sub(8, 4)).toBe(4);
});

it('should work', () => {
  expect(calculator.mult(4,9)).toBe(36);
});

it('Should work', ()  => {
  expect(calculator.div(9, 3)).toBe(3);
});

