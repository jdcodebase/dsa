function reverseArray(arr) {
  let revArr = [];
  let n = arr.length;

  for (let i = n - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }

  return revArr;
}

console.log(reverseArray([10, 20, 30, 40, 50]));
console.log(reverseArray([5]));
console.log(reverseArray([]));
console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray([-1, -5, -10, -20]));
console.log(reverseArray([-10, 0, 5, -3, 8]));
console.log(reverseArray([1, 2, 2, 3, 3]));
console.log(reverseArray([999999, 1000000, 123456789]));
