const title= document.getElementById("title");
const description = document.querySelector(".description");
const button = document.getElementById("changeBtn");

title.textContent="Title Changed by JavaScript!";
description.style.color="blue";
description.style.fontsize="18px";
button.addEventListener("click",function(){
    title.textContent="You clicked the button!";
    title.classList.add("active");
    description.textContent="The description was updated too.";
})