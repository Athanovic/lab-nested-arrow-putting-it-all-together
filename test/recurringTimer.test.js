const { recurringTimer, stopRecurringTimer } = require('../src/recurringTimer');

test('recurringTimer returns a timer ID', () => {
  const timerId = recurringTimer('Test', 10);
  expect(typeof timerId).toBe('number');
  stopRecurringTimer(timerId);
});
