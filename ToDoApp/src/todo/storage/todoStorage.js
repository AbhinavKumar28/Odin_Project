const STORAGE_KEY = "todoList";

export function getTodos() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}
export function saveTodo(todo) {
  const todos = getTodos();
  todos.push(todo);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}
export function deleteTodo(id) {
  const todos = getTodos().filter(todo => todo.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}
export function clearAllTodos() {
  localStorage.removeItem(STORAGE_KEY);
}