function findMax(arr) {
  if (arr.length === 0) return undefined;

  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;

  // return Math.max(...arr);
}

console.log(findMax([10, 20, 30, 40, 50]));
console.log(findMax([5]));
console.log(findMax([]));
console.log(findMax([1, 2, 3, 4]));
console.log(findMax([-1, -5, -10, -20]));
console.log(findMax([-10, 0, 5, -3, 8]));
console.log(findMax([1, 2, 2, 3, 3]));
console.log(findMax([999999, 1000000, 123456789]));
