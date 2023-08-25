function privateVariable(num) {
  let secretVar = num;
  return {
    get() {
      return secretVar;
    },

    set(newVar) {
      secretVar = newVar;
    },
  };
}

const secretValue = privateVariable(52);
console.log(secretValue.get());
secretValue.set(100);
console.log(secretValue.get());