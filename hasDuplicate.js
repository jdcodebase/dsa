function hasDuplicate(arr) {
  let set = new Set();

  for (let num of arr) {
    if (set.has(num)) {
      return [true, num];
    }

    set.add(num);
  }

  return false;
}

console.log(hasDuplicate([1, 2, 3, 4, 1, 2]));
