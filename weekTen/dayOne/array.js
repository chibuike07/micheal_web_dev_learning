// array is reffered to an a container that can hold larger items;
// push, pop, shift, unshift, includes, map, sort, filter, forEach, splice, slice, fill, reduce, splice, concat;

const animals = ["dog", "cat", "horse", "snake"];
const num = [1, 5, 3, 2, 6, 4];
const person = {};

animals.push("goat");

// animals.pop();

/* The `animals.shift();` method is removing the first element from the `animals` array and shifting
all other elements to a lower index. */
// animals.shift();

// animals.unshift("parrot", "lion");
console.log("animals", animals);

// const result = animals.includes("horse");
// const result = animals.includes("dog", 1);

// console.log("result", result);

// const result = animals.map(function (value, index, arra) {
//   console.log("value", value);
//   console.log("index", index);
//   console.log("array", arra);
//   return value;
// });
// const result = num.map(function (value, index, arra) {
//   console.log("value", value);
//   console.log("index", index);
//   console.log("array", arra);
//   return value * 2;
// });

// console.log("result", result);

// const result = num.sort();
// console.log("result", result);
// console.log("nums", num);

// person.name = "michael";
// person["isFair"] = true;

// console.log("person", person);
// mutable and immutable array method;

console.log("num", num);
// // ascending
// const result = num.sort(function (a, b) {
//   return a - b;
// });
// console.log("result", result);
// descending
// const result = num.sort(function (a, b) {
//   return b - a;
// });

// const result = num.sort(function (a, b) {
//   return (a & 1) - (b & 1);
// });

// const result = num.sort(function (a, b) {
//   return (b & 1) - (a & 1);
// });
// console.log("result", result);

// const result = animals.sort(function (a, b) {
//   return a.localeCompare(b);
// });

// console.log("result", result);

// const result = animals.filter(function (v) {
//   return v === "horse";
// });

// num.push(2);

// console.log("num", num);

// const resp = num.filter(function (v, i, a) {
//   return a.indexOf(v) === i;
// });

// num.forEach(function (v, i, a) {
//   console.log("v", v);
// });

// new set;

// const val = new Set([...num]);

// console.log("val", val);
// console.log("result", result);
// console.log("resp", resp);

// animals.splice(0, 1,);
// animals.splice(0, 1, "boy");

// const result = animals.slice(0, 2);

// console.log("result", result);

// const res = animals.fill("chi");
// const res = animals.fill("chi", 2);
const res = animals.fill("chi", 1, 3);
console.log("animals", animals);
// console.log("animals", animals);
