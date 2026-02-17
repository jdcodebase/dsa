function countFrequency(arr) {
  let freq = {};

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (freq[value]) {
      freq[value]++;
    } else {
      freq[value] = 1;
    }
  }

  return freq;
}

console.log(countFrequency([1, 2, 1, 3, 2, 1]));
