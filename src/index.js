
const createTaskForm = document.querySelector("#create-task-form");

 createTaskForm.addEventListener("submit", (event) => {

  event.preventDefault();
//get the task input from the event
const task = event.target.elements["new-task-desription"].value;

  buildToDo(task);

  createTaskForm.reset();
 })

function buildToDo(task){

  const li = document.createElement("li");

  li.textContent = task;

   const taskList = document.querySelector('#tasks');

  taskList.append(li);

}
document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
// buildToDo();