let totalTasks=0;

 const taskInput = document.getElementById("taskInput");
 const addBtn  = document.getElementById("addBtn");
 const taskList  = document.getElementById("taskList");
 const counter  = document.getElementById("counter");

function updateCounter(){
    counter.textContent = "Total tasks: " + totalTasks;
}

function addTask(){
    const text = taskInput.value.trim();
    if(text===""){
        return;
    }
    const li=document.createElement("li");

const span=document.createElement("span");
span.textContent=text;

const deleteBtn =document.createElement("button");
deleteBtn.textContent="Delete";
deleteBtn.className="delete-btn";

span.addEventListener("click",function(){
    li.classList.toggle("completed");
});

deleteBtn.addEventListener("click",function(){
    li.remove();
    totalTasks=totalTasks - 1;
    updateCounter();
});

li.appendChild(span);
li.appendChild(deleteBtn);
taskList.appendChild(li);

totalTasks=totalTasks+1;
updateCounter();

taskInput.value ="";
taskInput.focus();
}
 
addBtn.addEventListener("click",addTask);

taskInput.addEventListener("keydown", function(event){
    if(event.key==="Enter"){
        addTask();
    }
});

updateCounter();


