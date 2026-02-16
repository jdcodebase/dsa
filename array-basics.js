let arr = [10, 20, 30, 40];
console.log(arr);

console.log(arr[0]);
console.log(arr[2]);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.push(50);
console.log(arr);

let arr2 = [10, 20, 30, 40];
let index = 2;
let value = 25;

for (let i = arr2.length; i > index; i--) {
  arr2[i] = arr2[i - 1];
}
console.log(arr2);
arr2[index] = value;
console.log(arr2);

arr2.pop();
console.log(arr2);

let arr3 = [10, 20, 30, 40];
let deleteIndex = 1;
console.log(arr3);

for (let i = deleteIndex; i < arr3.length - 1; i++) {
  arr3[i] = arr3[i + 1];
}
arr3.length = arr3.length - 1;
console.log(arr3);
