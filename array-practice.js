// -----------------------------------
// 1️⃣ Insert Element at Specific Index
// -----------------------------------

function insertAtIndex(arr, index, value) {
  console.log("Insert at Index");

  // Step 1: Shift elements to the right
  // Start from the end and move backward
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1]; // Move element one position ahead
  }

  // Step 2: Insert the new value at given index
  arr[index] = value;

  return arr; // Return updated array
}

// Test Case
console.log(insertAtIndex([10, 20, 30, 40], 2, 25));

// -----------------------------------
// 2️⃣ Delete Element at Specific Index
// -----------------------------------

function deleteAtIndex(arr, index) {
  console.log("Delete at Index");

  // Step 1: Shift elements to the left
  // Overwrite the element to be deleted
  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]; // Move next element backward
  }

  // Step 2: Reduce array length by 1
  arr.length = arr.length - 1;

  return arr; // Return updated array
}

// Test Case
console.log(deleteAtIndex([10, 20, 30, 40], 1));

// -----------------------------------
// 3️⃣ Rotate Array Right by One Position
// -----------------------------------

function rotateRightByOne(arr) {
  console.log("Rotate Right By One");

  // Step 1: Store the last element
  let last = arr[arr.length - 1];

  // Step 2: Shift all elements to the right
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1]; // Move previous element forward
  }

  // Step 3: Place last element at index 0
  arr[0] = last;

  return arr; // Return rotated array
}

// Test Case
console.log(rotateRightByOne([1, 2, 3, 4]));
