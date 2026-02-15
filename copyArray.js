function copyArray(arr) {
  let newArr = [];
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
}

console.log(copyArray([10, 20, 30, 40, 50]));
console.log(copyArray([5]));
console.log(copyArray([]));
console.log(copyArray([1, 2, 3, 4]));
console.log(copyArray([1, 2, 3, 4, 5]));
console.log(copyArray([-1, -5, -10, -20]));
console.log(copyArray([-10, 0, 5, -3, 8]));
console.log(copyArray([1, 2, 2, 3, 3]));
console.log(copyArray([999999, 1000000, 123456789]));

let original = [1, 2, 3];
let copied = copyArray(original);

copied[0] = 100;

console.log("orginal Arr: ", original);
console.log("Copied Arr: ", copied);
