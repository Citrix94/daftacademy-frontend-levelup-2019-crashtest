function* fib(num, current = 0, next = 1) {
  if (num === 0) {
    return current;
  }
  if (num < 0 || num % 1 !== 0) {
    yield 'Invalid number';
  }
  for (i = 0; i < num; i++) {
    yield* fib(num - 1, next, current + next);
    yield current;
  }
}

let num = 0;

const iterator = Array.from(fib(num)).reverse();

console.log(iterator);

module.exports = fib;

