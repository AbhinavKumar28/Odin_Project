import "./style.css";
import functionality from "./todo/applogic/button_functionality.js"
import func from "./todo/view/todos-view.js"
console.log("To-Do App is running!");
func()
// document.querySelector(".open-button").addEventListener("click", openForm);
// document.querySelector(".btn-cancel").addEventListener("click", closeForm);
window.openForm = functionality.openForm;
window.closeForm =functionality.closeForm;
