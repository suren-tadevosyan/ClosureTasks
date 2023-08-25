function createCalculator(str) {
  const calculatorObj = {
    add: function (...args) {
      return args.reduce((a, b) => a + b, 0);
    },
    subt: function (...args) {
      return args.reduce((a, b) => a - b);
    },
    multiply: function (...args) {
      return args.reduce((a, b) => a * b, 1);
    },
    divide: function (...args) {
      return args.reduce((a, b) => a / b);
    },
  };
  return function Calculate(...args) {
    if (str in calculatorObj) {
      return calculatorObj[str](...args);
    }

    return "Invalid operation!";
  };
}

const add = createCalculator("add");
const subt = createCalculator("subt");
const multiply = createCalculator("multiply");
const divide = createCalculator("divide");

console.log(add(3, 5, 10));
console.log(subt(3, 5, 10));
console.log(multiply(3, 5));
console.log(divide(3, 5));
