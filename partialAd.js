function partial(add, ...args) {
    return function (...otherArgs) {
      return add(...args, ...otherArgs);
    };
  }
  
  function add(a, b, c) {
    return a + b + c;
  }
  
  const add5 = partial(add, 5);
  
  console.log(add5(10, 20)); 