function buildPrefix(arr) {
  let prefix = [];

  prefix[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }

  return prefix;
}

console.log(buildPrefix([1, 2, 3, 4]));

function rangeSum(prefix, L, R) {
  if (L === 0) return prefix[R];

  return prefix[R] - prefix[L - 1];
}

let arr = [1, 2, 3, 4, 5];
let prefix = buildPrefix(arr);

console.log(rangeSum(prefix, 1, 3));
console.log(rangeSum(prefix, 0, 3));
console.log(rangeSum(prefix, 3, 4));
console.log(rangeSum(prefix, 2, 3));
