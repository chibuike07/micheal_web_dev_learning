// a function is a block scope variable that is used for a particular operation.

// function expression , function declaration, and arrow function.
function sumNumbers() {
  const first = document.querySelector("#first").value;
  const second = document.querySelector("#second").value;
  const preElem = document.querySelector("#result");
  //   const btn = document.querySelector("#btn");

  const result = Number(first) + Number(second);
  //   const result = +first + +second;
  //   const result = parseInt(first, 10) + parseInt(second, 10);
  preElem.textContent = result;
}

const multiply = function () {
  const first = document.querySelector("#first").value;
  const second = document.querySelector("#second").value;
  const preElem = document.querySelector("#result");
  //   const btn = document.querySelector("#btn");

  const result = Number(first) * Number(second);
  //   const result = +first + +second;
  //   const result = parseInt(first, 10) + parseInt(second, 10);
  preElem.textContent = result;
};

// two types of return ; implicit and explicit return;
// const arrowFunction = (a, b) => a / b;
const arrowFunction = () => {
  const first = document.querySelector("#first").value;
  const second = document.querySelector("#second").value;
  const preElem = document.querySelector("#result");
  //   const btn = document.querySelector("#btn");

  const result = Number(first) / Number(second);
  //   const result = +first + +second;
  //   const result = parseInt(first, 10) + parseInt(second, 10);
  preElem.textContent = result;
};

const listItem = () => {
  const ulLists = document.querySelector("#lists");
  const names = ["john", "michael", "princewill", "peter"];

  names.forEach((name) => {
    console.log("name", name);
    const li = document.createElement("li");
    li.textContent = name;
    ulLists.appendChild(li);
  });
};

listItem();

// console.log("arrowFunction()", arrowFunction(10, 2));
