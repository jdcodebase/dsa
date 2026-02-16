// ------------------------------
// 1️⃣ Creating an Array
// ------------------------------

let arr = [10, 20, 30, 40]; // Array with 4 elements
console.log(arr); // Print full array

// ------------------------------
// 2️⃣ Indexing (Direct Access)
// ------------------------------

console.log(arr[0]); // Access element at index 0 → 10
console.log(arr[2]); // Access element at index 2 → 30

// ------------------------------
// 3️⃣ Traversal (Visiting Each Element)
// ------------------------------

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // Print each element one by one
}

// ------------------------------
// 4️⃣ Insert at End (O(1))
// ------------------------------

arr.push(50); // Adds 50 at the end
console.log(arr); // [10, 20, 30, 40, 50]

// ------------------------------
// 5️⃣ Insert at Specific Index (O(n))
// Example: Insert 25 at index 2
// ------------------------------

let arr2 = [10, 20, 30, 40];
let index = 2; // Position where we want to insert
let value = 25; // Value to insert

// Step 1: Shift elements to the right
for (let i = arr2.length; i > index; i--) {
  arr2[i] = arr2[i - 1]; // Move element one step forward
}

console.log(arr2); // After shifting (gap created)

// Step 2: Place the new value at desired index
arr2[index] = value;

console.log(arr2); // Final array after insertion

// ------------------------------
// 6️⃣ Delete from End (O(1))
// ------------------------------

arr2.pop(); // Removes last element
console.log(arr2);

// ------------------------------
// 7️⃣ Delete at Specific Index (O(n))
// Example: Delete element at index 1
// ------------------------------

let arr3 = [10, 20, 30, 40];
let deleteIndex = 1;

console.log(arr3); // Before deletion

// Step 1: Shift elements to the left
for (let i = deleteIndex; i < arr3.length - 1; i++) {
  arr3[i] = arr3[i + 1]; // Overwrite current with next element
}

// Step 2: Reduce array length
arr3.length = arr3.length - 1;

console.log(arr3); // Final array after deletion
