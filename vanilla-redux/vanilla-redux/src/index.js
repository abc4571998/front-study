import { createStore } from "redux";

const input = document.getElementById("input");
const submit = document.getElementById("submit_btn");
const ul = document.getElementById("list");

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { text: action.text, id: Date.now() }];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
  }
};
const store = createStore(reducer);

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.addEventListener("click", dispatchDeleteToDo);
    btn.innerText = "del";
    li.innerText = toDo.text;
    li.id = toDo.id;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch({ type: "DELETE", id });
};
const dispatchAddToDo = (text) => {
  // const id = e.target.parentNode.id;
  store.dispatch({ type: "ADD", text });
};
store.subscribe(paintToDos);
const onSubmit = (e) => {
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

submit.addEventListener("click", onSubmit);
