// slice, reduce, splice, concat;

const animals = ["cat", "goat", "horse", "snake"];
const nums = [2, 3, 4, 1];

const subString = animals.slice(2);
// console.log("subString", subString);

const reduceArray = nums.reduce(function (store, curValue, curIdx, arr) {
  console.log("store", store);
  console.log("curVaule", curValue);
  return store + curValue;
}, 0);

const resultArray = animals.reduce(function (store, curValue, curIdx, arr) {
  //   console.log("store", store);
  //   console.log("curVaule", curValue);
  store[curIdx] = curValue;
  return store;
}, {});

// console.log("reduceArray", resultArray);

// const joinArray = animals.concat(nums);
// console.log("joinArray", joinArray);

const joinArray = [...nums, ...animals];
console.log("joinArray", joinArray);

// spread;

// const rsut = [...nums, ...animals];
// const objres = {...obje, ...secObje};
