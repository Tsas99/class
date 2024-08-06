// const a = document.getElementById("hello");
// a.innerText="Hello World"
// console.log(a);

// const a = document.querySelectorAll(".asd")

// const h1 = document.getElementById("hello");
// h1.addEventListener("mouseover", () =>{
//     window.location.href = "https://google.com";

// })

// h1.addEventListener("mouseout", () => {
//     console.log("out");
// })

// const minus = document.getElementById("minus");
// const volume = document.getElementById("volume");
// const add = document.getElementById("add");

// minus.addEventListener("click", () => {
//   const newValue = parseInt(volume.innerText) - 1;
//   volume.innerText = newValue;
// });
// add.addEventListener("click", () => {
//   const newValue = parseInt(volume.innerText) + 1;
//   volume.innerText = newValue;
// });

// const first = document.getElementById("first");
// const second = document.getElementById("second");
// const result = document.getElementById("result");
// const compute = document.getElementById("compute");

// const action = document.getElementById("action");

// compute.addEventListener ("click", () => {
//     const operator = action.value
//     switch (operator) {
//         case value1:
//             result.innerText  = first.value * second.value;
//         case value2:
//             result.innerText  = first.value + second.value;
//         case value3:
//             result.innerText  = first.value - second.value;
//         case value4:
//             result.innerText  = first.value / second.value;
//     }

// });
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const image = document.getElementById("image");
const slider = ["./arch0.jpeg", "./arch1.jpg", "./arch2.jpg"];
let a = 0;
image.src = slider[a];

previous.addEventListener("click", () => {
  image.src = slider[a];
  if (a == 0) {
    a = slider.length - 1;
  } else {
    a--;
  }
});
next.addEventListener("click", () => {
    image.src = slider[a];
   if (a == 0)
  
});
