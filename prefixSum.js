function prefixSum(arr) {
  let result = [];

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];

    result.push(sum);
  }

  return result;
}

console.log(prefixSum([1, 2, 3, 4]));
