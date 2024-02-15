const displayTodo = document.querySelector("#displayTodo");
const todoLists = [];
const errorMessage = document.querySelector("#errorMessage");
const NoContextErrorMessage = document.querySelector("#NoContextErrorMessage");
const indexHolder = "";

const addTodo = () => {
  const todoText = document.querySelector("#todo");
  const storage = JSON.parse(localStorage.getItem("todoLists"));

  if (!todoText.value)
    return (errorMessage.textContent = "Text field is required!");

  // watch for duplicate
  const check4Duplicates = todoLists.find(
    ({ item }) => item === todoText.value
  );

  if (check4Duplicates)
    return (errorMessage.textContent = "Duplicate value dectected㊗️");

  errorMessage.textContent = "";

  const randomNumber = Math.floor(Math.random() * 100);

  const todoItem = {
    item: todoText.value,
    id: `${todoText.value.slice(0, 2)}-${randomNumber}`,
  };

  todoLists.push(todoItem);

  if (
    localStorage.getItem("todoLists") === undefined ||
    localStorage.getItem("todoLists") === null
  ) {
    localStorage.setItem("todoLists", JSON.stringify(todoLists));
  } else {
    storage.push(todoItem);

    localStorage.setItem("todoLists", JSON.stringify(storage));
  }

  displayTodoList();
};

/**
 * The `displayTodoList` function clears an element, retrieves data from local storage, and dynamically
 * creates and appends HTML elements based on the retrieved data.
 */
const displayTodoList = () => {
  // clear the element
  displayTodo.innerHTML = "";

  const storage = JSON.parse(localStorage.getItem("todoLists"));
  let noContent = "";
  if (storage !== null || storage !== undefined) {
    storage.length > 0
      ? storage.forEach((value, idx) => {
          const divElement = document.createElement("div");
          const smallElement = document.createElement("small");
          const buttonElement = document.createElement("button");

          buttonElement.textContent = "✖️";

          buttonElement.onclick = () => {
            console.log("cliced", idx);
            deleteTodo(idx);
          };

          smallElement.textContent = value.item;
          divElement.appendChild(smallElement);
          divElement.appendChild(buttonElement);
          displayTodo.appendChild(divElement);
        })
      : (noContent = "No todo yet");

    NoContextErrorMessage.textContent = noContent;
  }
};

document.addEventListener("DOMContentLoaded", displayTodoList);

const deleteTodo = (selectedTodoIndex) => {
  /* The line is checking if the
`todoLists` array has a length greater than 0. If it does, it then calls the `splice()` method on
the `todoLists` array to remove one element at the index specified by `selectedTodoIndex`. */
  let res = todoLists.length > 0 && todoLists.splice(selectedTodoIndex, 1);

  // set back the remaining data to the local storage
  localStorage.setItem("todoLists", JSON.stringify(todoLists));

  displayTodoList();
};
