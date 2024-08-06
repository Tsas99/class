const createPost = document.getElementById("createPost");
const modalContainer = document.getElementById("modalContainer");
const layer = document.getElementById("layer");
const modal = document.getElementsByClassName("modal")[0];

createPost.addEventListener("click", () => {
  modalContainer.style.display = "flex";
});

layer.addEventListener("click", () => {
  modalContainer.style.display = "none";
});
