const numbers = document.querySelectorAll(".number");
const innerContainers = document.querySelectorAll(".inner-container");

numbers.forEach((number, index) => {
  number.setAttribute("id", `number-${index}`);
  number.setAttribute("draggable", `true`);
});

numbers.forEach((number) => {
  number.addEventListener("dragstart", (event) => {
    event.target.style.backgroundColor = "yellow";
    event.dataTransfer.setData("text/plain", event.target.id);
  });
});

numbers.forEach((number) => {
  number.addEventListener("dragend", (event) => {
    event.target.style.backgroundColor = "#c0c0c0";
  });
});

innerContainers.forEach((inner) => {
  inner.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
});

innerContainers.forEach((inner) => {
  inner.addEventListener("drop", (event) => {
    if (inner.children.length == 0) {
      const draggedElementId = event.dataTransfer.getData("text/plain");
      const draggedElement = document.getElementById(draggedElementId);
      event.target.appendChild(draggedElement);
    }
  });
});
