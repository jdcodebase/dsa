let set = new Set([1, 2, 3, 3, 4]);

console.log(set);

let mySet = new Set();
console.log(mySet);

mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);

console.log(mySet);

mySet.delete(30);

console.log(mySet);

console.log(mySet.has(20));
console.log(mySet.has(30));

console.log(mySet.size);

let arr = [1, 2, 2, 3, 4, 4, 5];
// let set1 = new Set(arr);
// console.log(set1);
// let unique = [...set1];
// console.log(unique);

let unique = [...new Set(arr)];
console.log(unique);

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let set2 = new Set(arr1);
let intersection = arr2.filter((num) => set2.has(num));

console.log(intersection);
