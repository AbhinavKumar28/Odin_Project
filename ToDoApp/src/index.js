import { saveTodo, getTodos } from "./todo/storage/todoStorage.js";
import "./style.css";
import functionality from "./todo/applogic/button_functionality.js"
// import func from "./todo/view/todos-view.js"
import { renderTodos } from "./todo/view/todos-view.js";
console.log("To-Do App is running!");
// func()
// document.querySelector(".open-button").addEventListener("click", openForm);
// document.querySelector(".btn-cancel").addEventListener("click", closeForm);
window.openForm = functionality.openForm;
window.closeForm =functionality.closeForm;

document.querySelector(".form-container").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("todo-item-name").value.trim();
  const description = document.getElementById("todo-item-description").value.trim();
  const dueDate = document.getElementById("due-date").value;
  const priority = document.getElementById("priority-dropdown").value;
  const project = document.getElementById("selected-project-name").textContent;
  console.log(title,dueDate,priority)
  if (!title || !dueDate || !priority) {
    alert("Please fill in required fields.");
    return;
  }

  const todo = {
    id: Date.now(), // unique ID
    title,
    description,
    dueDate,
    priority,
    project
  };

  saveTodo(todo);
  e.target.reset(); // clear the form
  document.getElementById("todoForm").style.display = "none";

  renderTodos(); // optional: update UI
});
renderTodos()