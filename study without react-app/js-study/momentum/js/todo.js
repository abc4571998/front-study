const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "toDos";
// const toDos = JSON.parse(localStorage.getItem(TODOS_KEY)); // save todo list
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  toDos = toDos.filter((element) => element.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}

function finishToDo(e) {
  const li = e.target.parentElement;
  //   console.dir(li);
  const span = li.firstChild;
  span.classList.add("underline");
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  const finishButton = document.createElement("button");
  li.id = newToDoObj.id;
  span.innerText = newToDoObj.text;
  button.innerText = "✕";
  finishButton.innerText = "✔︎";

  button.addEventListener("click", deleteToDo);
  finishButton.addEventListener("click", finishToDo);

  li.appendChild(span);
  li.appendChild(finishButton);
  li.appendChild(button);
  toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  console.log(toDoInput.value);
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  console.log(savedToDos);

  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos;
  parseToDos.forEach(paintToDo);
}
