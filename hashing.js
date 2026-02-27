let obj = {
  name: "JDCodebase",
  age: 30,
  25: "age",
};

console.log(obj.name);
console.log(obj["name"]);
console.log(obj["25"]);

let map = new Map();
map.set("name", "JDCodebase");
map.set(1, "Number Key");

console.log(map);
console.log(map.get("name"));
console.log(map.get(1));
console.log(map.size);
