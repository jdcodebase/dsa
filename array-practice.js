function insertAtIndex(arr, index, value) {
  console.log("Insert at Index");

  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }

  arr[index] = value;
  return arr;
}
console.log(insertAtIndex([10, 20, 30, 40], 2, 25));

function deleteAtIndex(arr, index) {
  console.log("Delete at Index");

  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;
  return arr;
}
console.log(deleteAtIndex([10, 20, 30, 40], 1));

function rotateRightByOne(arr) {
  console.log("Rotate Right By One");

  let last = arr[arr.length - 1];

  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = last;
  return arr;
}
console.log(rotateRightByOne([1, 2, 3, 4]));
