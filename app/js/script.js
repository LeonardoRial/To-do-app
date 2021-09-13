const input = document.querySelector(".todo-input");
const button = document.querySelector(".todo-button");
const list = document.querySelector(".todo-list");

//Event Listners

button.addEventListener("click", addTodo);
//Functions
function addTodo(event) {
  //prevent reload of page
  event.preventDefault();

  //create elements
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = input.value;
  todoDiv.appendChild(newTodo);

  //create buttons
  const completed = document.createElement("button");
  completed.innerHTML = '<i class="fas fa-check"></i>';
  completed.classList.add("completed-btn");
  todoDiv.appendChild(completed);

  const trash = document.createElement("button");
  trash.innerHTML = '<i class="fas fa-trash"></i>';
  trash.classList.add("trash-btn");
  todoDiv.appendChild(trash);

  //append todos to the list
  list.appendChild(todoDiv);
}
