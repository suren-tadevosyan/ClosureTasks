function createCounter() {
  let num = 0;
  return function () {
    return ++num;
  };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(createCounter()());
console.log(createCounter()());
