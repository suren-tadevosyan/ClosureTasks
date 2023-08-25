function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function memoize(func) {
  const memory = {};
  return function (num) {
    if (num in memory) {
      return memory[num] + " cached";
    } else {
      memory[num] = func(num);

      return memory[num] + " calculated";
    }
  };
}

const memoizedFibonacci = memoize(fib);
console.log(memoizedFibonacci(10));
console.log(memoizedFibonacci(10));
console.log(memoizedFibonacci(10));
console.log(memoizedFibonacci(5));
console.log(memoizedFibonacci(5));
