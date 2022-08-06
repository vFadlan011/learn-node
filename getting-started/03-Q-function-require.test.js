const math = require('./03-P-function-export.js');

// Test Case Benar
test('6 + 6 adalah 12', () => {
  expect(math.penjumlahan(6, 6)).toBe(12);
});

test('8 - 4 adalah 4', () => {
  expect(math.pengurangan(8,4)).toBe(4);
});

test('4 * 4 adalah 16', () => {
  expect(math.perkalian(4,4)).toBe(16);
});

test('21 / 7 adalah 3', () => {
  expect(math.pembagian(21, 7)).toBe(3);
});

test('2 ^ 3 adalah 8', () => {
  expect(math.pemangkatan(2,3)).toBe(8);
});