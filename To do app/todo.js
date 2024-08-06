const todoArray = ["To do", "In progress", "Stuck", "Done"];
const stages = document.getElementById("stages");

todoArray.forEach((item) => {
  const formatted = item.split(" ").join("").toLowerCase();

  stages.innerHTML += `<div class="board">
        <div class="garchig">
          <h1 class="title">${item}</h1>
          <h1 class="number">0</h1>
        </div>
        <div class="task-container" id="${formatted}"></div>
        <button class="add-button" id="addcard" >
        + Add card
        </button>
      </div>`;
});

const addCardButton = document.querySelectorAll(".add-button");
const modalContainer = document.getElementById("modalContainer");
const todoCard = document.getElementById("todo-card");
const modal = document.getElementById("modal");

const submitButton = document.getElementById("add-task");

addCardButton.forEach((item) => {
  item.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

todoCard.addEventListener("click", () => {
  modal.style.display = "none";
});

const getTaskCard = (title, description, priority) => {
  return `<div class="task-layout">
      <div class="column1">
       <button class="done" id="done"><i class="fa-solid fa-check"></i></button
      </div>
      <div class="column2" >
        <div class="task-title">${title}</div>
        <div class="desc">${description}</div>
        <button class="prio">${priority}</button>
      </div>
      <div class="column3">
        <button class="remove" id="remove"><i class="fa-solid fa-xmark"></i></button>
        <button class="pen" id="pen"><i class="fa-regular fa-pen-to-square"></i></button>
      </div>
    </div>`;
};

const tasks = [];

const renderTasks = () => {
  const todoContainer = document.getElementById("todo");
  const stuckContainer = document.getElementById("stuck");
  const doneContainer = document.getElementById("done");
  const inProgressContainer = document.getElementById("inprogress");

  todoContainer.innerHTML = "";
  inProgressContainer.innerHTML = "";
  doneContainer.innerHTML = "";
  stuckContainer.innerHTML = "";

  tasks.forEach((task) => {
    switch (task.status) {
      case "todo":
        todoContainer.innerHTML += getTaskCard(
          task.title,
          task.description,
          task.priority
        );
        break;
      case "inprogress":
        inProgressContainer.innerHTML += getTaskCard(
          task.title,
          task.description,
          task.priority
        );
        break;
      case "stuck":
        stuckContainer.innerHTML += getTaskCard(
          task.title,
          task.description,
          task.priority
        );
        break;
      case "done":
        doneContainer.innerHTML += getTaskCard(
          task.title,
          task.description,
          task.priority
        );
        break;
    }
  });
};

submitButton.addEventListener("click", () => {
  const statusInput = document.getElementById("status");
  const descInput = document.getElementById("desc-input");
  const titleInput = document.getElementById("title-input");
  const priorityInput = document.getElementById("priority");

  const newTask = {
    title: titleInput.value,
    status: statusInput.value,
    description: descInput.value,
    priority: priorityInput.value,
  };

  tasks.push(newTask);

  titleInput.value = "";
  descInput.value = "";
  priorityInput.value = "";
  statusInput.value = "";

  modal.style.display = "none";

  renderTasks();
});
const doneButton = document.getElementById("done");
const removeButton = document.getElementById("remove");
const penButton = document.getAnimations("pen");

removeButton.addEventListener("click", () => {
  getTaskCard.style.display = "none";
});

doneButton.addEventListener("click", () => {});
