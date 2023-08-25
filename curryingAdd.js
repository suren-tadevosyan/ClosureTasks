function add(a, b, c) {
  return a + b + c;
}

function curry(func) {
  const legnthOfParams = func.length;
  return function (...a) {
    if (a.length >= legnthOfParams) {
      return func(...a);
    }
    return function (...b) {
      return function (...c) {
        return func(...a, ...b, ...c);
      };
    };
  };
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));
console.log(curriedAdd(1, 2)(3));
console.log(curriedAdd(1, 2, 3));
