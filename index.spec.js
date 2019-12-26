import { sum } from './index';

test('adds 1 + 2 to equal 3', () => {
  const result = sum(1,2);
  expect(result).toBe(3);
});

test('adds 5 + 8 to equal 13', () => {
  const result = sum(5,8);
  expect(result).toBe(13);
});
