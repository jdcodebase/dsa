function countFrequency(arr) {
  // let freq = {};

  // for (let num of arr) {
  //   if (freq[num]) {
  //     freq[num]++;
  //   } else {
  //     freq[num] = 1;
  //   }
  // }

  // return freq;

  let map = new Map();

  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  return map;
}

console.log(countFrequency([1, 2, 1, 3, 2, 1]));
