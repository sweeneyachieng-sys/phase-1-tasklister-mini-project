document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
const createTaskForm = document.querySelector("#create-task-form");
 document.addEventListener("submit", (event)=>{
  event.preventDefault();
//get the task input from the event
const task = event.target.elements["new-task-desription"].value;

  buildToDo(task);

  form.reset();
 })

function buildToDo(){
  const li = document.createElement("li");

  li.textContent = task;
   const taskList = document.querySelector('#tasks');
  taskList.append(li);
}
// buildToDo();