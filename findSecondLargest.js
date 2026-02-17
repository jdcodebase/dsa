function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    if (current > largest) {
      secondLargest = largest;
      largest = current;
    } else if (current > secondLargest && current !== largest) {
      secondLargest = current;
    }
  }
  console.log(largest, secondLargest);
  return secondLargest;
}

console.log(findSecondLargest([4, 2, 9, 1, 7]));
