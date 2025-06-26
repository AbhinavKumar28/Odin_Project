// import data from "../../data/data.js"
import { saveTodo, getTodos, deleteTodo } from "../storage/todoStorage.js";
// export default function todoView(){
//     const mainDiv = document.getElementById("entrypoint")
//     const divcontainer = document.createElement("div")
//     divcontainer.classList.add="todolist_heading"
//     const div_para= document.createElement("p")
//     div_para.textContent = "Todo List"
    
//     mainDiv.appendChild(divcontainer)
//     data().forEach((element,i) => {
        
//         const div_for_each_item = document.createElement("div")
//         div_for_each_item.id=`todo-item-${i}`
//         div_for_each_item.textContent=
//         div_for_each_item.classList.add("todoitem__container")
//         const del_for_each_item = document.createElement("button")
//         del_for_each_item.id=`todo-del-${i}`
//         del_for_each_item.textContent="Delete"
//         del_for_each_item.classList.add("todoitem__deletebtn")
//         const span_for_each_item = document.createElement("span")
//         span_for_each_item.id=`todo-span-${i}`
//         span_for_each_item.textContent=element
//         span_for_each_item.classList.add("todoitem__title")
//         const open_for_each_item = document.createElement("button")
//         open_for_each_item.id=`todo-open-${i}`
//         open_for_each_item.textContent="Open"
//         open_for_each_item.classList.add("todoitem__openbtn")
        
//         div_for_each_item.append(del_for_each_item,span_for_each_item,open_for_each_item)
//         // console.log(a.id)
//         mainDiv.appendChild(div_for_each_item)
        
//     })
// }
// todoView()
export function renderTodos() {
  const container = document.getElementById("todo-list-container");
  container.innerHTML = ""; // Clear previous

  const todos = getTodos();

  todos.forEach((todo) => {
    const item = document.createElement("div");
    item.classList.add("todo-card");

    item.innerHTML = `
      <h4>${todo.title}</h4>
      <p>${todo.description}</p>
      <p>Due: ${todo.dueDate}</p>
      <p>Priority: ${todo.priority}</p>
      <p>Project: ${todo.project}</p>
    `;

    // Create button separately
    const delButton = document.createElement("button");
    delButton.textContent = "Delete";
    delButton.addEventListener("click", () => {
      deleteTodo(todo.id);
      renderTodos();
    });

    item.appendChild(delButton);
    container.appendChild(item);
  });
}
