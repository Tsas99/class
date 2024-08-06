const addTask = document.getElementById("add-task");

const boardItems = [
  {name: "To do", color: "blue", count:0, id:"todo"},
  {name:"In progress", color:"yellow", count:"0", id:"inprogress"},
  {name: "Stuck", color:"green", count:"0", id:"stuck" },
  {name:"Done", color:"red" ,count:"0",id:"done" },
] ;
const taskValues = {
  title:"",
  description:"",
  status:"",
  priority:"",
};
boardItems.forEach(({color,}))
const taskCreator = () =>{
  return `<div class="list" draggable="true"><div class="urd">
          <button class="button"><i class="fa-solid fa-check"></i></button>
        </div>
        <div class="dund">
          <div class="title">${taskValues.title}</div>
          <div class="description">${taskValues.description}</div>
          <div class="priority">${taskValues.priority}</div>
        </div>
        <div class="ard">
          <button class="button"><i class="fa-solid fa-xmark"></i></button>
          <button class="button" >0</button>
        </div>`
};

addTask.addEventListener("click", ()=>{

})
 

addTask.addEventListener("click", () => {

});