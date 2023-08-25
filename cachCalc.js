function createCachingFunction() {
  const cach = {};
  return function (num) {
    if (num in cach) {
      return cach[num] + " cached";
    }

    cach[num] = num * 2;
    return cach[num] + " calculated";
  };
}
const cachedCalculation = createCachingFunction();

console.log(cachedCalculation(5));
console.log(cachedCalculation(5));
console.log(cachedCalculation(10));
console.log(cachedCalculation(10));
